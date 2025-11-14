import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCalendar } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Formation & Certifications</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Mon parcours académique et mes certifications professionnelles
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-accent-purple to-transparent" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const isEven = index % 2 === 0
              
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    className={`relative flex items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-purple flex items-center justify-center shadow-glow"
                      >
                        <FiAward className="text-white" size={24} />
                      </motion.div>
                    </div>

                    {/* Content card */}
                    <div className={`w-full md:w-5/12 ml-24 md:ml-0 ${
                      isEven ? 'md:text-right' : ''
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all"
                      >
                        {/* Year badge */}
                        <div className={`flex items-center gap-2 mb-3 ${
                          isEven ? 'md:justify-end' : 'justify-start'
                        }`}>
                          <FiCalendar className="text-primary-400" size={16} />
                          <span className="text-sm font-semibold text-primary-400">
                            {edu.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {edu.title}
                        </h3>

                        {/* Decorative line */}
                        <div className={`h-1 w-20 bg-gradient-to-r from-primary-600 to-accent-purple rounded-full mb-3 ${
                          isEven ? 'md:ml-auto' : ''
                        }`} />

                        {/* Details if available */}
                        {edu.details && (
                          <p className="text-sm text-white/70 mt-2">
                            {edu.details}
                          </p>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
