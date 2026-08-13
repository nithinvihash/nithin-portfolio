import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

function Hero() {
  const heroRef = useRef(null)

  /*
   * =========================================================
   * MOUSE / PARALLAX SYSTEM
   * =========================================================
   */

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 180,
    damping: 22,
    mass: 0.35,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 180,
    damping: 22,
    mass: 0.35,
  })

  /*
   * NAME PARALLAX
   */

  const nameRotateX = useTransform(
    smoothY,
    [-1, 1],
    [7, -7],
  )

  const nameRotateY = useTransform(
    smoothX,
    [-1, 1],
    [-9, 9],
  )

  const nameX = useTransform(
    smoothX,
    [-1, 1],
    [-12, 12],
  )

  const nameY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8],
  )

  /*
   * BACKGROUND PARALLAX
   */

  const bgX = useTransform(
    smoothX,
    [-1, 1],
    [-35, 35],
  )

  const bgY = useTransform(
    smoothY,
    [-1, 1],
    [-25, 25],
  )

  /*
   * GRID PARALLAX
   */

  const gridX = useTransform(
    smoothX,
    [-1, 1],
    [-12, 12],
  )

  const gridY = useTransform(
    smoothY,
    [-1, 1],
    [-8, 8],
  )

  /*
   * RING PARALLAX
   */

  const ringX = useTransform(
    smoothX,
    [-1, 1],
    [-18, 18],
  )

  const ringY = useTransform(
    smoothY,
    [-1, 1],
    [-12, 12],
  )

  /*
   * DNA PARALLAX
   */

  const dnaX = useTransform(
    smoothX,
    [-1, 1],
    [20, -20],
  )

  const dnaY = useTransform(
    smoothY,
    [-1, 1],
    [15, -15],
  )

  const dnaRotateX = useTransform(
    smoothY,
    [-1, 1],
    [7, -7],
  )

  const dnaRotateY = useTransform(
    smoothX,
    [-1, 1],
    [-10, 10],
  )

  /*
   * =========================================================
   * CURSOR CYBER DUST
   * =========================================================
   */

  const [dust, setDust] = useState([])
  const [cursorVisible, setCursorVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (event) => {
      const hero = heroRef.current

      if (!hero) return

      const rect = hero.getBoundingClientRect()

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (!inside) {
        setCursorVisible(false)
        return
      }

      setCursorVisible(true)

      /*
       * Normalize mouse position
       * from -1 to 1
       */

      const x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1

      const y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1

      mouseX.set(x)
      mouseY.set(y)

      /*
       * Less particles on mobile-sized screens
       */

      const particleCount =
        window.innerWidth < 768 ? 1 : 2

      const newParticles = Array.from(
        { length: particleCount },
        (_, index) => ({
          id: `${Date.now()}-${Math.random()}-${index}`,

          x: event.clientX,

          y: event.clientY,

          size: Math.random() * 3 + 1,

          driftX:
            (Math.random() - 0.5) * 42,

          driftY:
            (Math.random() - 0.5) * 42,

          rotation:
            Math.random() * 180,
        }),
      )

      setDust((current) =>
        [...current, ...newParticles].slice(-32),
      )
    }

    const handleMouseLeave = () => {
      setCursorVisible(false)
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove,
      { passive: true },
    )

    window.addEventListener(
      'mouseleave',
      handleMouseLeave,
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      )

      window.removeEventListener(
        'mouseleave',
        handleMouseLeave,
      )
    }
  }, [mouseX, mouseY])

  /*
   * Remove old cursor particles
   */

  useEffect(() => {
    const timer = setInterval(() => {
      setDust((current) =>
        current.slice(-24),
      )
    }, 700)

    return () => clearInterval(timer)
  }, [])

  /*
   * =========================================================
   * FLOATING BACKGROUND PARTICLES
   * =========================================================
   */

  const particles = useMemo(
    () =>
      Array.from(
        { length: 26 },
        (_, index) => ({
          id: index,

          left:
            `${(index * 37) % 100}%`,

          top:
            `${(index * 61) % 100}%`,

          size:
            (index % 3) + 1,

          duration:
            6 + (index % 5),

          delay:
            (index % 6) * 0.8,
        }),
      ),
    [],
  )

  /*
   * =========================================================
   * HERO
   * =========================================================
   */

  return (
    <section
      ref={heroRef}
      id="home"
      className="
        relative
        min-h-[calc(100vh-88px)]
        overflow-hidden
        bg-[#050505]
        px-6
        pb-16
        pt-16
        text-white
        md:px-12
        md:pb-20
        md:pt-20
      "
    >

      {/* =====================================================
          DEEP ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* Main atmosphere */}

        <motion.div
          className="
            absolute
            left-1/2
            top-[42%]
            h-[650px]
            w-[650px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.055]
            blur-[150px]
          "
          style={{
            x: bgX,
            y: bgY,
          }}
        />

        {/* Right atmosphere */}

        <motion.div
          className="
            absolute
            right-[-10%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-lime-300/[0.035]
            blur-[130px]
          "
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Bottom atmosphere */}

        <motion.div
          className="
            absolute
            bottom-[-20%]
            left-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-lime-400/[0.025]
            blur-[140px]
          "
          animate={{
            x: [-30, 30, -30],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>


      {/* =====================================================
          MOVING GRID
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[-10%]
          opacity-[0.045]
        "
        style={{
          x: gridX,
          y: gridY,
        }}
      >
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
            bg-[size:60px_60px]
          "
        />
      </motion.div>


      {/* =====================================================
          ORBITAL RINGS
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[520px]
          w-[520px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-lime-300/[0.08]
        "
        style={{
          x: ringX,
          y: ringY,
          rotateX: nameRotateX,
          rotateY: nameRotateY,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[390px]
          w-[680px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          border
          border-lime-300/[0.055]
        "
        style={{
          x: ringX,
          y: ringY,
          rotateZ: -18,
        }}
        animate={{
          rotateZ: [-18, -10, -18],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* =====================================================
          FLOATING BACKGROUND PARTICLES
      ====================================================== */}

      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="
            pointer-events-none
            absolute
            rounded-full
            bg-lime-300
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,

            boxShadow:
              '0 0 10px rgba(190,255,60,0.7)',
          }}
          animate={{
            opacity: [
              0.05,
              0.35,
              0.05,
            ],

            y: [
              -8,
              8,
              -8,
            ],

            x: [
              -4,
              4,
              -4,
            ],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}


      {/* =====================================================
          DNA — PREMIUM DIAGONAL FLOATING OBJECT
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          right-[-105px]
          top-[49%]
          z-[4]
          hidden
          h-[650px]
          w-[380px]
          -translate-y-1/2
          md:block
          lg:right-[1%]
          xl:right-[5%]
        "
        style={{
          x: dnaX,
          y: dnaY,

          rotateX: dnaRotateX,
          rotateY: dnaRotateY,

          rotateZ: -22,

          transformStyle: 'preserve-3d',

          perspective: 1400,
        }}
        animate={{
          y: [
            0,
            -14,
            0,
            14,
            0,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >

        {/* DNA atmospheric glow */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.055]
            blur-[95px]
          "
          animate={{
            scale: [
              1,
              1.12,
              1,
            ],

            opacity: [
              0.3,
              0.6,
              0.3,
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* =================================================
            ACTUAL DNA
        ================================================== */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[560px]
            w-[230px]
            -translate-x-1/2
            -translate-y-1/2
          "
          animate={{
            rotateY: [
              0,
              360,
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            transformStyle:
              'preserve-3d',
          }}
        >

          <svg
            viewBox="0 0 230 560"
            className="
              h-full
              w-full
              overflow-visible
            "
            fill="none"
          >

            {/* LEFT HELIX */}

            <path
              d="
                M65 0
                C150 45 150 95 65 140
                C-20 185 -20 235 65 280
                C150 325 150 375 65 420
                C-20 465 -20 515 65 560
              "
              stroke="rgba(190,255,60,0.95)"
              strokeWidth="2.2"
              strokeLinecap="round"
              filter="
                drop-shadow(
                  0 0 7px
                  rgba(190,255,60,0.85)
                )
              "
            />

            {/* RIGHT HELIX */}

            <path
              d="
                M165 0
                C80 45 80 95 165 140
                C250 185 250 235 165 280
                C80 325 80 375 165 420
                C250 465 250 515 165 560
              "
              stroke="rgba(255,255,255,0.7)"
              strokeWidth="1.6"
              strokeLinecap="round"
              filter="
                drop-shadow(
                  0 0 6px
                  rgba(255,255,255,0.35)
                )
              "
            />

            {/* =================================================
                BASE PAIRS
            ================================================== */}

            {[...Array(14)].map(
              (_, index) => {
                const y =
                  20 + index * 40

                return (
                  <motion.line
                    key={index}
                    x1="65"
                    y1={y}
                    x2="165"
                    y2={y}
                    stroke="rgba(190,255,60,0.35)"
                    strokeWidth="1"
                    strokeDasharray="3 5"
                    animate={{
                      opacity: [
                        0.12,
                        0.7,
                        0.12,
                      ],
                    }}
                    transition={{
                      duration: 2.5,
                      delay:
                        index * 0.12,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )
              },
            )}

            {/* =================================================
                GLOW NODES
            ================================================== */}

            {[...Array(14)].map(
              (_, index) => {
                const y =
                  20 + index * 40

                return (
                  <g
                    key={`node-${index}`}
                  >

                    <circle
                      cx="65"
                      cy={y}
                      r="3"
                      fill="#d9ff75"
                      filter="
                        drop-shadow(
                          0 0 7px
                          rgba(190,255,60,1)
                        )
                      "
                    />

                    <circle
                      cx="165"
                      cy={y}
                      r="2.5"
                      fill="#ffffff"
                      opacity="0.75"
                      filter="
                        drop-shadow(
                          0 0 5px
                          rgba(255,255,255,0.7)
                        )
                      "
                    />

                  </g>
                )
              },
            )}

          </svg>
        </motion.div>


        {/* =================================================
            DNA PARTICLES
        ================================================== */}

        {[...Array(18)].map(
          (_, index) => (
            <motion.span
              key={`dna-particle-${index}`}
              className="
                absolute
                rounded-full
                bg-lime-300
              "
              style={{
                left:
                  `${15 + ((index * 37) % 70)}%`,

                top:
                  `${5 + ((index * 53) % 90)}%`,

                width:
                  index % 3 === 0
                    ? 3
                    : 1.5,

                height:
                  index % 3 === 0
                    ? 3
                    : 1.5,

                boxShadow:
                  '0 0 8px rgba(190,255,60,0.9)',
              }}
              animate={{
                x: [
                  0,
                  (index % 2 === 0
                    ? 1
                    : -1) *
                    (8 +
                      (index % 5) * 4),
                  0,
                ],

                y: [
                  0,
                  -12 -
                    (index % 4) * 4,
                  0,
                ],

                opacity: [
                  0.1,
                  0.7,
                  0.1,
                ],

                scale: [
                  0.6,
                  1.2,
                  0.6,
                ],
              }}
              transition={{
                duration:
                  3 + (index % 4),

                delay:
                  index * 0.15,

                repeat: Infinity,

                ease: 'easeInOut',
              }}
            />
          ),
        )}

      </motion.div>


      {/* =====================================================
          CURSOR CYBER DUST
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[60]
        "
      >
        {dust.map((particle) => (
          <motion.span
            key={particle.id}
            className="
              absolute
              rounded-full
              bg-lime-200
            "
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,

              boxShadow:
                '0 0 8px rgba(190,255,60,0.95), 0 0 18px rgba(170,255,0,0.55)',
            }}
            initial={{
              opacity: 0,
              scale: 0.3,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              opacity: [
                0,
                1,
                0,
              ],

              scale: [
                0.3,
                1.4,
                0,
              ],

              x: particle.driftX,

              y: particle.driftY,

              rotate:
                particle.rotation,
            }}
            transition={{
              duration: 0.7,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>


      {/* =====================================================
          CURSOR RADIAL FIELD
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          z-[40]
          h-20
          w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-lime-300/20
          bg-lime-300/[0.015]
          blur-[1px]
        "
        style={{
          left: '50%',
          top: '50%',
          opacity:
            cursorVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorVisible
            ? [0.8, 1, 0.9]
            : 0.8,
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-168px)]
          items-center
        "
      >

        <div
          className="
            w-full
            max-w-[1150px]
          "
        >

          {/* =================================================
              EYEBROW
          ================================================= */}

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
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            CSE (AI/ML) · PYTHON DEVELOPER · WEB DEVELOPER
          </motion.p>


          {/* =================================================
              NAME
          ================================================= */}

          <motion.div
            style={{
              perspective: 1200,
            }}
            className="relative"
          >

            {/* Atmospheric name shadow */}

            <motion.div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0
                top-1/2
                h-[180px]
                w-[70%]
                -translate-y-1/2
                rounded-full
                bg-lime-400/[0.045]
                blur-[90px]
              "
              style={{
                x: nameX,
                y: nameY,
              }}
            />

            {/* NAME */}

            <motion.h1
              style={{
                rotateX: nameRotateX,
                rotateY: nameRotateY,
                x: nameX,
                y: nameY,

                transformStyle:
                  'preserve-3d',
              }}
              className="
                relative
                select-none
                text-[clamp(3.7rem,10vw,9rem)]
                font-black
                leading-[0.78]
                tracking-[-0.075em]
              "
            >

              <span className="block">
                NITHIN
              </span>

              <span
                className="
                  relative
                  block
                  text-lime-400
                "
              >
                VIHASH MOHAN

                {/* Depth layer */}

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[4px]
                    top-[4px]
                    -z-10
                    text-zinc-800
                    opacity-60
                  "
                >
                  VIHASH
                </span>

              </span>

            </motion.h1>

          </motion.div>


          {/* =================================================
              TAGLINE
          ================================================= */}

          <motion.div
            className="
              mt-10
              max-w-xl
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
              delay: 0.65,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            <p
              className="
                text-lg
                font-medium
                leading-relaxed
                text-zinc-400
                md:text-xl
              "
            >
              I build things, break things,
              understand why they broke,
              and build them better.
            </p>

            <p
              className="
                mt-4
                text-sm
                leading-relaxed
                text-zinc-600
                md:text-base
              "
            >
              Python, AI/ML experiments, automation,
              and modern web experiences.
            </p>

          </motion.div>


          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            className="
              mt-10
              flex
              flex-wrap
              gap-3
              sm:mt-12
              sm:gap-4
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
              delay: 0.8,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >

            {/* VIEW WORK */}

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
                border-lime-400
                bg-lime-400
                px-5
                py-4
                text-xs
                font-black
                tracking-[0.08em]
                text-black
                transition-all
                duration-300
                hover:bg-transparent
                hover:text-lime-400
                sm:px-6
                sm:text-sm
              "
            >
              VIEW MY WORK

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </motion.a>


            {/* RESUME */}

            <motion.a
              href="/resume.pdf"
              download
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
                border-zinc-700
                bg-transparent
                px-5
                py-4
                text-xs
                font-bold
                tracking-[0.08em]
                text-zinc-300
                transition-all
                duration-300
                hover:border-lime-400
                hover:text-lime-400
                sm:px-6
                sm:text-sm
              "
            >
              RESUME

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              >
                ↓
              </span>

            </motion.a>


            {/* CONTACT */}

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
                border-zinc-800
                px-5
                py-4
                text-xs
                font-bold
                tracking-[0.08em]
                text-zinc-500
                transition-all
                duration-300
                hover:border-zinc-500
                hover:text-white
                sm:px-6
                sm:text-sm
              "
            >
              LET'S TALK

              <span
                className="
                  ml-2
                  inline-block
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </motion.a>

          </motion.div>

        </div>
      </div>


      {/* =====================================================
          BOTTOM STATUS
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          mt-8
          border-t
          border-zinc-800
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
          delay: 1,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
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
              text-zinc-600
              sm:text-xs
            "
          >
            LEARN → BUILD → BREAK → IMPROVE
          </p>

          <p
            className="
              hidden
              text-xs
              font-bold
              tracking-[0.2em]
              text-zinc-700
              sm:block
            "
          >
            SCROLL TO EXPLORE ↓
          </p>

        </div>

      </motion.div>


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
              scroll-behavior: auto !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}
      </style>

    </section>
  )
}

export default Hero