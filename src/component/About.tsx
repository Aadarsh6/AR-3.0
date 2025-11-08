import { motion } from 'framer-motion'
import { 
  fadeInUp, 
  fadeInUpTransition, 
  staggerContainer,
  viewportOptions 
} from '../lib/animation'

const About = () => {
  return (
    <section className="section-container" id="about">
      <div className="content-width">
        {/* Section title */}
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={viewportOptions}
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="text-center mb-20 uppercase text-sm text-subtle"
          style={{ letterSpacing: '0.1em' }}
        >
          About
        </motion.h2>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left column - Text */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
              <p className="text-lg md:text-xl leading-relaxed">
                I build interfaces that don't need instructions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
              <p className="leading-relaxed">
                Design isn't decoration. It's decision-making made visible. 
                Every element either serves attention or steals it.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
              <p className="leading-relaxed">
                I've spent years learning when to add, and when to take away. 
                The hardest problems aren't technical — they're about understanding 
                what people actually need versus what they say they want.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} transition={fadeInUpTransition}>
              <p className="leading-relaxed">
                Now I build for clarity, not trends. For memory, not novelty. 
                For systems that feel inevitable once they exist.
              </p>
            </motion.div>

            {/* Beliefs section */}
            <motion.div 
              variants={fadeInUp} 
              transition={fadeInUpTransition}
              className="pt-8 border-t border-gray"
            >
              <p className="text-sm uppercase text-subtle mb-4" style={{ letterSpacing: '0.1em' }}>
                I believe:
              </p>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="opacity-80">Simplicity is a result, not a starting point.</li>
                <li className="opacity-80">Design should feel obvious only after it's done.</li>
                <li className="opacity-80">The best interfaces are invisible.</li>
                <li className="opacity-80">Good work doesn't need to announce itself.</li>
              </ul>
            </motion.div>

            {/* Currently section */}
            <motion.div 
              variants={fadeInUp} 
              transition={fadeInUpTransition}
              className="pt-6"
            >
              <p className="text-xs uppercase text-subtle mb-2" style={{ letterSpacing: '0.1em' }}>
                Currently exploring:
              </p>
              <p className="text-sm opacity-70">
                Systems thinking, restraint as power, motion design psychology
              </p>
            </motion.div>
          </motion.div>

          {/* Right column - Portrait */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={viewportOptions}
            variants={fadeInUp}
            transition={{ ...fadeInUpTransition, delay: 0.3 }}
            className="relative"
          >
            {/* Portrait placeholder with accent color bleed */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              {/* Grayscale image placeholder */}
              <div className="absolute inset-0 bg-gray">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&sat=-100"
                  alt="Portrait"
                  className="w-full h-full object-cover grayscale opacity-70"
                />
              </div>
              
              {/* Accent color bleed effect */}
              <motion.div
                initial={{ x: '100%' }}
                whileInView={{ x: '0%' }}
                viewport={viewportOptions}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="absolute inset-0 bg-accent opacity-20"
                style={{ 
                  background: 'linear-gradient(90deg, transparent 0%, var(--color-accent) 100%)' 
                }}
              />

              {/* Subtle border */}
              <div className="absolute inset-0 border border-accent opacity-20" />
            </div>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.3, scale: 1 }}
              viewport={viewportOptions}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent rounded-sm"
              style={{ zIndex: -1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About