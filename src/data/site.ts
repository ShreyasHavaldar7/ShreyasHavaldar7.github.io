export const site = {
  name: 'Shreyas Havaldar',
  role: 'PhD Student, Columbia University',
  description:
    'Shreyas Havaldar is a Presidential Fellow PhD student at Columbia University working on causal reasoning in generative and world models.',
  // Written out in words so the real addresses never appear in the page for bots to scrape.
  contacts: ['{firstname}.{lastname}[at]columbia.edu', '{firstname}{lastname}[at]gmail.com'],
  resume: 'https://drive.google.com/file/d/1X25RGgSCexnjuhv14p_b2peNJVksWHsN/view?usp=sharing',
  gtag: 'G-NZPWSD5CM9',
};

export const tabs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Publications', href: '/publications' },
  { label: 'Reading', href: '/reading' },
  { label: 'Writing', href: '/writing' },
];

export const socials = [
  { label: 'Contact', href: '/#contact', icon: 'mail' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=kLk_Ep0AAAAJ&hl=en', icon: 'scholar' },
  { label: 'GitHub', href: 'https://github.com/ShreyasHavaldar7', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shreyas-havaldar-71377b182', icon: 'linkedin' },
  { label: 'X / Twitter', href: 'https://x.com/_toolazyto_', icon: 'x' },
  { label: 'Goodreads', href: 'https://www.goodreads.com/user/show/118954168-shreyas-havaldar', icon: 'goodreads' },
  { label: 'Beli', href: 'https://beliapp.co/app/shre7', icon: 'beli' },
] as const;
