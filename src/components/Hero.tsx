import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-[#1B4332] text-white overflow-hidden">
      {/* subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* soft radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#52B788]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        {/* logo */}
        <div className="flex justify-center mb-8">
          <div className="p-1.5 rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm">
            <img src="/np-logo.png" alt="Naatu Paakam" className="w-20 h-20" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-3">
          Naatu Paakam
        </h1>
        <p className="text-lg sm:text-xl text-[#95D5B2] font-medium mb-6 tracking-wide">
          Native Kitchen · Apps for Everyday Family Life
        </p>
        <p className="max-w-xl mx-auto text-[#B7E4C7] text-base leading-relaxed mb-10">
          Simple, focused tools that help families manage the home, the school,
          and the memories in between. Ideas seeded at{' '}
          <a href="https://github.com/codepil" target="_blank" rel="noopener noreferrer"
            className="text-[#F5C842] hover:underline font-medium">codepil</a>,
          {' '}scored at{' '}
          <a href="https://pavan-ideas.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="text-[#F5C842] hover:underline font-medium">pavan-ideas</a>,
          {' '}and launched under Naatu Paakam.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          <a
            href="#products"
            className="bg-[#F5C842] text-[#1B4332] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#F7EDD0] transition-colors shadow-sm"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="text-sm border border-white/25 text-white/80 font-medium px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors"
          >
            How We Build
          </a>
        </div>

        {/* stats */}
        <div className="inline-flex divide-x divide-white/10 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          {[
            { label: 'Products', value: '7' },
            { label: 'Live', value: '3' },
            { label: 'In Beta', value: '2' },
            { label: 'Incubating', value: '2' },
          ].map(({ label, value }) => (
            <div key={label} className="px-8 py-4 text-center">
              <div className="text-2xl font-bold text-[#F5C842]">{value}</div>
              <div className="text-xs text-[#95D5B2] mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#products" aria-label="scroll to products">
            <ArrowDown className="text-white/30 animate-bounce w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
