import { Link, useLocation } from 'react-router-dom'

export function Header() {
  const { pathname } = useLocation()
  const home = pathname === '/'

  return (
    <header className="sticky top-0 z-50 bg-[#2C1507]/97 backdrop-blur border-b border-[#4A2810]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/np-logo.png" alt="Naatu Paakam" className="w-8 h-8 rounded-md object-cover" />
          <span className="text-[#F5EAD0] font-bold tracking-tight">Naatu Paakam</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-[#D4941A]">
          {home && <a href="#about"    className="hover:text-[#F5EAD0] transition-colors">How We Build</a>}
          {home && <a href="#products" className="hover:text-[#F5EAD0] transition-colors">Products</a>}
          <Link to="/incubation" className="hover:text-[#F5EAD0] transition-colors">InnoLabs</Link>
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
