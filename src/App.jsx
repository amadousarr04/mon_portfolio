import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Stats from './components/Stats'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-8">
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
