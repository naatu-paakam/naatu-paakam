export function Footer() {
  return (
    <footer className="bg-[#2C1507] text-[#D4B896] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2.5">
          <img src="/np-logo.png" alt="Naatu Paakam" className="w-7 h-7 rounded-md object-cover" />
          <span className="text-[#F5EAD0] font-semibold">Naatu Paakam</span>
          <span className="text-[#7C4A22]">— Apps for everyday family life</span>
        </div>
        <div className="flex gap-5 text-[#C5A882]">
          <a href="https://naatupaakam.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5EAD0] transition-colors">Website</a>
          <a href="https://github.com/naatu-paakam" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5EAD0] transition-colors">GitHub</a>
          <a href="https://pavan-ideas.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F5EAD0] transition-colors">Ideas</a>
        </div>
      </div>
    </footer>
  )
}
