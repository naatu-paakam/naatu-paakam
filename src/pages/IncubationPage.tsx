import { Link } from 'react-router-dom'
import { FlaskConical, ShoppingBag, Rocket, ArrowLeft, ExternalLink, GitFork } from 'lucide-react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const incubating = [
  {
    name: 'The Pickle Pot',
    tagline: 'Artisan Pickles & Spice Powders',
    description:
      'An e-commerce platform for authentic artisan pickles and spice powders — browse curated selections, customise heat levels, and ship to your door. Built as a full-stack scaffold (React + FastAPI) proving the pattern for food-commerce in the NaatuPaakam ecosystem.',
    color: '#f59e0b',
    Icon: ShoppingBag,
    githubUrl: 'https://github.com/codepil/the-pickle-pot',
    liveUrl: null,
    tags: ['E-commerce', 'React', 'FastAPI', 'Food'],
    whyNow: 'Validating demand for artisan food D2C before building fulfilment infrastructure.',
    nextStep: 'Pilot with 3 vendors; if GMV > ₹50k/month → graduate to naatu-paakam.',
  },
  {
    name: 'LaunchPad',
    tagline: 'AI Usage Visibility for Engineering Teams',
    description:
      'A transparent Claude API proxy that gives engineering teams full visibility into how AI is being used — usage per developer, token costs, PII detection in prompts, and distinction between official and personal sessions. Built for teams that want governance without friction.',
    color: '#6366f1',
    Icon: Rocket,
    githubUrl: 'https://github.com/naatu-paakam/launchpad',
    liveUrl: null,
    tags: ['DevTools', 'AI Governance', 'Proxy', 'Claude'],
    whyNow: 'AI spend is growing fast with no visibility. Teams need a lightweight audit layer before committing to enterprise tooling.',
    nextStep: 'Internal dogfood on NaatuPaakam projects; collect cost + PII data; publish usage dashboard.',
  },
]

export function IncubationPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF4E3]">
      <Header />

      <main className="flex-1">
        {/* hero */}
        <section className="bg-[#2C1507] text-[#F5EAD0] py-16">
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-1.5 text-[#D4941A] text-sm font-medium mb-8 hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Naatu Paakam
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#4A2810] flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-[#D4941A]" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#D4941A]">InnoLabs</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">What's Brewing</h1>
            <p className="text-[#D4B896] text-lg max-w-2xl leading-relaxed mb-6">
              InnoLabs (
              <a href="https://github.com/codepil" target="_blank" rel="noopener noreferrer"
                className="text-[#D4941A] hover:underline font-medium">codepil
              </a>
              ) is our incubation ground — where new ideas are built, validated, and stress-tested before graduating to a Naatu Paakam product.
            </p>
            <p className="text-[#C5A882] text-sm max-w-xl">
              Projects here are real and in active development, but not yet ready for a public launch. They graduate when they prove market fit.
            </p>
          </div>
        </section>

        {/* how innolabs works */}
        <section className="bg-white border-b border-[#F0E4CC] py-12">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-lg font-bold text-[#2C1507] mb-6">How InnoLabs works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              {[
                { step: '01', title: 'Idea scored', body: 'Every idea is scored on reach, revenue potential, feasibility, and uniqueness at pavan-ideas before it enters InnoLabs.' },
                { step: '02', title: 'MVP built fast', body: 'No polish, no perfection. We build the smallest thing that proves or disproves the core assumption — usually in 2–4 weeks.' },
                { step: '03', title: 'Graduate or stop', body: 'If the MVP shows real traction, it graduates to Naatu Paakam. If it doesn\'t, we kill it and document why.' },
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4">
                  <div className="text-2xl font-bold text-[#D4B896] flex-shrink-0">{step}</div>
                  <div>
                    <div className="font-semibold text-[#2C1507] mb-1">{title}</div>
                    <div className="text-[#7C4A22] leading-relaxed">{body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* project cards */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#2C1507] mb-8">Currently Incubating</h2>
            <div className="flex flex-col gap-8">
              {incubating.map(({ name, tagline, description, color, Icon, githubUrl, liveUrl, tags, whyNow, nextStep }) => (
                <article key={name} className="bg-white rounded-2xl border border-[#E8D9C0] shadow-sm overflow-hidden">
                  <div className="h-1" style={{ backgroundColor: color }} />
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: color + '15' }}>
                          <Icon className="w-5 h-5" style={{ color }} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#2C1507]">{name}</h3>
                          <p className="text-sm font-medium" style={{ color }}>{tagline}</p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#7C4A22] bg-[#FDF4E3] border border-[#D4B896] px-2.5 py-1 rounded-full flex-shrink-0">
                        Incubating
                      </span>
                    </div>

                    <p className="text-[#5C3A1E] text-sm leading-relaxed mb-6">{description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tags.map(t => (
                        <span key={t} className="text-[11px] font-medium text-[#7C4A22] bg-[#FDF4E3] border border-[#E8D9C0] px-2 py-0.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#FEF9EC] rounded-xl p-4 border border-[#F5D98A]">
                        <div className="text-[11px] font-semibold text-[#D4941A] uppercase tracking-wider mb-1.5">Why now</div>
                        <p className="text-xs text-[#5C3A1E] leading-relaxed">{whyNow}</p>
                      </div>
                      <div className="bg-[#F0FAF1] rounded-xl p-4 border border-[#A7D7AA]">
                        <div className="text-[11px] font-semibold text-[#2D7D35] uppercase tracking-wider mb-1.5">Next milestone</div>
                        <p className="text-xs text-[#2C4A2E] leading-relaxed">{nextStep}</p>
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 border-t border-[#F0E4CC]">
                      {liveUrl ? (
                        <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm font-semibold px-5 py-2 rounded-lg text-white transition-opacity hover:opacity-85"
                          style={{ backgroundColor: color }}>
                          <ExternalLink className="w-3.5 h-3.5" /> Open
                        </a>
                      ) : null}
                      <a href={githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium px-5 py-2 rounded-lg border border-[#D4B896] text-[#7C4A22] hover:bg-[#FDF4E3] transition-colors">
                        <GitFork className="w-3.5 h-3.5" strokeWidth={2} /> View on GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* graduated products CTA */}
            <div className="mt-12 text-center p-8 rounded-2xl bg-[#2C1507]">
              <p className="text-[#D4B896] text-sm mb-4">Looking for production-ready products?</p>
              <Link to="/#products"
                className="inline-flex items-center gap-2 bg-[#D4941A] text-[#2C1507] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#F5C842] transition-colors">
                See Naatu Paakam Products →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
