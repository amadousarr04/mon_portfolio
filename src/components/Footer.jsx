import React from 'react'
import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-20 border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Amadou Dièye SARR<span className="text-primary-400">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Développeur Full Stack & Infographiste passionné par l'innovation et la création d'expériences digitales exceptionnelles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {['À propos', 'Compétences', 'Projets', 'Formation', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace('à propos', 'about').replace('compétences', 'skills').replace('projets', 'projects').replace('formation', 'education').replace('contact', 'contact')}`}
                    className="text-white/60 hover:text-primary-400 transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Restons connectés</h4>
            <div className="flex gap-3 mb-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
              >
                <FiLinkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:amadou.sarr.38018@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
              >
                <FiMail size={20} />
              </motion.a>
            </div>
            <p className="text-white/60 text-sm">
              Ouvert aux opportunités professionnelles et aux collaborations sur des projets innovants.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center md:text-left">
            © {currentYear} Amadou Dieye SARR.
          </p>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-full bg-gradient-to-r from-primary-600 to-accent-purple text-white shadow-glow"
            aria-label="Retour en haut"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
