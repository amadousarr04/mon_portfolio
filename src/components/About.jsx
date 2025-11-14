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
    <section id="about" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-transparent to-accent-purple/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">À Propos de Moi</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Passionné par l'innovation technologique et la création d'expériences digitales exceptionnelles
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Bio */}
          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              className="lg:col-span-2 glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-2xl font-semibold gradient-text mb-6">
                Qui suis-je ?
              </h3>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>{personal.bio}</p>
                <p>
                  Mon approche combine rigueur technique et créativité pour concevoir des solutions 
                  innovantes qui répondent aux besoins réels des utilisateurs. Je suis constamment 
                  en veille technologique pour maîtriser les dernières tendances en développement et design.
                </p>
              </div>

              {/* Contact info */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <FiMapPin className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">Localisation</p>
                    <p className="text-white/90">{personal.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <FiMail className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">Email</p>
                    <p className="text-white/90 truncate">{personal.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <FiPhone className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">Téléphone</p>
                    <p className="text-white/90">{personal.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-primary-500/10">
                    <FiAward className="text-primary-400" size={18} />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs">Niveau</p>
                    <p className="text-white/90">Master 2 en SI</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Highlights sidebar */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, x: 4 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20">
                        <Icon className="text-primary-400" size={24} />
                      </div>
                      <div className="flex-1">
                        <p className="text-white/50 text-sm mb-1">{item.label}</p>
                        <p className="text-white font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}

            {/* Download CV button */}
            <ScrollReveal delay={0.5}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiDownload size={18} />
                Télécharger mon CV
              </motion.button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
