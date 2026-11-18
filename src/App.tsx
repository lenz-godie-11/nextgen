import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero, Marquee } from './components/Hero'
import { InnovationProcess } from './components/InnovationProcess'
import { Projects } from './components/Projects'
import { Reveal } from './components/Reveal'
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
          background: '#0a0a0a',
          color: '#fff',
          padding: '0.6rem 0.9rem',
          borderRadius: '10px',
          zIndex: 300,
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
        <Marquee />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <WhatWeDo />
        </Reveal>
        <Reveal>
          <VisionMission />
        </Reveal>
        <Reveal>
          <InnovationProcess />
        </Reveal>
        <Reveal>
          <Values />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App