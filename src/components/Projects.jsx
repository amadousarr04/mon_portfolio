import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder, FiX } from 'react-icons/fi'
import ScrollReveal from './ScrollReveal'
import { projects } from '../data'

export default function Projects() {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [zoomedImage, setZoomedImage] = useState(null)

  // Extract unique technologies for filter
  const allTechs = [...new Set(projects.flatMap(p => p.tech))]
  const categories = ['all', ...allTechs]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter))

  return (
    <section id="projects" className="py-20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 via-transparent to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Projets & Réalisations</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Découvrez mes projets les plus récents alliant innovation technique et design créatif
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-primary-600 to-accent-purple text-white shadow-glow'
                    : 'glass-card text-white/70 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {cat === 'all' ? 'Tous' : cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card p-6 rounded-2xl cursor-pointer group border border-white/5 hover:border-primary-500/30 transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 group-hover:from-primary-600/30 group-hover:to-accent-purple/30 transition-all">
                    <FiFolder className="text-primary-400" size={28} />
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 rounded-lg glass-card text-white/70 hover:text-primary-400"
                    >
                      <FiGithub size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="p-2 rounded-lg glass-card text-white/70 hover:text-primary-400"
                    >
                      <FiExternalLink size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-white/70 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Project Type Badge */}
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
                    {project.type}
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover effect indicator */}
                <div className="mt-4 flex items-center gap-2 text-primary-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir plus <FiExternalLink size={14} />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card max-w-2xl w-full p-8 rounded-2xl border border-primary-500/30 max-h-[90vh] overflow-y-auto"
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg glass-card hover:bg-white/10 transition-colors"
                >
                  <FiX size={24} />
                </button>

                {/* Modal Content */}
                <div className="mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 inline-block mb-4">
                    <FiFolder className="text-primary-400" size={40} />
                  </div>
                  <h2 className="text-3xl font-bold gradient-text mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-white/60">{selectedProject.type}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-white/70 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Images Gallery (if project has images) */}
                  {selectedProject.images && selectedProject.images.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Galerie</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {selectedProject.images.map((image, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setZoomedImage(image)}
                            className="relative aspect-square rounded-lg overflow-hidden border border-primary-500/20 cursor-pointer group"
                          >
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Image ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Technologies utilisées</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary-600/20 to-accent-purple/20 text-white border border-primary-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button className="btn-primary flex items-center gap-2 flex-1">
                      <FiGithub size={20} />
                      Voir le code
                    </button>
                    <button className="btn-secondary flex items-center gap-2 flex-1">
                      <FiExternalLink size={20} />
                      Demo live
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/50 text-lg">
              Aucun projet trouvé pour cette technologie
            </p>
          </motion.div>
        )}

        {/* Image Zoom Modal */}
        <AnimatePresence>
          {zoomedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              onClick={() => setZoomedImage(null)}
            >
              <motion.button
                onClick={() => setZoomedImage(null)}
                className="absolute top-4 right-4 p-3 rounded-full glass-card hover:bg-white/10 transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiX size={28} className="text-white" />
              </motion.button>

              <motion.img
                src={zoomedImage}
                alt="Image agrandie"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
