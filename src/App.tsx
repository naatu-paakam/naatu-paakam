import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { About } from './components/About'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App
