export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#2C1507]/97 backdrop-blur border-b border-[#4A2810]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/np-logo.png" alt="Naatu Paakam" className="w-8 h-8 rounded-md object-cover" />
          <span className="text-[#F5EAD0] font-bold tracking-tight">Naatu Paakam</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[#D4941A]">
          <a href="#about"    className="hover:text-[#F5EAD0] transition-colors">How We Build</a>
          <a href="#products" className="hover:text-[#F5EAD0] transition-colors">Products</a>
          <a
            href="https://github.com/naatu-paakam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#F5EAD0] transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}
