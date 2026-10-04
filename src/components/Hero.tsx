import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#1B4332] text-white overflow-hidden">
      {/* decorative leaf blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#52B788]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#F5C842]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
        <div className="flex justify-center mb-8">
          <img src="/np-logo.svg" alt="Naatu Paakam" className="w-24 h-24" />
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-[#F7EDD0] leading-tight mb-4">
          Naatu Paakam
        </h1>
        <p className="text-xl sm:text-2xl text-[#95D5B2] font-medium mb-4">
          Native Kitchen — Apps for Everyday Family Life
        </p>
        <p className="max-w-2xl mx-auto text-[#B7E4C7] text-base sm:text-lg leading-relaxed mb-10">
          We build simple, focused tools for families — managing the home,
          the school, and the memories in between. Ideas seeded in{' '}
          <a href="https://github.com/codepil" target="_blank" rel="noopener noreferrer"
            className="text-[#F5C842] hover:underline">codepil</a>,
          ideated at{' '}
          <a href="https://pavan-ideas.netlify.app/" target="_blank" rel="noopener noreferrer"
            className="text-[#F5C842] hover:underline">pavan-ideas</a>,
          and launched as products under Naatu Paakam.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="#products"
            className="bg-[#F5C842] text-[#1B4332] font-semibold px-7 py-3 rounded-full hover:bg-[#F7EDD0] transition-colors"
          >
            Explore Products
          </a>
          <a
            href="https://naatupaakam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#52B788] text-[#B7E4C7] font-semibold px-7 py-3 rounded-full hover:bg-[#2D6A4F] transition-colors"
          >
            Visit Website
          </a>
        </div>

        {/* stats row */}
        <div className="flex flex-wrap justify-center gap-10 text-center">
          {[
            { label: 'Products', value: '7' },
            { label: 'Live', value: '3' },
            { label: 'In Beta', value: '2' },
            { label: 'Incubating', value: '2' },
          ].map(({ label, value }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-[#F5C842]">{value}</div>
              <div className="text-sm text-[#95D5B2]">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a href="#products" aria-label="scroll to products">
            <ArrowDown className="text-[#52B788] animate-bounce w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
