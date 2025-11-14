import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'
import Avatar from '../assets/avatar.jpg'
import { personal } from '../data'
import TypingEffect from './TypingEffect'
import ParticlesBackground from './ParticlesBackground'

export default function Hero() {
  const roles = [
    'Développeur Full Stack',
    'Expert en IA & Machine Learning',
    'Infographiste Créatif',
    'Développeur Cloud Computing'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Animated Particles Background */}
      <ParticlesBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <motion.div
        className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary-500/30"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>
            <span className="text-sm text-white/90">Disponible pour de nouveaux projets</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={itemVariants}>
            <p className="text-primary-400 font-semibold text-lg mb-2">Bonjour, je suis</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow">
              {personal.name.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <div className="text-2xl md:text-3xl text-white/80 min-h-[40px]">
              <TypingEffect texts={roles} typingSpeed={80} deletingSpeed={40} delayBetween={2500} />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-xl leading-relaxed"
          >
            {personal.bio}
          </motion.p>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            {personal.github && (
              <motion.a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-full text-white/80 hover:text-primary-400"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub size={22} />
              </motion.a>
            )}
            {personal.linkedin && (
              <motion.a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card-hover rounded-full text-white/80 hover:text-primary-400"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin size={22} />
              </motion.a>
            )}
            <motion.a
              href={`mailto:${personal.email}`}
              className="p-3 glass-card-hover rounded-full text-white/80 hover:text-primary-400"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail size={22} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <motion.a
              href="#contact"
              className="btn-primary flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Me Contacter
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#projects"
              className="btn-secondary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir mes projets
            </motion.a>
            <motion.button
              className="btn-outline flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload size={18} />
              CV
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Content - Avatar */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 to-accent-purple blur-2xl opacity-30 animate-pulse" />
            
            {/* Avatar container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl glass-card p-8 neon-border">
              <motion.img
                src={Avatar}
                alt="Amadou Dieye SARR"
                className="w-full h-full object-contain"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
              />
              
              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-purple rounded-full text-sm font-semibold shadow-glow"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                🚀 Full Stack
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full text-sm font-semibold shadow-glow"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                🎨 Designer
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
