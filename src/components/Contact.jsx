import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCheck } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import { personal } from '../data'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis'
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission (replace with actual EmailJS or backend call)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: FiPhone, label: 'Téléphone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: FiMapPin, label: 'Localisation', value: personal.location },
  ]

  return (
    <section id="contact" className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Restons en Contact</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Une idée de projet ? Une opportunité professionnelle ? N'hésitez pas à me contacter !
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary-500/30 transition-all"
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-start gap-4 group">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 group-hover:from-primary-600/30 group-hover:to-accent-purple/30 transition-all">
                          <Icon className="text-primary-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-medium group-hover:text-primary-400 transition-colors break-all">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20">
                          <Icon className="text-primary-400" size={24} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              )
            })}

            {/* Social Links */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card p-6 rounded-2xl border border-white/5">
                <p className="text-white/50 text-sm mb-4">Suivez-moi</p>
                <div className="flex gap-3">
                  {personal.github && (
                    <motion.a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
                    >
                      <FaGithub size={24} />
                    </motion.a>
                  )}
                  {personal.linkedin && (
                    <motion.a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                  )}
                  <motion.a
                    href={`mailto:${personal.email}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-3 rounded-lg glass-card-hover text-white/70 hover:text-primary-400"
                  >
                    <FiMail size={24} />
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              className="lg:col-span-2 glass-card p-8 rounded-2xl border border-white/5"
            >
              <h3 className="text-2xl font-semibold gradient-text mb-6">
                Envoyez-moi un message
              </h3>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-3"
                >
                  <FiCheck className="text-green-400" size={20} />
                  <p className="text-green-400">Message envoyé avec succès !</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                      <FiUser size={16} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg glass-card border ${
                        errors.name ? 'border-red-500/50' : 'border-white/5'
                      } focus:border-primary-500/50 focus:outline-none transition-colors text-white placeholder:text-white/40`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                      <FiMail size={16} />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg glass-card border ${
                        errors.email ? 'border-red-500/50' : 'border-white/5'
                      } focus:border-primary-500/50 focus:outline-none transition-colors text-white placeholder:text-white/40`}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <FiMessageSquare size={16} />
                    Sujet
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-card border border-white/5 focus:border-primary-500/50 focus:outline-none transition-colors text-white placeholder:text-white/40"
                    placeholder="Sujet du message"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="flex items-center gap-2 text-sm text-white/70 mb-2">
                    <FiMessageSquare size={16} />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg glass-card border ${
                      errors.message ? 'border-red-500/50' : 'border-white/5'
                    } focus:border-primary-500/50 focus:outline-none transition-colors text-white placeholder:text-white/40 resize-none`}
                    placeholder="Votre message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      Envoyer le message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
