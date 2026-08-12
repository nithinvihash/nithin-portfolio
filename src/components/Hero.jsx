import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[calc(100vh-88px)]
        overflow-hidden
        px-6
        pb-16
        pt-16
        md:px-12
        md:pb-20
        md:pt-20
      "
    >
      {/* =========================
          SUBTLE LIME GLOW
      ========================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[10%]
          top-[35%]
          z-[1]
          h-[400px]
          w-[400px]
          rounded-full
          bg-lime-400/10
          blur-[120px]
        "
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-168px)]
          items-center
        "
      >
        <div className="w-full max-w-[1050px]">

          {/* =========================
              EYEBROW
          ========================== */}

          <motion.p
            className="
              mb-8
              text-[10px]
              font-bold
              tracking-[0.25em]
              text-zinc-500
              sm:text-xs
            "
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            CSE (AI/ML) · PYTHON DEVELOPER · WEB DEVELOPER
          </motion.p>

          {/* =========================
              MAIN HEADLINE
          ========================== */}

          <h1
            className="
              text-[clamp(3.5rem,9vw,8rem)]
              font-black
              leading-[0.84]
              tracking-[-0.065em]
            "
          >
            {/* I BUILD */}

            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I BUILD.
              </motion.span>
            </span>

            {/* I BREAK */}

            <span className="block overflow-hidden">
              <motion.span
                className="
                  block
                  text-lime-400
                "
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I BREAK.
              </motion.span>
            </span>

            {/* I BUILD BETTER */}

            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                I BUILD BETTER.
              </motion.span>
            </span>
          </h1>

          {/* =========================
              DESCRIPTION + BUTTONS
          ========================== */}

          <motion.div
            className="
              mt-10
              flex
              flex-col
              gap-8
              sm:mt-12
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* =========================
                DESCRIPTION
            ========================== */}

            <div className="max-w-lg">
              <p
                className="
                  text-base
                  leading-relaxed
                  text-zinc-500
                  md:text-lg
                "
              >
                I'm Nithin, a CSE (AI/ML) student and
                developer who learns by building —
                from Python and AI experiments to
                modern web experiences.
              </p>
            </div>

            {/* =========================
                BUTTONS
            ========================== */}

            <div className="flex flex-wrap gap-3 sm:gap-4">

              {/* =========================
                  VIEW MY WORK
              ========================== */}

              <motion.a
                href="#work"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
                className="
                  group
                  border
                  border-black
                  bg-white
                  px-5
                  py-4
                  text-xs
                  font-bold
                  tracking-[0.08em]
                  transition-colors
                  duration-300
                  hover:bg-black
                  hover:text-white
                  sm:px-6
                  sm:text-sm
                "
              >
                VIEW MY WORK

                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  →
                </motion.span>
              </motion.a>

              {/* =========================
                  LET'S TALK
              ========================== */}

              <motion.a
                href="#contact"
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 20,
                }}
                className="
                  group
                  border
                  border-zinc-300
                  bg-white
                  px-5
                  py-4
                  text-xs
                  font-bold
                  tracking-[0.08em]
                  text-black
                  transition-colors
                  duration-300
                  hover:border-black
                  sm:px-6
                  sm:text-sm
                "
              >
                LET'S TALK

                <motion.span
                  className="ml-2 inline-block"
                  whileHover={{
                    x: 5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  }}
                >
                  →
                </motion.span>
              </motion.a>

            </div>
          </motion.div>
        </div>
      </div>

      {/* =========================
          BOTTOM LABEL
      ========================== */}

      <motion.div
        className="
          relative
          z-10
          mt-8
          border-t
          border-zinc-300/70
          pt-4
        "
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <p
            className="
              text-[10px]
              font-bold
              tracking-[0.2em]
              text-zinc-500
              sm:text-xs
            "
          >
            LEARN → BUILD → IMPROVE
          </p>

          <p
            className="
              hidden
              text-xs
              font-bold
              tracking-[0.2em]
              text-zinc-400
              sm:block
            "
          >
            SCROLL TO EXPLORE ↓
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero