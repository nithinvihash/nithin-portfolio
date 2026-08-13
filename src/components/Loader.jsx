import { motion, useMotionValue, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const progressValue = useMotionValue(0)

  useEffect(() => {
    const controls = animate(progressValue, 100, {
      duration: 2.4,
      ease: [0.76, 0, 0.24, 1],
      onUpdate: (latest) => {
        setProgress(Math.floor(latest))
      },
      onComplete: () => {
        setTimeout(() => {
          onComplete?.()
        }, 350)
      },
    })

    return () => controls.stop()
  }, [progressValue, onComplete])

  const circumference = 2 * Math.PI * 150
  const dashOffset =
    circumference - (circumference * progress) / 100

  return (
    <motion.div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#050505]
        text-white
      "
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(10px)',
      }}
      transition={{
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />

      {/* =====================================================
          CENTER ATMOSPHERIC GLOW
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          h-[350px]
          w-[350px]
          rounded-full
          bg-lime-400/[0.055]
          blur-[110px]
        "
        animate={{
          scale: [0.85, 1.08, 0.85],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* =====================================================
          MAIN HUD
      ====================================================== */}

      <div
        className="
          relative
          flex
          h-[330px]
          w-[330px]
          items-center
          justify-center
          sm:h-[390px]
          sm:w-[390px]
        "
      >

        {/* OUTER ROTATING RING */}

        <motion.div
          className="
            absolute
            inset-0
            rounded-full
            border
            border-lime-400/10
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* OUTER DASHED RING */}

        <motion.div
          className="
            absolute
            inset-[14px]
            rounded-full
            border
            border-dashed
            border-lime-400/20
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* TECH MARKERS */}

        <motion.div
          className="
            absolute
            inset-[27px]
            rounded-full
            border
            border-zinc-800
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* =================================================
            PROGRESS SVG
        ================================================== */}

        <svg
          className="
            absolute
            h-[300px]
            w-[300px]
            -rotate-90
            sm:h-[360px]
            sm:w-[360px]
          "
          viewBox="0 0 360 360"
        >
          {/* Background circle */}

          <circle
            cx="180"
            cy="180"
            r="150"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
          />

          {/* Progress circle */}

          <motion.circle
            cx="180"
            cy="180"
            r="150"
            fill="none"
            stroke="#a3e635"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            style={{
              strokeDashoffset: dashOffset,
            }}
          />

          {/* Inner subtle ring */}

          <circle
            cx="180"
            cy="180"
            r="132"
            fill="none"
            stroke="rgba(163,230,53,0.08)"
            strokeWidth="1"
          />
        </svg>

        {/* =================================================
            CENTER CONTENT
        ================================================== */}

        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <motion.div
            key={progress}
            initial={{
              opacity: 0.5,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.08,
            }}
            className="
              text-[4.5rem]
              font-black
              leading-none
              tracking-[-0.07em]
              text-white
              sm:text-[6rem]
            "
          >
            {progress}
            <span className="text-[2rem] text-lime-400 sm:text-[2.5rem]">
              %
            </span>
          </motion.div>

          <motion.p
            className="
              mt-5
              text-[9px]
              font-bold
              tracking-[0.4em]
              text-zinc-500
            "
            animate={{
              opacity: [0.35, 1, 0.35],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
          >
            INITIALIZING
          </motion.p>
        </div>

        {/* =================================================
            HUD LABELS
        ================================================== */}

        <div
          className="
            absolute
            left-0
            top-1/2
            -translate-x-3
            -translate-y-1/2
            text-[8px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
          "
        >
          SYS
        </div>

        <div
          className="
            absolute
            right-0
            top-1/2
            translate-x-3
            -translate-y-1/2
            text-[8px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
          "
        >
          01
        </div>

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            -translate-y-3
            text-[8px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
          "
        >
          NTHN
        </div>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            translate-y-3
            text-[8px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
          "
        >
          ONLINE
        </div>
      </div>

      {/* =====================================================
          BOTTOM STATUS
      ====================================================== */}

      <motion.div
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
        animate={{
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        NITHIN VIHASH // SYSTEM BOOT
      </motion.div>

      {/* =====================================================
          SCANLINE
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-0
          h-px
          w-full
          bg-lime-400/10
        "
        initial={{
          top: '-5%',
        }}
        animate={{
          top: '105%',
        }}
        transition={{
          duration: 2.5,
          ease: 'linear',
        }}
      />

      {/* =====================================================
          REDUCED MOTION
      ====================================================== */}

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </motion.div>
  )
}

export default Loader