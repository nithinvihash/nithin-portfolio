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
   * MOUSE / PARALLAX
   * =========================================================
   */

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, {
    stiffness: 150,
    damping: 24,
    mass: 0.35,
  })

  const smoothY = useSpring(mouseY, {
    stiffness: 150,
    damping: 24,
    mass: 0.35,
  })

  const nameX = useTransform(smoothX, [-1, 1], [-10, 10])
  const nameY = useTransform(smoothY, [-1, 1], [-7, 7])

  const nameRotateX = useTransform(
    smoothY,
    [-1, 1],
    [4, -4],
  )

  const nameRotateY = useTransform(
    smoothX,
    [-1, 1],
    [-6, 6],
  )

  const panelX = useTransform(smoothX, [-1, 1], [18, -18])
  const panelY = useTransform(smoothY, [-1, 1], [12, -12])

  const beamX = useTransform(smoothX, [-1, 1], [-25, 25])
  const beamY = useTransform(smoothY, [-1, 1], [-18, 18])

  const gridX = useTransform(smoothX, [-1, 1], [-8, 8])
  const gridY = useTransform(smoothY, [-1, 1], [-6, 6])

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

      const x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1

      const y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1

      mouseX.set(x)
      mouseY.set(y)

      const particleCount =
        window.innerWidth < 768 ? 1 : 2

      const particles = Array.from(
        { length: particleCount },
        (_, index) => ({
          id: `${Date.now()}-${Math.random()}-${index}`,
          x: event.clientX,
          y: event.clientY,
          size: Math.random() * 2.5 + 1,
          driftX: (Math.random() - 0.5) * 36,
          driftY: (Math.random() - 0.5) * 36,
          rotation: Math.random() * 180,
        }),
      )

      setDust((current) =>
        [...current, ...particles].slice(-28),
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

  useEffect(() => {
    const timer = setInterval(() => {
      setDust((current) => current.slice(-20))
    }, 700)

    return () => clearInterval(timer)
  }, [])

  /*
   * =========================================================
   * BACKGROUND PARTICLES
   * =========================================================
   */

  const particles = useMemo(
    () =>
      Array.from(
        { length: 22 },
        (_, index) => ({
          id: index,
          left: `${(index * 41) % 100}%`,
          top: `${(index * 67) % 100}%`,
          size: index % 3 === 0 ? 2 : 1,
          duration: 7 + (index % 5),
          delay: (index % 6) * 0.7,
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
        pb-12
        pt-14
        text-white
        md:px-12
        md:pb-16
        md:pt-16
        lg:px-16
      "
    >

      {/* =====================================================
          ATMOSPHERE
      ====================================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      ">

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_70%_45%,rgba(170,255,0,0.055),transparent_32%),radial-gradient(circle_at_15%_80%,rgba(170,255,0,0.025),transparent_28%)]
          "
        />

        <motion.div
          className="
            absolute
            right-[8%]
            top-[20%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-lime-400/[0.035]
            blur-[130px]
          "
          style={{
            x: panelX,
            y: panelY,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

      </div>


      {/* =====================================================
          TECHNICAL GRID
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-[-8%]
          opacity-[0.035]
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
            bg-[linear-gradient(rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.4)_1px,transparent_1px)]
            bg-[size:70px_70px]
          "
        />
      </motion.div>


            {/* =====================================================
          DIAGONAL SYSTEM BEAMS
      ====================================================== */}

      <div className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      ">

        {/* ORIGINAL DIAGONAL BEAMS */}

        <motion.div
          className="
            absolute
            left-[52%]
            top-[-20%]
            h-[150%]
            w-px
            origin-center
            bg-lime-300/10
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: 38,
          }}
        />

        <motion.div
          className="
            absolute
            left-[66%]
            top-[-20%]
            h-[150%]
            w-px
            origin-center
            bg-lime-300/[0.07]
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: 38,
          }}
        />

        <motion.div
          className="
            absolute
            left-[77%]
            top-[-20%]
            h-[150%]
            w-px
            origin-center
            bg-white/[0.035]
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: 38,
          }}
        />

        <motion.div
          className="
            absolute
            left-[42%]
            top-[50%]
            h-px
            w-[80%]
            bg-lime-300/[0.07]
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: -13,
          }}
        />


        {/* =================================================
            LARGE X BEAM — REFERENCE STYLE
        ================================================== */}

        <motion.div
          className="
            absolute
            left-[68%]
            top-[48%]
            h-[145%]
            w-[2px]
            origin-center
            bg-lime-300/[0.10]
            shadow-[0_0_18px_rgba(190,255,60,0.08)]
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: 45,
          }}
        />

        <motion.div
          className="
            absolute
            left-[68%]
            top-[48%]
            h-[145%]
            w-[2px]
            origin-center
            bg-lime-300/[0.08]
            shadow-[0_0_18px_rgba(190,255,60,0.06)]
          "
          style={{
            x: beamX,
            y: beamY,
            rotate: -45,
          }}
        />

        {/* SOFT GLOW AT X INTERSECTION */}

        <motion.div
          className="
            absolute
            left-[68%]
            top-[48%]
            h-32
            w-32
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-300/[0.035]
            blur-[45px]
          "
          style={{
            x: beamX,
            y: beamY,
          }}
        />

      </div>

      {/* =====================================================
          BACKGROUND PARTICLES
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
              '0 0 8px rgba(190,255,60,0.65)',
          }}
          animate={{
            opacity: [0.03, 0.3, 0.03],
            y: [-5, 5, -5],
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
          CURSOR CYBER DUST
      ====================================================== */}

      <div
        className="
          pointer-events-none
          fixed
          inset-0
          z-[70]
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
                '0 0 7px rgba(190,255,60,1), 0 0 16px rgba(170,255,0,0.5)',
            }}
            initial={{
              opacity: 0,
              scale: 0.2,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1.3, 0],
              x: particle.driftX,
              y: particle.driftY,
              rotate: particle.rotation,
            }}
            transition={{
              duration: 0.65,
              ease: 'easeOut',
            }}
          />
        ))}
      </div>


      {/* =====================================================
          CURSOR FIELD
      ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          fixed
          z-[60]
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-lime-300/15
          bg-lime-300/[0.01]
        "
        style={{
          left: '50%',
          top: '50%',
          opacity: cursorVisible ? 1 : 0,
        }}
        animate={{
          scale: cursorVisible
            ? [0.85, 1, 0.9]
            : 0.8,
        }}
        transition={{
          duration: 1.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />


      {/* =====================================================
          TOP SYSTEM BAR
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          mb-14
          flex
          items-center
          justify-between
          border-b
          border-zinc-800
          pb-4
        "
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >

        <div className="
          flex
          items-center
          gap-3
        ">
          <span className="
            h-2
            w-2
            rounded-full
            bg-lime-400
            shadow-[0_0_10px_rgba(190,255,60,0.8)]
          " />

          <span className="
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-zinc-500
            sm:text-[10px]
          ">
            NITHIN / PORTFOLIO_SYSTEM
          </span>
        </div>

        <div className="
          hidden
          items-center
          gap-6
          text-[9px]
          font-bold
          tracking-[0.2em]
          text-zinc-700
          sm:flex
        ">
          <span>2026 / 001</span>
          <span>SYS.STATUS: NORMAL</span>
        </div>

      </motion.div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="
        relative
        z-10
        mx-auto
        grid
        min-h-[calc(100vh-230px)]
        max-w-[1450px]
        items-center
        gap-16
        lg:grid-cols-[1.1fr_0.9fr]
        lg:gap-8
      ">


        {/* =================================================
            LEFT SIDE
        ================================================== */}

        <div className="relative">

          <motion.p
            className="
              mb-7
              text-[10px]
              font-bold
              tracking-[0.28em]
              text-zinc-500
              sm:text-xs
            "
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            CSE (AI/ML) · PYTHON · WEB
          </motion.p>


          {/* NAME */}

          <motion.div
            style={{
              perspective: 1200,
            }}
          >

            <motion.h1
              style={{
                x: nameX,
                y: nameY,
                rotateX: nameRotateX,
                rotateY: nameRotateY,
                transformStyle: 'preserve-3d',
              }}
              className="
                select-none
                text-[clamp(4rem,10vw,9.5rem)]
                font-black
                leading-[0.78]
                tracking-[-0.08em]
              "
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              <span className="block">
                NITHIN
              </span>

              <span className="
                relative
                block
                text-lime-400
              ">
                VIHASH

                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-[5px]
                    top-[5px]
                    -z-10
                    text-zinc-800
                    opacity-50
                  "
                >
                  VIHASH
                </span>
              </span>

              <span className="
                mt-3
                block
                text-[clamp(1.5rem,3.2vw,3rem)]
                font-bold
                tracking-[-0.04em]
                text-zinc-600
              ">
                MOHAN
              </span>

            </motion.h1>

          </motion.div>


          {/* DESCRIPTION */}

          <motion.div
            className="mt-10 max-w-xl"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.65,
            }}
          >

            <p className="
              text-lg
              font-medium
              leading-relaxed
              text-zinc-300
              md:text-xl
            ">
              Building digital systems
              <br className="hidden sm:block" />
              that move.
            </p>

            <p className="
              mt-4
              max-w-lg
              text-sm
              leading-relaxed
              text-zinc-600
              md:text-base
            ">
              Python, AI/ML experiments,
              automation, and modern web
              experiences.
            </p>

          </motion.div>


          {/* BUTTONS */}

          <motion.div
            className="
              mt-9
              flex
              flex-wrap
              gap-3
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
              duration: 0.8,
              delay: 0.8,
            }}
          >

            <motion.a
              href="#work"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
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
              <span className="
                ml-2
                inline-block
                transition-transform
                duration-300
                group-hover:translate-x-1
              ">
                →
              </span>
            </motion.a>


            <motion.a
              href="/resume.pdf"
              download
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                border
                border-zinc-700
                px-5
                py-4
                text-xs
                font-bold
                tracking-[0.08em]
                text-zinc-300
                transition-all
                hover:border-lime-400
                hover:text-lime-400
                sm:px-6
                sm:text-sm
              "
            >
              RESUME
              <span className="
                ml-2
                inline-block
                transition-transform
                duration-300
                group-hover:translate-y-1
              ">
                ↓
              </span>
            </motion.a>


            <motion.a
              href="#contact"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                border
                border-zinc-800
                px-5
                py-4
                text-xs
                font-bold
                tracking-[0.08em]
                text-zinc-500
                transition-all
                hover:border-zinc-500
                hover:text-white
                sm:px-6
                sm:text-sm
              "
            >
              LET'S TALK →
            </motion.a>

          </motion.div>

        </div>


        {/* =================================================
            RIGHT SYSTEM HUD
        ================================================== */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-[560px]
          "
          style={{
            x: panelX,
            y: panelY,
          }}
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* Corner brackets */}

          <div className="
            absolute
            -left-3
            -top-3
            h-7
            w-7
            border-l
            border-t
            border-lime-400/70
          " />

          <div className="
            absolute
            -right-3
            -top-3
            h-7
            w-7
            border-r
            border-t
            border-lime-400/70
          " />

          <div className="
            absolute
            -bottom-3
            -left-3
            h-7
            w-7
            border-b
            border-l
            border-lime-400/70
          " />

          <div className="
            absolute
            -bottom-3
            -right-3
            h-7
            w-7
            border-b
            border-r
            border-lime-400/70
          " />


          {/* Main panel */}

          <div className="
            relative
            border
            border-zinc-800
            bg-[#080808]/90
            backdrop-blur-sm
          ">

            {/* Header */}

            <div className="
              flex
              items-center
              justify-between
              border-b
              border-zinc-800
              px-5
              py-4
            ">

              <div className="
                flex
                items-center
                gap-3
              ">

                <div className="
                  flex
                  gap-1
                ">
                  <span className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-zinc-700
                  "></span>
                  <span className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-zinc-700
                  "></span>
                  <span className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-lime-400
                  "></span>
                </div>

                <span className="
                  text-[9px]
                  font-bold
                  tracking-[0.2em]
                  text-zinc-500
                ">
                  IDENTITY_SYSTEM
                </span>

              </div>

              <span className="
                text-[9px]
                font-bold
                tracking-[0.2em]
                text-lime-400
              ">
                ONLINE
              </span>

            </div>


            {/* Main system area */}

            <div className="
              grid
              min-h-[390px]
              grid-cols-1
              md:grid-cols-[1fr_0.8fr]
            ">


              {/* Left data */}

              <div className="
                border-b
                border-zinc-800
                p-6
                md:border-b-0
                md:border-r
              ">

                <p className="
                  text-[9px]
                  font-bold
                  tracking-[0.22em]
                  text-zinc-600
                ">
                  PROFILE / 001
                </p>

                <h2 className="
                  mt-5
                  text-3xl
                  font-black
                  tracking-[-0.05em]
                  text-white
                  sm:text-4xl
                ">
                  NITHIN
                  <br />
                  <span className="text-lime-400">
                    VIHASH
                  </span>
                </h2>

                <p className="
                  mt-5
                  max-w-xs
                  text-xs
                  leading-relaxed
                  text-zinc-600
                ">
                  Computer Science student
                  focused on AI/ML, Python
                  development, automation,
                  and modern web systems.
                </p>


                {/* System status */}

                <div className="
                  mt-8
                  space-y-4
                ">

                  <div>
                    <div className="
                      mb-2
                      flex
                      justify-between
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                    ">
                      <span className="text-zinc-600">
                        SYSTEM_STATUS
                      </span>

                      <span className="text-lime-400">
                        ACTIVE
                      </span>
                    </div>

                    <div className="
                      h-[2px]
                      bg-zinc-800
                    ">
                      <motion.div
                        className="
                          h-full
                          bg-lime-400
                        "
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: '91%',
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 1,
                        }}
                      />
                    </div>
                  </div>


                  <div>
                    <div className="
                      mb-2
                      flex
                      justify-between
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                    ">
                      <span className="text-zinc-600">
                        BUILD_PROGRESS
                      </span>

                      <span className="text-zinc-400">
                        82%
                      </span>
                    </div>

                    <div className="
                      h-[2px]
                      bg-zinc-800
                    ">
                      <motion.div
                        className="
                          h-full
                          bg-zinc-400
                        "
                        initial={{
                          width: 0,
                        }}
                        animate={{
                          width: '82%',
                        }}
                        transition={{
                          duration: 1.4,
                          delay: 1.1,
                        }}
                      />
                    </div>
                  </div>

                </div>

              </div>


              {/* Right technical stats */}

              <div className="
                p-6
              ">

                <p className="
                  text-[9px]
                  font-bold
                  tracking-[0.22em]
                  text-zinc-600
                ">
                  SYSTEM_DATA
                </p>


                <div className="
                  mt-7
                  space-y-6
                ">

                  <div>
                    <p className="
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-zinc-600
                    ">
                      CURRENT_BUILD
                    </p>

                    <p className="
                      mt-2
                      text-xl
                      font-black
                      tracking-[-0.04em]
                      text-white
                    ">
                      NOVA
                    </p>

                    <p className="
                      mt-1
                      text-[9px]
                      tracking-[0.15em]
                      text-lime-400
                    ">
                      PERSONAL AI SYSTEM
                    </p>
                  </div>


                  <div>
                    <p className="
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-zinc-600
                    ">
                      STACK
                    </p>

                    <div className="
                      mt-3
                      flex
                      flex-wrap
                      gap-2
                    ">

                      {[
                        'PYTHON',
                        'AI/ML',
                        'REACT',
                        'MYSQL',
                      ].map((item) => (
                        <span
                          key={item}
                          className="
                            border
                            border-zinc-800
                            px-2
                            py-1
                            text-[8px]
                            font-bold
                            tracking-[0.12em]
                            text-zinc-400
                          "
                        >
                          {item}
                        </span>
                      ))}

                    </div>
                  </div>


                  <div>
                    <p className="
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-zinc-600
                    ">
                      PROJECTS
                    </p>

                    <div className="
                      mt-2
                      flex
                      items-end
                      gap-2
                    ">
                      <span className="
                        text-4xl
                        font-black
                        tracking-[-0.08em]
                        text-white
                      ">
                        03
                      </span>

                      <span className="
                        mb-1
                        text-[8px]
                        font-bold
                        tracking-[0.15em]
                        text-zinc-600
                      ">
                        ACTIVE_BUILDS
                      </span>
                    </div>
                  </div>


                  <div>
                    <p className="
                      text-[8px]
                      font-bold
                      tracking-[0.18em]
                      text-zinc-600
                    ">
                      UPTIME
                    </p>

                    <p className="
                      mt-2
                      font-mono
                      text-lg
                      font-bold
                      text-lime-400
                    ">
                      99.9%
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* Footer */}

            <div className="
              flex
              items-center
              justify-between
              border-t
              border-zinc-800
              px-5
              py-3
            ">

              <span className="
                text-[8px]
                font-bold
                tracking-[0.18em]
                text-zinc-700
              ">
                NITHIN_VIHASH // DEV
              </span>

              <span className="
                text-[8px]
                font-bold
                tracking-[0.18em]
                text-zinc-700
              ">
                SYS.STATUS: NORMAL
              </span>

            </div>

          </div>


          {/* Floating labels */}

          <motion.div
            className="
              absolute
              -right-3
              top-[17%]
              hidden
              border
              border-zinc-800
              bg-[#050505]
              px-3
              py-2
              lg:block
            "
            animate={{
              y: [-4, 4, -4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="
              text-[8px]
              font-bold
              tracking-[0.15em]
              text-zinc-600
            ">
              SYS.STATUS
            </span>

            <span className="
              ml-2
              text-[8px]
              font-bold
              text-lime-400
            ">
              NORMAL
            </span>
          </motion.div>


          <motion.div
            className="
              absolute
              -left-4
              bottom-[15%]
              hidden
              border
              border-zinc-800
              bg-[#050505]
              px-3
              py-2
              lg:block
            "
            animate={{
              y: [4, -4, 4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <span className="
              text-[8px]
              font-bold
              tracking-[0.15em]
              text-zinc-600
            ">
              BUILD_MODE
            </span>

            <span className="
              ml-2
              text-[8px]
              font-bold
              text-white
            ">
              ACTIVE
            </span>
          </motion.div>

        </motion.div>

      </div>


      {/* =====================================================
          BOTTOM STATUS
      ====================================================== */}

      <motion.div
        className="
          relative
          z-10
          mx-auto
          mt-10
          max-w-[1450px]
          border-t
          border-zinc-800
          pt-4
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.1,
        }}
      >

        <div className="
          flex
          items-center
          justify-between
        ">

          <p className="
            text-[9px]
            font-bold
            tracking-[0.2em]
            text-zinc-600
            sm:text-[10px]
          ">
            LEARN → BUILD → BREAK → IMPROVE
          </p>

          <p className="
            text-[9px]
            font-bold
            tracking-[0.2em]
            text-zinc-700
            sm:text-[10px]
          ">
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