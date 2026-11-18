export type PubKind = 'Conference' | 'Workshop' | 'Preprint';

export interface Publication {
  ids: string[]; // e.g. ['C.2', 'W.3'], as on the résumé
  title: string;
  authors: string; // use * for equal contribution; "Havaldar, S." is highlighted automatically
  venue: string; // short, HTML allowed
  year: number;
  kinds: PubKind[];
  highlight?: string; // e.g. 'Best Paper', 'Oral', 'Spotlight'
  note?: string; // shown in place of links, e.g. 'arXiv coming soon'
  links: { label: string; href: string }[];
}

// Newest first.
export const publications: Publication[] = [
  {
    ids: ['P.3'],
    title: 'CaLM: Causal Language Modeling for Counterfactual World Simulations',
    authors: 'Havaldar, S., Jalaldoust, K., Pan, Y., and Bareinboim, E.',
    venue: 'Under submission at <strong>ICLR ’27</strong>',
    year: 2026,
    kinds: ['Preprint'],
    note: 'arXiv coming soon',
    links: [],
  },
  {
    ids: ['W.4'],
    title: 'CoBe: A Benchmark For Conversational Counterfactual Text Editing',
    authors:
      'Raghavan, A.*, Hwang, I.*, Havaldar, S.*, Lee, K.Z., Maiti, A., Pan, Y., Wu, J., Li, M. and Bareinboim, E.',
    venue:
      'Poster at <a href="https://trustworthy-ai-for-good.github.io/">AI4GOOD</a>, <a href="https://tai-eval.github.io/">TAE</a> @ <strong>NeurIPS ’26</strong>',
    year: 2026,
    kinds: ['Workshop'],
    links: [{ label: 'Website', href: 'https://cobe-bench.com/' }],
  },
  {
    ids: ['P.2'],
    title: 'Epidemiology of Large Language Models: A Benchmark for Observational Distribution Knowledge',
    authors: 'Plecko, D., Okanovic, P., Havaldar, S., Hoefler, T. & Bareinboim, E.',
    venue: 'Under submission at <strong>DMLR</strong>',
    year: 2025,
    kinds: ['Preprint'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2511.03070' }],
  },
  {
    ids: ['C.3'],
    title: 'Learning from Label Proportions and Covariate-shifted Instances',
    authors: 'Singh, S., Sharma, N.*, Havaldar, S.*, Saket, R., & Raghuveer, A.',
    venue: 'Poster at <strong>UAI ’25</strong>',
    year: 2025,
    kinds: ['Conference'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2411.12334' }],
  },
  {
    ids: ['C.2', 'W.3'],
    title: 'Learning from Label Proportions: Bootstrapping Supervised Learners via Belief Propagation',
    authors: 'Havaldar, S.*, Sharma, N.*, Sareen, S., Shanmugam, K., & Raghuveer, A.',
    venue:
      '<a href="https://iclr.cc/virtual/2024/poster/18905">Poster</a> at <strong>ICLR ’24</strong> & <a href="https://neurips.cc/virtual/2023/80599">Oral</a> at <a href="https://regulatableml.github.io/">Regulatable-ML</a> @ <strong>NeurIPS ’23</strong>',
    year: 2024,
    kinds: ['Conference', 'Workshop'],
    highlight: 'Oral',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2310.08056' }],
  },
  {
    ids: ['C.1', 'W.2'],
    title: 'Improving Fairness-Accuracy tradeoff with few Test Samples under Covariate Shift',
    authors: 'Havaldar, S.*, Chauhan, J.*, Shanmugam, K.*, Nandy, J., & Raghuveer, A.',
    venue:
      '<a href="https://underline.io/lecture/93241-fairness-under-covariate-shift-improving-fairness-accuracy-tradeoff-with-few-unlabeled-test-samples">Poster</a> at <strong>AAAI ’24</strong> & <a href="https://neurips.cc/virtual/2023/77753">Spotlight</a> at <a href="https://www.afciworkshop.org/past-editions/aft-2023">AFT</a> @ <strong>NeurIPS ’23</strong>',
    year: 2024,
    kinds: ['Conference', 'Workshop'],
    highlight: 'Spotlight',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2310.07535' }],
  },
  {
    ids: ['P.1'],
    title: 'Label Differential Privacy via Aggregation',
    authors: 'Brahmbhatt, A., Saket, R., Havaldar, S., Nasery, A., Makhija, Y. & Raghuveer, A.',
    venue: 'Under submission at <strong>TMLR</strong>',
    year: 2023,
    kinds: ['Preprint'],
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2310.10092' }],
  },
  {
    ids: ['W.1'],
    title: 'On the Benefits of Defining Vicinal Distributions in Latent Space',
    authors: 'Mangla, P., Singh, V., Havaldar, S., & Balasubramanian, V.',
    venue:
      'Best Paper @ <a href="https://aisecure-workshop.github.io/amlcvpr2021/">AML-CV</a> @ <strong>CVPR ’21</strong>; presented at RobustML and <a href="https://sites.google.com/view/rai-workshop/home">RAI</a> (ICLR ’21)',
    year: 2021,
    kinds: ['Workshop'],
    highlight: 'Best Paper',
    links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2003.06566' }],
  },
];
