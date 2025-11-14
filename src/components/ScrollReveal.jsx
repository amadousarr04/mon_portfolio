import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function ScrollReveal({ children, delay = 0, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  const initial = {
    opacity: 0,
    ...directions[direction]
  }

  const animate = isVisible ? {
    opacity: 1,
    x: 0,
    y: 0
  } : initial

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
