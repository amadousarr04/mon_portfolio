import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiMail, FiPhone, FiDownload, FiAward } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import { personal } from '../data'

export default function About() {
  const highlights = [
    { icon: FiAward, label: 'Formation', value: 'Master 2 SI' },
    { icon: FiMapPin, label: 'Localisation', value: 'Sénégal' },
    { icon: FiMail, label: 'Disponibilité', value: 'Ouvert aux offres' },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-600/10 to-accent-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-accent-purple/20 text-primary-400 text-sm font-medium border border-primary-500/20 mb-4 inline-block">
                Découvrez mon profil
              </span>
            </motion.div>
            <h2 className="section-title mt-4">À Propos de Moi</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
              Passionné par l'innovation technologique et la création d'expériences digitales exceptionnelles
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Profile Card */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-accent-purple/0 group-hover:from-primary-600/10 group-hover:to-accent-purple/10 transition-all duration-500 rounded-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-purple p-1">
                    <div className="w-full h-full rounded-xl bg-dark-800 flex items-center justify-center">
                      <span className="text-3xl font-bold gradient-text">AS</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{personal.name}</h3>
                    <p className="text-primary-400 font-medium">{personal.role}</p>
                  </div>
                </div>

                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>{personal.bio}</p>
                  <p>
                    Mon approche combine rigueur technique et créativité pour concevoir des solutions 
                    innovantes qui répondent aux besoins réels des utilisateurs. Je suis constamment 
                    en veille technologique pour maîtriser les dernières tendances en développement et design.
                  </p>
                </div>

                {/* Download CV button */}
                <motion.a
                  href="/cv/CV_AMADOU_DIEYE_SARR.pdf"
                  download="CV_AMADOU_DIEYE_SARR.pdf"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 btn-primary flex items-center justify-center gap-2 w-full"
                >
                  <FiDownload size={18} />
                  Télécharger mon CV
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stats & Highlights */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <ScrollReveal delay={0.2}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card p-8 rounded-3xl border border-white/10"
              >
                <h4 className="text-xl font-semibold gradient-text mb-6">En chiffres</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="text-4xl font-bold gradient-text mb-2"
                    >
                      15+
                    </motion.div>
                    <p className="text-white/60 text-sm">Projets Réalisés</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl font-bold gradient-text mb-2"
                    >
                      5+
                    </motion.div>
                    <p className="text-white/60 text-sm">Années d'études</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-4xl font-bold gradient-text mb-2"
                    >
                      10+
                    </motion.div>
                    <p className="text-white/60 text-sm">Technologies</p>
                  </div>
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-bold gradient-text mb-2"
                    >
                      100%
                    </motion.div>
                    <p className="text-white/60 text-sm">Engagement</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            {/* Highlights Cards */}
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={index} delay={0.3 + index * 0.1}>
                  <motion.div
                    whileHover={{ x: 8, y: -4 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all group"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 group-hover:from-primary-600/30 group-hover:to-accent-purple/30 transition-all"
                      >
                        <Icon className="text-primary-400" size={28} />
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-white/50 text-sm mb-1">{item.label}</p>
                        <p className="text-white font-semibold text-lg">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Contact Info Cards */}
        <ScrollReveal delay={0.6}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center group"
            >
              <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 mb-4 group-hover:scale-110 transition-transform">
                <FiMapPin className="text-primary-400" size={24} />
              </div>
              <p className="text-white/50 text-sm mb-2">Localisation</p>
              <p className="text-white font-semibold">{personal.location}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center group"
            >
              <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 mb-4 group-hover:scale-110 transition-transform">
                <FiMail className="text-primary-400" size={24} />
              </div>
              <p className="text-white/50 text-sm mb-2">Email</p>
              <p className="text-white font-semibold text-sm truncate">{personal.email}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center group"
            >
              <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 mb-4 group-hover:scale-110 transition-transform">
                <FiPhone className="text-primary-400" size={24} />
              </div>
              <p className="text-white/50 text-sm mb-2">Téléphone</p>
              <p className="text-white font-semibold">{personal.phone}</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 text-center group"
            >
              <div className="inline-block p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 mb-4 group-hover:scale-110 transition-transform">
                <FiAward className="text-primary-400" size={24} />
              </div>
              <p className="text-white/50 text-sm mb-2">Niveau</p>
              <p className="text-white font-semibold">Master 2 en SI</p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
