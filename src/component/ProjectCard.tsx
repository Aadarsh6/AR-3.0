import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, ChevronRight } from 'lucide-react'
import type { project } from '../data/Project'

interface ProjectCardProps {
  project: project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showProcess, setShowProcess] = useState(false)

  return (
    <>
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(true)}
        className="relative group cursor-pointer"
      >
        {/* Image container */}
        <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-gray">
          {/* Grayscale image */}
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Accent color overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.2 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-accent mix-blend-multiply"
          />

          {/* Border */}
          <div className="absolute inset-0 border border-gray group-hover:border-accent transition-colors duration-300" />
        </div>

        {/* Text content */}
        <div className="mt-4">
          <h3 className="text-xl md:text-2xl font-light mb-1">{project.title}</h3>
          <p className="text-sm text-subtle mb-2">{project.context}</p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="text-xs uppercase px-2 py-1 border border-gray text-subtle"
                style={{ letterSpacing: '0.05em' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Impact line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-accent italic"
          >
            {project.impact}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex gap-4 mt-4"
          >
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowProcess(true)
              }}
              className="text-sm link-hover flex items-center gap-1"
            >
              View Process <ChevronRight size={14} />
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm link-hover flex items-center gap-1"
            >
              Visit Site <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Process overlay */}
      <AnimatePresence>
        {showProcess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowProcess(false)}
            className="fixed inset-0 bg-dark bg-opacity-95 z-50 flex items-center justify-center p-6 cursor-pointer overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full bg-gray border border-accent border-opacity-20 rounded-sm p-8 md:p-12 cursor-default"
            >
              {/* Close hint */}
              <p className="text-xs text-subtle text-right mb-6 uppercase" style={{ letterSpacing: '0.1em' }}>
                Click outside to close
              </p>

              {/* Title */}
              <h3 className="text-3xl md:text-4xl font-light mb-8">{project.title}</h3>

              {/* Process sections */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm uppercase text-accent mb-3" style={{ letterSpacing: '0.1em' }}>
                    Problem
                  </h4>
                  <p className="leading-relaxed opacity-80">{project.process.problem}</p>
                </div>

                <div className="h-px bg-accent opacity-20" />

                <div>
                  <h4 className="text-sm uppercase text-accent mb-3" style={{ letterSpacing: '0.1em' }}>
                    Thinking
                  </h4>
                  <p className="leading-relaxed opacity-80">{project.process.thinking}</p>
                </div>

                <div className="h-px bg-accent opacity-20" />

                <div>
                  <h4 className="text-sm uppercase text-accent mb-3" style={{ letterSpacing: '0.1em' }}>
                    Solution
                  </h4>
                  <p className="leading-relaxed opacity-80">{project.process.solution}</p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-10 flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm link-hover flex items-center gap-1 text-accent"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard