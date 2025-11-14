import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, FiLayers, FiDatabase, FiCloud, FiTool, FiLayout,
  FiCpu, FiGlobe, FiServer, FiPackage
} from 'react-icons/fi'
import { SiJavascript, SiPython, SiPhp, SiFlutter, SiReact, SiAngular, SiLaravel, SiSpringboot, SiMysql, SiPostgresql, SiOracle, SiDocker, SiGit, SiAmazonaws, SiTailwindcss, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si'
import ScrollReveal from './ScrollReveal'
import { skills } from '../data'

const categoryIcons = {
  'Langages': FiCode,
  'Web & Mobile': FiGlobe,
  'Data & IA': FiCpu,
  'Bases de données': FiDatabase,
  'DevOps & Virtualisation': FiCloud,
  'Design': FiLayout,
}

const skillIcons = {
  'JavaScript': SiJavascript,
  'Python': SiPython,
  'Java': FiCode,
  'PHP (Laravel)': SiPhp,
  'Flutter': SiFlutter,
  'HTML': FiCode,
  'CSS': FiCode,
  'Tailwind CSS': SiTailwindcss,
  'Laravel': SiLaravel,
  'Spring Boot': SiSpringboot,
  'Angular': SiAngular,
  'MySQL': SiMysql,
  'Oracle': SiOracle,
  'PostgreSQL': SiPostgresql,
  'Docker': SiDocker,
  'Git': SiGit,
  'AWS': SiAmazonaws,
  'Photoshop': SiAdobephotoshop,
  'Illustrator': SiAdobeillustrator,
  'Figma': SiFigma,
}

// Skill levels (pour les progress bars)
const skillLevels = {
  'JavaScript': 90,
  'Python': 85,
  'Java': 80,
  'PHP (Laravel)': 85,
  'Flutter': 75,
  'HTML': 95,
  'CSS': 95,
  'Tailwind CSS': 90,
  'Laravel': 85,
  'Spring Boot': 80,
  'Angular': 75,
  'MySQL': 85,
  'Oracle': 75,
  'PostgreSQL': 80,
  'Docker': 80,
  'Git': 90,
  'AWS': 70,
  'Photoshop': 90,
  'Illustrator': 85,
  'Figma': 85,
  'Canva': 80,
}

function SkillBar({ skill, level, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {skillIcons[skill] && React.createElement(skillIcons[skill], { 
            className: "text-primary-400", 
            size: 16 
          })}
          <span className="text-sm font-medium text-white/90">{skill}</span>
        </div>
        <span className="text-xs text-white/60 font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-accent-purple rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-600/5 to-transparent blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="section-title">Compétences Techniques</h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Une expertise polyvalente couvrant le développement full stack, l'IA, et le design créatif
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, catIndex) => {
            const Icon = categoryIcons[skillCategory.category] || FiTool
            
            return (
              <ScrollReveal key={skillCategory.category} delay={catIndex * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl h-full border border-white/5 hover:border-primary-500/30 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600/20 to-accent-purple/20 group-hover:from-primary-600/30 group-hover:to-accent-purple/30 transition-all">
                      <Icon className="text-primary-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => {
                      const level = skillLevels[skill] || 70
                      return (
                        <SkillBar
                          key={skill}
                          skill={skill}
                          level={level}
                          delay={catIndex * 0.1 + skillIndex * 0.05}
                        />
                      )
                    })}
                  </div>

                  {/* Skill Count Badge */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/50">
                      <span>{skillCategory.items.length} compétences</span>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary-500/50" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Tech Stack Showcase */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-center mb-8 gradient-text">
              Technologies Favorites
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
                { icon: SiPython, name: 'Python', color: '#3776AB' },
                { icon: SiReact, name: 'React', color: '#61DAFB' },
                { icon: SiLaravel, name: 'Laravel', color: '#FF2D20' },
                { icon: SiDocker, name: 'Docker', color: '#2496ED' },
                { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
                { icon: SiFigma, name: 'Figma', color: '#F24E1E' },
                { icon: SiAmazonaws, name: 'AWS', color: '#FF9900' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="p-4 rounded-xl glass-card group-hover:shadow-glow transition-all">
                    <tech.icon size={32} style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs text-white/60 group-hover:text-white/90 transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
