export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  color: string
  iconName: string
  liveUrl: string | null
  githubUrl: string
  status: 'live' | 'beta' | 'incubating'
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'jsdaycare',
    name: 'JsDayCare',
    tagline: 'Daycare & School Management',
    description:
      'A SaaS portal for daycare centres and schools — attendance, room management, staff schedules, student check-ins, and parent invite flows.',
    color: '#f97316',
    iconName: 'School',
    liveUrl: 'https://usdaycare.netlify.app',
    githubUrl: 'https://github.com/naatu-paakam/jsdaycare',
    status: 'live',
    tags: ['SaaS', 'EdTech', 'Supabase'],
  },
  {
    id: 'one-family',
    name: 'Family Vibes',
    tagline: "Your Family's Living Memory",
    description:
      "A private family space to share stories, plan events, build your family tree, and get AI-generated summaries of your family's milestones.",
    color: '#F72585',
    iconName: 'Heart',
    liveUrl: 'https://one-family.netlify.app',
    githubUrl: 'https://github.com/naatu-paakam/one-family',
    status: 'live',
    tags: ['AI', 'Memories', 'Supabase'],
  },
  {
    id: 'pkeep',
    name: 'Pkeep',
    tagline: 'Worker & Visitor Registry',
    description:
      'A digital registry for apartment complexes — track workers, issue QR visitor passes, enable gate-guard check-ins, and rate service providers.',
    color: '#0ea5e9',
    iconName: 'Building2',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/pkeep',
    status: 'beta',
    tags: ['PropTech', 'QR Codes', 'Supabase'],
  },
  {
    id: 'keep-plants-live',
    name: 'Keep Plants Live',
    tagline: 'Never Forget to Water Again',
    description:
      'A smart plant care companion — log your plants, set watering schedules, and get AI care advice. Built for the busy plant owner.',
    color: '#22c55e',
    iconName: 'Sprout',
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
      'A personal AI assistant with persistent context — it learns your preferences, history, and goals so every conversation continues from where you left off.',
    color: '#8b5cf6',
    iconName: 'Brain',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/ai-companion',
    status: 'beta',
    tags: ['AI', 'Claude', 'Personalization'],
  },
  {
    id: 'the-pickle-pot',
    name: 'The Pickle Pot',
    tagline: 'Artisan Pickles & Spice Powders',
    description:
      'An e-commerce platform for authentic artisan pickles and spice powders — browse curated selections, customise heat levels, and ship to your door.',
    color: '#f59e0b',
    iconName: 'ShoppingBag',
    liveUrl: null,
    githubUrl: 'https://github.com/codepil/the-pickle-pot',
    status: 'incubating',
    tags: ['E-commerce', 'Food', 'React'],
  },
  {
    id: 'launchpad',
    name: 'LaunchPad',
    tagline: 'AI Usage Visibility for Engineering Teams',
    description:
      'A transparent Claude API proxy — track usage per developer, distinguish official vs personal sessions, monitor token costs, and detect PII leaks in prompts.',
    color: '#6366f1',
    iconName: 'Rocket',
    liveUrl: null,
    githubUrl: 'https://github.com/naatu-paakam/launchpad',
    status: 'incubating',
    tags: ['DevTools', 'AI Governance', 'Proxy'],
  },
]

export const statusMeta: Record<Project['status'], { label: string; dot: string; text: string }> = {
  live:        { label: 'Live',       dot: 'bg-emerald-500', text: 'text-emerald-700' },
  beta:        { label: 'Beta',       dot: 'bg-amber-400',   text: 'text-amber-700'   },
  incubating:  { label: 'Incubating', dot: 'bg-slate-400',   text: 'text-slate-500'   },
}
