import { useEffect, useState } from "react"
import { fadeInUp, fadeInUpTransition, staggerContainer } from "../lib/animation"
import { motion } from 'framer-motion'

const Hero = () => {

    const [mounted, setMounted] = useState(false)

    const HeroLine = [
    "Building systems that feel inevitable.",
    "Where clarity meets craft.",
    "Design that doesn't need to explain itself.",
    "Making complexity feel simple.",
    ]

    const [heroLine] = useState(()=>
        HeroLine[Math.floor(Math.random() * HeroLine.length)] //!You're accessing an element inside  an array (or object) called HeroLine using an index.
    )

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
        return (
        <section className="section-container">
            <div className="content-width"/>
        </section>
        )
    }

  return (
    <section className="section-container relative">
      {/* Signature vertical line - left margin */}
    <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 0.5, scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.9 }}
        className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-px h-24 bg-accent origin-top"
    />

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="content-width text-center"
      >
        {/* Main hero line */}
        <motion.h1
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6"
          style={{ letterSpacing: '0.12em' }}
        >
          {heroLine}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          transition={fadeInUpTransition}
          className="text-sm md:text-base text-subtle uppercase"
          style={{ letterSpacing: '0.05em' }}
        >
          Designer × Developer × Thinker
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.5, 
            y: [0, 10, 0] 
          }}
          transition={{
            opacity: { delay: 2, duration: 0.6 },
            y: { 
              delay: 2.5, 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }
          }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-1 h-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>

      {/* Breathing cursor hint (subtle) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.3, 
          scale: [1, 1.1, 1] 
        }}
        transition={{
          opacity: { delay: 3 },
          scale: { 
            delay: 3.5, 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        className="absolute top-1/2 right-6 md:right-12 w-2 h-2 rounded-full bg-accent"
      />
    </section>
  )
}

export default Hero