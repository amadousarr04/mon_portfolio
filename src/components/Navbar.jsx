import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiBook, FiMail } from 'react-icons/fi'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '#hero', icon: FiHome },
    { name: 'À propos', href: '#about', icon: FiUser },
    { name: 'Compétences', href: '#skills', icon: FiCode },
    { name: 'Projets', href: '#projects', icon: FiBriefcase },
    { name: 'Formation', href: '#education', icon: FiBook },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-xl md:text-2xl font-bold gradient-text cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Amadou Dièye SARR<span className="text-primary-400">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-white/80 hover:text-white font-medium transition-colors relative group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-purple group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-primary text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Me Contacter
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white"
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card overflow-hidden"
          >
            <nav className="px-6 py-4 space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="flex items-center gap-3 text-white/80 hover:text-white py-2 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Icon className="text-primary-400" size={20} />
                    {item.name}
                  </motion.a>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
