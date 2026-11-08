import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { InnovationProcess } from './components/InnovationProcess'
import { Projects } from './components/Projects'
import { Values } from './components/Values'
import { VisionMission } from './components/VisionMission'
import { WhatWeDo } from './components/WhatWeDo'

function App() {
  return (
    <>
      <a
        href="#main"
        style={{
          position: 'absolute',
          left: '-999px',
          top: '0.5rem',
          background: '#fff',
          color: '#0b1f3a',
          padding: '0.5rem 0.75rem',
          borderRadius: '8px',
          zIndex: 100,
        }}
        onFocus={(e) => {
          e.currentTarget.style.left = '0.75rem'
        }}
        onBlur={(e) => {
          e.currentTarget.style.left = '-999px'
        }}
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <WhatWeDo />
        <VisionMission />
        <InnovationProcess />
        <Values />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
