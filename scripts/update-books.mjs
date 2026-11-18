// Refreshes src/data/books.json from the public Goodreads "read" shelf widget,
// newest read first. Run with: npm run books
import { writeFile } from 'node:fs/promises';

const USER_ID = '118954168';
const COUNT = 100;
const OUT = new URL('../src/data/books.json', import.meta.url);

const params = new URLSearchParams({
  num_books: String(COUNT),
  shelf: 'read',
  sort: 'date_read',
  order: 'd', // newest first
  show_author: '1',
  show_cover: '1',
  show_rating: '1',
  show_review: '1',
  show_title: '1',
  cover_size: 'medium',
  widget_id: '1',
});
const url = `https://www.goodreads.com/review/custom_widget/${USER_ID}.read?${params}`;

const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (personal site build)' } });
if (!res.ok) throw new Error(`Goodreads responded ${res.status}`);
const js = await res.text();

// The widget is a JS snippet: var widget_code = '<html…>'; Pull out and unescape the string.
const m = js.match(/var widget_code = '([\s\S]*?)';?\s*\n\s*var widget_div/);
if (!m) throw new Error('Could not find widget_code in the Goodreads response');
const markup = m[1].replace(/\\(.)/g, (_, c) => (c === 'n' ? '\n' : c === 't' ? '\t' : c));

const decode = (s) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

const books = [];
for (const block of markup.split(/<div class="gr_custom_each_container_\w+">/).slice(1)) {
  const pick = (re) => block.match(re)?.[1];
  const title = pick(/gr_custom_title_\w+">\s*<a[^>]*>([\s\S]*?)<\/a>/);
  if (!title) continue;
  books.push({
    title: decode(title),
    author: decode(pick(/gr_custom_author_\w+">\s*by\s*<a[^>]*>([\s\S]*?)<\/a>/) ?? ''),
    url: decode(pick(/gr_custom_title_\w+">\s*<a[^>]*href="([^"]+)"/) ?? '').split('?')[0],
    cover: pick(/<img alt="[^"]*" border="0" src="([^"]+)"/) ?? '',
    rating: (block.match(/red_star_active\.png/g) ?? []).length,
    review: decode(pick(/gr_custom_review_\w+">([\s\S]*?)<\/div>/) ?? ''),
  });
}

if (books.length < 10) throw new Error(`Only parsed ${books.length} books; leaving books.json unchanged`);
await writeFile(OUT, JSON.stringify(books, null, 1) + '\n');
console.log(`Wrote ${books.length} books (newest first). Top 5:`);
for (const b of books.slice(0, 5)) console.log(`  ${b.title} by ${b.author}`);
