import { motion } from 'motion/react'

function Reveal({
  children,
  delay = 0,
  x = 0,
  y = 40,
  duration = 0.7,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x,
        y,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal