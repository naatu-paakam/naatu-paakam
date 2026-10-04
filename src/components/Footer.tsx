export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#B7E4C7] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <img src="/np-logo.svg" alt="Naatu Paakam" className="w-6 h-6" />
          <span className="text-[#F7EDD0] font-semibold">Naatu Paakam</span>
          <span className="text-[#52B788]">— Apps for everyday Indian family life</span>
        </div>
        <div className="flex gap-5 text-[#95D5B2]">
          <a href="https://naatupaakam.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7EDD0] transition-colors">Website</a>
          <a href="https://github.com/naatu-paakam" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7EDD0] transition-colors">GitHub</a>
          <a href="https://pavan-ideas.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F7EDD0] transition-colors">Ideas</a>
        </div>
      </div>
    </footer>
  )
}
