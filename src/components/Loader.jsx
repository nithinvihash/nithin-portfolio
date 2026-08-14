
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let current = 0

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 2

      if (current >= 100) {
        current = 100
        setProgress(100)

        clearInterval(interval)

        // Keep 100% visible briefly, then remove loader
        setTimeout(() => {
          onComplete?.()
        }, 500)

        return
      }

      setProgress(current)
    }, 35)

    return () => clearInterval(interval)
  }, [onComplete])

  const circumference = 2 * Math.PI * 145
  const dashOffset =
    circumference - (circumference * progress) / 100

  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        overflow-hidden
        bg-[#050505]
        text-white
      "
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.025,
        filter: 'blur(8px)',
      }}
      transition={{
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Background grid */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Ambient glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          h-[280px] w-[280px]
          rounded-full
          bg-lime-400/[0.045]
          blur-[100px]
        "
        animate={{
          scale: [0.9, 1.08, 0.9],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Loader */}

      <div
        className="
          relative
          flex
          h-[300px] w-[300px]
          items-center justify-center
          sm:h-[360px] sm:w-[360px]
        "
      >
        {/* Outer ring */}

        <motion.div
          className="
            absolute inset-0
            rounded-full
            border border-white/[0.06]
          "
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Accent ring */}

        <motion.div
          className="
            absolute inset-[13px]
            rounded-full
            border border-lime-400/[0.12]
          "
          animate={{ rotate: -360 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Progress SVG */}

        <svg
          className="
            absolute
            h-[270px] w-[270px]
            -rotate-90
            sm:h-[330px] sm:w-[330px]
          "
          viewBox="0 0 330 330"
        >
          <circle
            cx="165"
            cy="165"
            r="145"
            fill="none"
            stroke="rgba(255,255,255,0.055)"
            strokeWidth="2"
          />

          <motion.circle
            cx="165"
            cy="165"
            r="145"
            fill="none"
            stroke="#a3e635"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset: dashOffset,
            }}
            transition={{
              duration: 0.08,
              ease: 'linear',
            }}
            style={{
              filter:
                'drop-shadow(0 0 7px rgba(163,230,53,0.65))',
            }}
          />

          <circle
            cx="165"
            cy="165"
            r="126"
            fill="none"
            stroke="rgba(163,230,53,0.055)"
            strokeWidth="1"
          />
        </svg>

        {/* Center */}

        <div
          className="
            relative z-10
            flex flex-col
            items-center justify-center
          "
        >
          <div className="flex items-baseline leading-none">
            <motion.span
              key={progress}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              className="
                text-[4.5rem]
                font-black
                tracking-[-0.08em]
                sm:text-[5.5rem]
              "
            >
              {progress}
            </motion.span>

            <span
              className="
                ml-1
                text-xl
                font-bold
                text-lime-400
                sm:text-2xl
              "
            >
              %
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <motion.span
              className="
                h-1.5 w-1.5
                rounded-full
                bg-lime-400
                shadow-[0_0_8px_rgba(163,230,53,0.8)]
              "
              animate={{
                opacity: [0.35, 1, 0.35],
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
              }}
            />

            <span
              className="
                text-[9px]
                font-bold
                tracking-[0.35em]
                text-zinc-500
              "
            >
              {progress < 100 ? 'LOADING' : 'READY'}
            </span>
          </div>
        </div>

        {/* Markers */}

        <span className="absolute left-[8px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-lime-400/70" />

        <span className="absolute right-[8px] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-lime-400/70" />

        <span className="absolute left-1/2 top-[8px] h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400/70" />

        <span className="absolute bottom-[8px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-lime-400/70" />
      </div>

      {/* Identity */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[8px]
          font-bold
          tracking-[0.35em]
          text-zinc-700
        "
      >
        NITHIN VIHASH
      </div>
    </motion.div>
  )
}

export default Loader