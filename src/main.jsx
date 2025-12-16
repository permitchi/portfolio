import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './components/navbar.jsx'
import Hero from './components/hero.jsx'
import Work from './components/work.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'
import About from './components/about.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <header className="fixed top-0 z-50 w-full shadow">
      <NavBar />
    </header>

    <Hero />
      
    <About />
    <Work />
    <Contact />
    <Footer />
  </StrictMode>,
)
