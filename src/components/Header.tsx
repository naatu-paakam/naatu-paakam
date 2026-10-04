export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1B4332]/95 backdrop-blur border-b border-[#2D6A4F]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/np-logo.png" alt="Naatu Paakam" className="w-8 h-8" />
          <span className="text-[#F7EDD0] font-bold tracking-tight">Naatu Paakam</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[#B7E4C7]">
          <a href="#products" className="hover:text-[#F7EDD0] transition-colors">Products</a>
          <a href="#about" className="hover:text-[#F7EDD0] transition-colors">About</a>
          <a
            href="https://github.com/naatu-paakam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F7EDD0] transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
