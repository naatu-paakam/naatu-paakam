import { Lightbulb, FlaskConical, Rocket, Globe, ChevronRight } from 'lucide-react'

const stages = [
  {
    icon: Lightbulb,
    label: 'Ideate',
    org: 'pavan-ideas',
    href: 'https://pavan-ideas.netlify.app/',
    color: '#F5C842',
    bg: '#fffbeb',
    border: '#fde68a',
    principles: ['Scored on reach, revenue & feasibility', 'Real problem for Indian families', 'Unique — not a clone'],
    value: 'Only high-signal ideas make it forward',
  },
  {
    icon: FlaskConical,
    label: 'Incubate',
    org: 'codepil',
    href: 'https://github.com/codepil',
    color: '#52B788',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    principles: ['Build MVP fast — no perfection', 'Validate with real usage', 'Experiment freely'],
    value: 'Fail early; graduate only what proves value',
  },
  {
    icon: Rocket,
    label: 'Graduate',
    org: 'naatu-paakam',
    href: 'https://github.com/naatu-paakam',
    color: '#f97316',
    bg: '#fff7ed',
    border: '#fed7aa',
    principles: ['MVP ships to real users', 'Supabase + Netlify stack', 'E2E tested before every push'],
    value: 'Production quality, open roadmap',
  },
  {
    icon: Globe,
    label: 'Public Beta',
    org: 'naatupaakam.com',
    href: 'https://naatupaakam.com',
    color: '#8b5cf6',
    bg: '#faf5ff',
    border: '#ddd6fe',
    principles: ['Multi-tenant SaaS or open access', 'Community feedback drives R1', 'Subscription model where applicable'],
    value: 'Sustainable products, real revenue',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            From Idea to Product
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-base">
            Every Naatu Paakam product passes through a disciplined four-stage pipeline —
            ensuring only validated, well-built ideas reach real users.
          </p>
        </div>

        {/* horizontal pipeline — desktop */}
        <div className="hidden md:flex items-start gap-0 mb-16">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={stage.label} className="flex items-start flex-1">
                {/* card */}
                <div
                  className="flex-1 rounded-2xl border p-5 flex flex-col"
                  style={{ backgroundColor: stage.bg, borderColor: stage.border }}
                >
                  {/* stage number + icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stage.color + '22' }}>
                      <Icon className="w-5 h-5" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stage {i + 1}</div>
                      <div className="text-base font-bold text-slate-900">{stage.label}</div>
                    </div>
                  </div>

                  {/* org link */}
                  <a
                    href={stage.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium mb-4 inline-block hover:underline"
                    style={{ color: stage.color }}
                  >
                    {stage.org} ↗
                  </a>

                  {/* principles */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {stage.principles.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* value added */}
                  <div
                    className="text-xs font-semibold px-3 py-2 rounded-lg text-center"
                    style={{ backgroundColor: stage.color + '18', color: stage.color }}
                  >
                    {stage.value}
                  </div>
                </div>

                {/* arrow connector */}
                {i < stages.length - 1 && (
                  <div className="flex items-center self-center px-1 mt-[-20px]">
                    <ChevronRight className="w-6 h-6 text-slate-300 flex-shrink-0" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* mobile — vertical stack */}
        <div className="md:hidden flex flex-col gap-4 mb-16">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={stage.label}>
                <div
                  className="rounded-2xl border p-5"
                  style={{ backgroundColor: stage.bg, borderColor: stage.border }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stage.color + '22' }}>
                      <Icon className="w-5 h-5" style={{ color: stage.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Stage {i + 1}</div>
                      <div className="text-base font-bold text-slate-900">{stage.label}</div>
                    </div>
                  </div>
                  <a href={stage.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium hover:underline block mb-3" style={{ color: stage.color }}>
                    {stage.org} ↗
                  </a>
                  <div className="text-xs font-semibold px-3 py-2 rounded-lg text-center"
                    style={{ backgroundColor: stage.color + '18', color: stage.color }}>
                    {stage.value}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ChevronRight className="w-5 h-5 text-slate-300 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* guiding principles strip */}
        <div className="rounded-2xl bg-[#1B4332] p-8">
          <h3 className="text-[#F7EDD0] font-bold text-lg text-center mb-6">Guiding Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { title: 'Real Problems', body: 'Every product solves a genuine daily friction for families — not a solution looking for a problem.' },
              { title: 'Ship Small, Learn Fast', body: 'MVPs over roadmaps. Real usage beats assumptions. We iterate on what users actually do.' },
              { title: 'Open by Default', body: 'Code lives on GitHub. Decisions are documented. No black boxes — users and contributors can see how things work.' },
              { title: 'Sustainable Revenue', body: 'Each product aims for a clear monetisation path — subscriptions, per-society fees, or freemium — so it can sustain itself.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#2D6A4F]/60 rounded-xl p-4">
                <div className="text-[#F5C842] font-semibold mb-1.5">{title}</div>
                <div className="text-[#B7E4C7] text-xs leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
