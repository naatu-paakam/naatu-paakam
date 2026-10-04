import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-[#FDF4E3] overflow-hidden">
      {/* warm grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A2810 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* soft amber glow top-right */}
      <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-[#D4941A]/10 rounded-full blur-3xl pointer-events-none" />
      {/* soft green glow bottom-left */}
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-[#2D7D35]/08 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 py-24 text-center">
        {/* logo */}
        <div className="flex justify-center mb-8">
          <img src="/np-logo.png" alt="Naatu Paakam" className="w-36 h-36 object-contain drop-shadow-md" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#2C1507] mb-3">
          Naatu Paakam
        </h1>
        <p className="text-lg sm:text-xl text-[#7C4A22] font-medium mb-6">
          Native Kitchen · Apps for Everyday Family Life
        </p>
        <p className="max-w-xl mx-auto text-[#5C3A1E] text-base leading-relaxed mb-10">
          Simple, focused tools that help families manage the home, the school,
          and the memories in between. Ideas scored at{' '}
          <a href="https://pavan-ideas.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="text-[#D4941A] hover:underline font-medium">pavan-ideas</a>,
          {' '}seeded at{' '}
          <a href="https://github.com/codepil" target="_blank" rel="noopener noreferrer"
            className="text-[#D4941A] hover:underline font-medium">codepil</a>,
          {' '}and launched under Naatu Paakam.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          <a
            href="#products"
            className="bg-[#2C1507] text-[#F5EAD0] font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-[#4A2810] transition-colors shadow-sm"
          >
            Explore Products
          </a>
          <a
            href="#about"
            className="text-sm border border-[#C5A882] text-[#7C4A22] font-medium px-6 py-2.5 rounded-full hover:bg-[#F5EAD0] transition-colors"
          >
            How We Build
          </a>
        </div>

        {/* stats */}
        <div className="inline-flex divide-x divide-[#D4941A]/25 rounded-2xl bg-white/60 border border-[#D4941A]/30 overflow-hidden shadow-sm backdrop-blur-sm">
          {[
            { label: 'Products',   value: '7' },
            { label: 'Live',       value: '3' },
            { label: 'In Beta',    value: '2' },
            { label: 'Incubating', value: '2' },
          ].map(({ label, value }) => (
            <div key={label} className="px-8 py-4 text-center">
              <div className="text-2xl font-bold text-[#D4941A]">{value}</div>
              <div className="text-xs text-[#7C4A22] mt-0.5 tracking-wide">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#about" aria-label="scroll down">
            <ArrowDown className="text-[#C5A882] animate-bounce w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
