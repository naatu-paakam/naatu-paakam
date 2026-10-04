import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { IncubationPage } from './pages/IncubationPage'

function HomePage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<HomePage />} />
        <Route path="/incubation"  element={<IncubationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
