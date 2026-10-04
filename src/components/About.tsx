import { Lightbulb, FlaskConical, Rocket, Globe, ChevronRight } from 'lucide-react'

const stages = [
  {
    icon: Lightbulb,
    label: 'Ideate',
    org: 'pavan-ideas',
    href: 'https://pavan-ideas.netlify.app/',
    color: '#D4941A',
    bg: '#FEF9EC',
    border: '#F5D98A',
    principles: ['Scored on reach, revenue & feasibility', 'Solves a real problem for families', 'Unique — not a clone'],
    value: 'Only high-signal ideas make it forward',
  },
  {
    icon: FlaskConical,
    label: 'Incubate',
    org: 'codepil',
    href: 'https://github.com/codepil',
    color: '#2D7D35',
    bg: '#F0FAF1',
    border: '#A7D7AA',
    principles: ['Build MVP fast — no perfection', 'Validate with real usage', 'Experiment freely'],
    value: 'Fail early; graduate only what proves value',
  },
  {
    icon: Rocket,
    label: 'Graduate',
    org: 'naatu-paakam',
    href: 'https://github.com/naatu-paakam',
    color: '#7C4A22',
    bg: '#FDF4E3',
    border: '#D4B896',
    principles: ['MVP ships to real users', 'Supabase + Netlify stack', 'E2E tested before every push'],
    value: 'Production quality, open roadmap',
  },
  {
    icon: Globe,
    label: 'Public Beta',
    org: 'naatupaakam.com',
    href: 'https://naatupaakam.com',
    color: '#4A2810',
    bg: '#FDF0E8',
    border: '#C5A882',
    principles: ['Multi-tenant SaaS or open access', 'Community feedback drives R1', 'Subscription model where applicable'],
    value: 'Sustainable products, real revenue',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white border-b border-[#F0E4CC]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2C1507] mb-3">
            From Idea to Product
          </h2>
          <p className="text-[#7C4A22] max-w-2xl mx-auto text-base">
            Every Naatu Paakam product passes through a disciplined four-stage pipeline —
            ensuring only validated, well-built ideas reach real users.
          </p>
        </div>

        {/* desktop pipeline */}
        <div className="hidden md:flex items-start gap-0 mb-16">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={stage.label} className="flex items-start flex-1">
                <div
                  className="flex-1 rounded-2xl border p-5 flex flex-col"
                  style={{ backgroundColor: stage.bg, borderColor: stage.border }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stage.color + '18' }}>
                      <Icon className="w-5 h-5" style={{ color: stage.color }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#7C4A22]/60 uppercase tracking-wider">Stage {i + 1}</div>
                      <div className="text-sm font-bold text-[#2C1507]">{stage.label}</div>
                    </div>
                  </div>
                  <a href={stage.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium mb-4 inline-block hover:underline" style={{ color: stage.color }}>
                    {stage.org} ↗
                  </a>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {stage.principles.map(p => (
                      <li key={p} className="flex items-start gap-2 text-xs text-[#5C3A1E]">
                        <span className="mt-0.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: stage.color }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-semibold px-3 py-2 rounded-lg text-center"
                    style={{ backgroundColor: stage.color + '15', color: stage.color }}>
                    {stage.value}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex items-center self-center px-1 mt-[-20px]">
                    <ChevronRight className="w-5 h-5 text-[#C5A882] flex-shrink-0" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* mobile */}
        <div className="md:hidden flex flex-col gap-4 mb-16">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <div key={stage.label}>
                <div className="rounded-2xl border p-5" style={{ backgroundColor: stage.bg, borderColor: stage.border }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: stage.color + '18' }}>
                      <Icon className="w-5 h-5" style={{ color: stage.color }} strokeWidth={1.75} />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold text-[#7C4A22]/60 uppercase tracking-wider">Stage {i + 1}</div>
                      <div className="text-sm font-bold text-[#2C1507]">{stage.label}</div>
                    </div>
                  </div>
                  <a href={stage.href} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-medium block mb-3 hover:underline" style={{ color: stage.color }}>
                    {stage.org} ↗
                  </a>
                  <div className="text-xs font-semibold px-3 py-2 rounded-lg text-center"
                    style={{ backgroundColor: stage.color + '15', color: stage.color }}>
                    {stage.value}
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div className="flex justify-center my-1">
                    <ChevronRight className="w-4 h-4 text-[#C5A882] rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* guiding principles */}
        <div className="rounded-2xl bg-[#2C1507] p-8">
          <h3 className="text-[#F5EAD0] font-bold text-lg text-center mb-6">Guiding Principles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            {[
              { title: 'Real Problems',        body: 'Every product addresses a genuine daily friction — not a solution looking for a problem.' },
              { title: 'Ship Small, Learn Fast', body: 'MVPs over roadmaps. Real usage beats assumptions. We iterate on what users actually do.' },
              { title: 'Open by Default',      body: 'Code lives on GitHub. Decisions are documented. No black boxes — users and contributors can see how things work.' },
              { title: 'Sustainable Revenue',  body: 'Each product aims for a clear monetisation path — subscriptions, per-society fees, or freemium — so it can sustain itself.' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-[#4A2810]/50 rounded-xl p-4">
                <div className="text-[#D4941A] font-semibold mb-1.5">{title}</div>
                <div className="text-[#D4B896] text-xs leading-relaxed">{body}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
