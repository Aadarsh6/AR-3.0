
import { motion } from 'framer-motion'
import { fadeInUp, fadeInUpTransition, viewportOptions } from '../lib/animation'
import ProjectCard from './ProjectCard'
import { Project } from '../data/Project'

const Work = () => {
  // Show only first 4 projects (featured)
  const featuredProjects = Project.slice(0, 4)

  return (
    <section className="section-container" id="work">
      <div className="content-width">
        {/* Section title */}
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="text-center mb-4 uppercase text-sm text-subtle"
          style={{ letterSpacing: '0.1em' }}
        >
          Selected Work
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={fadeInUp}
          transition={{ ...fadeInUpTransition, delay: 0.1 }}
          className="text-center text-xs text-subtle mb-20"
        >
          Showing 4 of {Project.length} projects
        </motion.p>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Archive link (if you want to add more projects later) */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={fadeInUp}
          transition={{ ...fadeInUpTransition, delay: 0.3 }}
          className="text-center mt-16"
        >
          <button className="text-sm link-hover text-subtle hover:text-light transition-colors">
            View Archive →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Work