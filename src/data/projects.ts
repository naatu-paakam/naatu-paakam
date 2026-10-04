export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  color: string        // brand accent
  bg: string           // card bg tint
  icon: string         // emoji icon (SVG icons replace these in cards)
  liveUrl: string | null
  githubUrl: string
  status: 'live' | 'beta' | 'incubating'
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'jsdaycare',
    name: 'JsDayCare',
    tagline: 'Daycare & School Management, Simplified',
    description:
      'A SaaS portal for daycare centres and schools — attendance, rooms, staff schedules, student check-ins, and parent invite flows. Built for Indian childcare operators.',
    color: '#f97316',
    bg: '#fff7ed',
    icon: '🏫',
    liveUrl: 'https://usdaycare.netlify.app',
    githubUrl: 'https://github.com/naatu-paakam/jsdaycare',
    status: 'live',
    tags: ['SaaS', 'EdTech', 'React', 'Supabase'],
  },
  {
    id: 'one-family',
    name: 'Family Vibes',
    tagline: "Your Family's Living Memory",
    description:
      "A private family space to share stories, plan events, build your family tree, and get AI-generated summaries of your family's milestones.",
    color: '#F72585',
    bg: '#fff0f7',
    icon: '❤️',
    liveUrl: 'https://one-family.netlify.app',
    githubUrl: 'https://github.com/naatu-paakam/one-family',
    status: 'live',
    tags: ['Family', 'AI', 'Memories', 'Supabase'],
  },
  {
    id: 'pkeep',
    name: 'Pkeep',
    tagline: 'Worker & Visitor Registry for Housing Societies',
    description:
      'A digital registry for Indian apartment complexes — track workers, issue QR passes for visitors, enable gate-guard check-ins, and rate service providers.',
    color: '#0ea5e9',
    bg: '#f0f9ff',
    icon: '🏢',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/pkeep',
    status: 'beta',
    tags: ['PropTech', 'QR Codes', 'React', 'Supabase'],
  },
  {
    id: 'keep-plants-live',
    name: 'Keep Plants Live',
    tagline: 'Never Forget to Water Again',
    description:
      'A smart plant care companion — log your plants, set watering schedules, and get AI care advice. For the forgetful plant parent.',
    color: '#22c55e',
    bg: '#f0fdf4',
    icon: '🌱',
    liveUrl: 'https://plantslife.netlify.app',
    githubUrl: 'https://github.com/naatu-paakam/keep-plants-live',
    status: 'live',
    tags: ['Lifestyle', 'AI', 'Netlify Functions'],
  },
  {
    id: 'ai-companion',
    name: 'AI Companion',
    tagline: 'An AI Assistant That Remembers You',
    description:
      'A personal AI assistant with persistent user context — it learns your preferences, your history, and your goals so every conversation picks up where the last left off.',
    color: '#8b5cf6',
    bg: '#faf5ff',
    icon: '🤖',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/ai-companion',
    status: 'beta',
    tags: ['AI', 'Claude', 'Personalization'],
  },
  {
    id: 'the-pickle-pot',
    name: 'The Pickle Pot',
    tagline: 'Authentic Indian Pickles, Delivered',
    description:
      'An e-commerce platform for authentic Indian pickles and spice powders — browse, customise heat levels, and get them shipped to your door.',
    color: '#f59e0b',
    bg: '#fffbeb',
    icon: '🫙',
    liveUrl: null,
    githubUrl: 'https://github.com/codepil/the-pickle-pot',
    status: 'incubating',
    tags: ['E-commerce', 'Food', 'React'],
  },
  {
    id: 'launchpad',
    name: 'LaunchPad',
    tagline: 'Visibility Into Your AI Development Spend',
    description:
      'A transparent Claude API proxy for engineering teams — track usage per developer, distinguish official vs personal sessions, monitor token costs, and detect PII leaks.',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: '🚀',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/launchpad',
    status: 'incubating',
    tags: ['DevTools', 'AI Governance', 'Proxy'],
  },
]

export const statusLabel: Record<Project['status'], string> = {
  live: 'Live',
  beta: 'Beta',
  incubating: 'Incubating',
}

export const statusStyle: Record<Project['status'], string> = {
  live: 'bg-green-100 text-green-800',
  beta: 'bg-amber-100 text-amber-800',
  incubating: 'bg-slate-100 text-slate-600',
}
