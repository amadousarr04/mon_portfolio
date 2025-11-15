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
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-purple/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-primary-600/5 to-accent-purple/5 rounded-full blur-3xl" />
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
                Discutons de votre projet
              </span>
            </motion.div>
            <h2 className="section-title mt-4">Restons en Contact</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
              Une idée de projet ? Une opportunité professionnelle ? N'hésitez pas à me contacter !
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information Cards in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Contact Cards */}
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary-500/30 transition-all group relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-accent-purple/0 group-hover:from-primary-600/5 group-hover:to-accent-purple/5 transition-all duration-500" />
                    
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4 relative z-10">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 group-hover:from-primary-600/30 group-hover:to-accent-purple/30 transition-all"
                        >
                          <Icon className="text-primary-400" size={28} />
                        </motion.div>
                        <div className="flex-1">
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-semibold group-hover:text-primary-400 transition-colors break-all text-sm">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20">
                          <Icon className="text-primary-400" size={28} />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/50 text-sm mb-1">{info.label}</p>
                          <p className="text-white font-semibold">{info.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Second Row: Social Links and Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Social Links Card */}
            <ScrollReveal delay={0.3}>
              <div className="glass-card p-8 rounded-2xl border border-white/10">
                <h4 className="text-lg font-semibold gradient-text mb-6">Réseaux sociaux</h4>
                <div className="flex gap-4">
                  {personal.github && (
                    <motion.a
                      href={personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 p-4 rounded-xl glass-card border border-white/10 hover:border-primary-500/30 text-white/70 hover:text-primary-400 transition-all flex items-center justify-center"
                    >
                      <FaGithub size={28} />
                    </motion.a>
                  )}
                  {personal.linkedin && (
                    <motion.a
                      href={personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 p-4 rounded-xl glass-card border border-white/10 hover:border-primary-500/30 text-white/70 hover:text-primary-400 transition-all flex items-center justify-center"
                    >
                      <FaLinkedin size={28} />
                    </motion.a>
                  )}
                  <motion.a
                    href={`mailto:${personal.email}`}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 p-4 rounded-xl glass-card border border-white/10 hover:border-primary-500/30 text-white/70 hover:text-primary-400 transition-all flex items-center justify-center"
                  >
                    <FiMail size={28} />
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>

            {/* Availability Badge */}
            <ScrollReveal delay={0.4}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-2xl border border-white/10 flex items-center justify-center"
              >
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Disponible</span>
                  </div>
                  <p className="text-white/60 text-sm">
                    Ouvert aux opportunités professionnelles
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Contact Form - Full Width */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-accent-purple/0 group-hover:from-primary-600/5 group-hover:to-accent-purple/5 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold gradient-text mb-2">
                    Envoyez-moi un message
                  </h3>
                  <p className="text-white/60">Je vous répondrai dans les plus brefs délais</p>
                </div>

                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-5 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 flex items-center gap-3"
                  >
                    <div className="p-2 rounded-lg bg-green-500/20">
                      <FiCheck className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="text-green-400 font-semibold">Message envoyé avec succès !</p>
                      <p className="text-green-400/70 text-sm">Je vous répondrai bientôt</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm text-white/70 mb-3 font-medium">
                        <FiUser size={16} />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl glass-card border ${
                          errors.name ? 'border-red-500/50' : 'border-white/10'
                        } focus:border-primary-500/50 focus:outline-none transition-all text-white placeholder:text-white/40 hover:border-white/20`}
                        placeholder="Votre nom"
                      />
                      {errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          <span className="text-red-400">⚠</span> {errors.name}
                        </motion.p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="flex items-center gap-2 text-sm text-white/70 mb-3 font-medium">
                        <FiMail size={16} />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-4 rounded-xl glass-card border ${
                          errors.email ? 'border-red-500/50' : 'border-white/10'
                        } focus:border-primary-500/50 focus:outline-none transition-all text-white placeholder:text-white/40 hover:border-white/20`}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          <span className="text-red-400">⚠</span> {errors.email}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Subject field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-white/70 mb-3 font-medium">
                      <FiMessageSquare size={16} />
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl glass-card border border-white/10 focus:border-primary-500/50 focus:outline-none transition-all text-white placeholder:text-white/40 hover:border-white/20"
                      placeholder="Sujet du message"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label className="flex items-center gap-2 text-sm text-white/70 mb-3 font-medium">
                      <FiMessageSquare size={16} />
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className={`w-full px-5 py-4 rounded-xl glass-card border ${
                        errors.message ? 'border-red-500/50' : 'border-white/10'
                      } focus:border-primary-500/50 focus:outline-none transition-all text-white placeholder:text-white/40 resize-none hover:border-white/20`}
                      placeholder="Décrivez votre projet ou votre demande..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2 flex items-center gap-1"
                      >
                        <span className="text-red-400">⚠</span> {errors.message}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed py-4 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <FiSend size={20} />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
