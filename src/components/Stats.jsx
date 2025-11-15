import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const statsData = [
  { id: 1, value: 15, suffix: '+', label: 'Projets Réalisés' },
  { id: 2, value: 4, suffix: '+', label: 'Années d\'Expérience' },
  { id: 3, value: 30, suffix: '+', label: 'Clients Satisfaits' },
  { id: 4, value: 15, suffix: '+', label: 'Technologies Maîtrisées' },
]

function CountUp({ end, duration = 2 }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    const increment = end / (duration * 60)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [end, duration, hasStarted])

  return <span ref={ref}>{count}</span>
}

export default function Stats() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-accent-purple/10 to-accent-pink/10 blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <h2 className="section-title text-center mb-12">Statistiques</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <ScrollReveal key={stat.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl text-center group hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
