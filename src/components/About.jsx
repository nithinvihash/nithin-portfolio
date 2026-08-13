import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import Reveal from './Reveal'

function About() {
  const [hoveredWord, setHoveredWord] = useState(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  })

  const orbX = useTransform(smoothX, [-500, 500], [-30, 30])
  const orbY = useTransform(smoothY, [-500, 500], [-30, 30])

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - window.innerWidth / 2)
      mouseY.set(event.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  const facts = [
    {
      label: 'STUDYING',
      value: 'CSE / AI-ML',
    },
    {
      label: 'BUILDING',
      value: 'WEBSUITER',
    },
    {
      label: 'EXPERIMENTING',
      value: 'PYTHON',
    },
    {
      label: 'LEARNING',
      value: 'AI SYSTEMS',
    },
  ]

  const identityWords = [
    'STUDENT.',
    'DEVELOPER.',
    'BUILDER.',
    'STILL LEARNING.',
  ]

  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const wordReveal = {
    hidden: {
      opacity: 0,
      y: 70,
      filter: 'blur(12px)',
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-800
        bg-black
        px-6
        py-24
        text-white
        md:px-12
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        {/* Ambient lime orb */}

        <motion.div
          style={{
            x: orbX,
            y: orbY,
          }}
          className="
            absolute
            left-[15%]
            top-[18%]
            h-[320px]
            w-[320px]
            rounded-full
            bg-lime-400/[0.035]
            blur-[120px]
          "
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.025, 0.05, 0.025],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="
            absolute
            right-[-8%]
            top-[45%]
            h-[400px]
            w-[400px]
            rounded-full
            bg-lime-400
            blur-[150px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
            [background-size:48px_48px]
          "
        />

        {/* Moving scan line */}

        <motion.div
          animate={{
            y: ['-10vh', '110vh'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="
            absolute
            left-0
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-lime-400/10
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          MAIN GRID
      ====================================================== */}

      <div
        className="
          relative
          grid
          gap-14
          md:grid-cols-[180px_1fr]
          lg:grid-cols-[220px_1fr]
        "
      >
        {/* SECTION LABEL */}

        <Reveal y={20}>
          <div>
            <p
              className="
                text-xs
                font-bold
                tracking-[0.25em]
                text-zinc-600
              "
            >
              01 — ABOUT
            </p>

            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="
                mt-6
                h-20
                w-px
                origin-top
                bg-gradient-to-b
                from-lime-400
                to-transparent
              "
            />
          </div>
        </Reveal>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="max-w-6xl">

          {/* =================================================
              HERO STATEMENT
          ================================================= */}

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p
              className="
                mb-8
                text-xs
                font-bold
                tracking-[0.3em]
                text-lime-400
              "
            >
              A LITTLE ABOUT ME
            </p>

            <h2
              className="
                max-w-6xl
                text-[clamp(3.5rem,9vw,8.5rem)]
                font-black
                leading-[0.82]
                tracking-[-0.07em]
              "
            >
              I'M NOT JUST
              <br />

              <span className="text-zinc-600">
                LEARNING TO CODE.
              </span>

              <br />

              <span className="text-white">
                I'M LEARNING
              </span>

              <br />

              <span className="text-lime-400">
                TO BUILD.
              </span>
            </h2>
          </motion.div>

          {/* =================================================
              IDENTITY WORDS
          ================================================= */}

          <div
            className="
              mt-16
              flex
              flex-wrap
              gap-x-5
              gap-y-2
              border-y
              border-zinc-900
              py-6
            "
          >
            {identityWords.map((word, index) => (
              <motion.span
                key={word}
                custom={index}
                variants={wordReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                onMouseEnter={() =>
                  setHoveredWord(word)
                }
                onMouseLeave={() =>
                  setHoveredWord(null)
                }
                animate={{
                  color:
                    hoveredWord === word
                      ? '#a3e635'
                      : index === 3
                        ? '#52525b'
                        : '#ffffff',
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  cursor-default
                  text-sm
                  font-black
                  tracking-[0.12em]
                  md:text-base
                "
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* =================================================
              INTRO + CURRENTLY
          ================================================= */}

          <div
            className="
              mt-16
              grid
              gap-16
              md:grid-cols-[1.2fr_0.8fr]
              md:gap-20
            "
          >

            {/* DESCRIPTION */}

            <Reveal delay={0.1}>
              <div className="max-w-2xl">

                <p
                  className="
                    text-xl
                    font-medium
                    leading-relaxed
                    text-white
                    md:text-2xl
                  "
                >
                  I'm Nithin, a 2nd-year CSE (AI/ML)
                  student and developer who enjoys turning
                  ideas into practical software.
                </p>

                <p
                  className="
                    mt-7
                    text-base
                    leading-relaxed
                    text-zinc-500
                    md:text-lg
                  "
                >
                  I learn by building — from desktop
                  automation and AI experiments to modern
                  web experiences. I like understanding how
                  things work, breaking them, and rebuilding
                  them better.
                </p>

                <p
                  className="
                    mt-7
                    text-base
                    leading-relaxed
                    text-zinc-500
                    md:text-lg
                  "
                >
                  Right now, I'm developing my skills
                  through real projects, experimenting with
                  new technologies, and forging WebSuiter
                  into something of my own.
                </p>

              </div>
            </Reveal>

            {/* CURRENTLY */}

            <Reveal delay={0.2} x={25}>
              <div
                className="
                  border-t
                  border-zinc-800
                  pt-6
                  md:border-l
                  md:border-t-0
                  md:pl-8
                  md:pt-0
                "
              >

                <div
                  className="
                    mb-7
                    flex
                    items-center
                    justify-between
                  "
                >
                  <p
                    className="
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-lime-400
                    "
                  >
                    CURRENT STATUS
                  </p>

                  <span
                    className="
                      flex
                      items-center
                      gap-2
                      text-[9px]
                      font-bold
                      tracking-[0.15em]
                      text-zinc-600
                    "
                  >
                    <span
                      className="
                        h-1.5
                        w-1.5
                        animate-pulse
                        rounded-full
                        bg-lime-400
                        shadow-[0_0_10px_rgba(163,230,53,0.8)]
                      "
                    />
                    ACTIVE
                  </span>
                </div>

                <div>
                  {facts.map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                        amount: 0.4,
                      }}
                      transition={{
                        delay: 0.15 + index * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      whileHover={{
                        x: 6,
                      }}
                      className="
                        group
                        flex
                        cursor-default
                        items-center
                        justify-between
                        border-b
                        border-zinc-900
                        py-4
                      "
                    >
                      <div>
                        <p
                          className="
                            text-[9px]
                            font-bold
                            tracking-[0.18em]
                            text-zinc-600
                          "
                        >
                          {fact.label}
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-bold
                            text-zinc-300
                            transition-colors
                            duration-300
                            group-hover:text-white
                            md:text-base
                          "
                        >
                          {fact.value}
                        </p>
                      </div>

                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -5,
                        }}
                        whileHover={{
                          opacity: 1,
                          x: 0,
                        }}
                        className="
                          text-lime-400
                        "
                      >
                        →
                      </motion.span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </Reveal>
          </div>

          {/* =================================================
              BIG STATEMENT
          ================================================= */}

          <Reveal delay={0.15}>
            <div
              className="
                relative
                mt-28
                overflow-hidden
                border-y
                border-zinc-900
                py-16
                md:py-24
              "
            >

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  left-0
                  top-0
                  h-px
                  w-full
                  origin-left
                  bg-lime-400
                "
              />

              <p
                className="
                  text-[clamp(2.8rem,7vw,7rem)]
                  font-black
                  leading-[0.85]
                  tracking-[-0.06em]
                "
              >
                I DON'T KNOW
                <br />

                <span className="text-zinc-600">
                  EVERYTHING.
                </span>
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.7,
                }}
                className="
                  mt-8
                  text-[clamp(1.8rem,4vw,4rem)]
                  font-black
                  leading-none
                  tracking-[-0.04em]
                  text-lime-400
                "
              >
                THAT'S WHY I BUILD.
              </motion.p>

            </div>
          </Reveal>

          {/* =================================================
              BUILDING PHILOSOPHY
          ================================================= */}

          <Reveal delay={0.2}>
            <div className="mt-20">

              <div
                className="
                  flex
                  flex-col
                  gap-5
                  border-t
                  border-zinc-800
                  pt-6
                  md:flex-row
                  md:items-center
                  md:justify-between
                "
              >

                <p
                  className="
                    text-xs
                    font-bold
                    tracking-[0.25em]
                    text-zinc-600
                  "
                >
                  HOW I BUILD
                </p>

                <p
                  className="
                    text-sm
                    font-black
                    tracking-[0.12em]
                    text-white
                    md:text-base
                  "
                >
                  LEARN
                  <span className="mx-2 text-lime-400">
                    →
                  </span>
                  BUILD
                  <span className="mx-2 text-lime-400">
                    →
                  </span>
                  BREAK
                  <span className="mx-2 text-lime-400">
                    →
                  </span>
                  UNDERSTAND
                  <span className="mx-2 text-lime-400">
                    →
                  </span>
                  REBUILD
                </p>

              </div>

            </div>
          </Reveal>

          {/* =================================================
              FINAL MICRO STATEMENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className="
              mt-20
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-px
                w-12
                bg-lime-400
              "
            />

            <p
              className="
                text-[10px]
                font-bold
                tracking-[0.25em]
                text-zinc-600
              "
            >
              STILL BUILDING. STILL LEARNING.
            </p>
          </motion.div>

        </div>
      </div>

      {/* =====================================================
          ACCESSIBILITY
      ====================================================== */}

      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>
    </section>
  )
}

export default About