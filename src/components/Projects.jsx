import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

function Projects() {
  const [cursor, setCursor] = useState({
    x: 50,
    y: 50,
    active: false,
  })

  const [hoveredProject, setHoveredProject] = useState(null)

  const sectionRef = useRef(null)

  const projects = [
    {
      number: '01',
      title: 'NOVA',
      type: 'PERSONAL AI ASSISTANT',
      description:
        'A modular, privacy-first personal AI assistant built with Python, featuring desktop automation, offline voice interaction, and local face recognition and authentication using YuNet and SFace.',
      tech: [
        'Python',
        'OpenCV',
        'YuNet',
        'SFace',
        'Vosk',
        'pyttsx3',
        'Git',
      ],
      status: 'V0.6.0 — COMPLETED',
      github:
        'https://github.com/nithinvihash/nova-ai-assistant',
    },
    {
      number: '02',
      title: 'WEBSUITER',
      type: 'FREELANCE DIGITAL STUDIO',
      description:
        'A freelance digital studio focused on creating modern websites and digital experiences for individuals, businesses, and growing brands.',
      tech: [
        'React',
        'Vite',
        'Tailwind CSS',
        'JavaScript',
      ],
      status: 'BUILDING',
    },
  ]

  /* =========================================================
     CURSOR TRACKING
  ========================================================= */

  useEffect(() => {
    const handleMouseMove = (event) => {
      const section = sectionRef.current

      if (!section) return

      const rect = section.getBoundingClientRect()

      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom

      if (!inside) {
        setCursor((current) => ({
          ...current,
          active: false,
        }))
        return
      }

      setCursor({
        x:
          ((event.clientX - rect.left) /
            rect.width) *
          100,

        y:
          ((event.clientY - rect.top) /
            rect.height) *
          100,

        active: true,
      })
    }

    window.addEventListener(
      'mousemove',
      handleMouseMove,
    )

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove,
      )
    }
  }, [])

  /* =========================================================
     ANIMATION VARIANTS
  ========================================================= */

  const sectionReveal = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const projectReveal = {
    hidden: {
      opacity: 0,
      y: 60,
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

  const techContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.2,
      },
    },
  }

  const techItem = {
    hidden: {
      opacity: 0,
      y: 10,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.3,
      },
    },
  }

  /* =========================================================
     CYBERNETIC NOVA MASK
     Inspired by the uploaded cybernetic reference.
  ========================================================= */

  const NovaCyberMask = ({ active }) => {
    return (
      <motion.div
        className="
          relative
          h-full
          w-full
        "
        animate={{
          scale: active ? 1.02 : 0.98,
          y: active ? -2 : 3,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <svg
          viewBox="0 0 690 710"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            {/* =========================================
               MASK METAL
            ========================================= */}

            <linearGradient
              id="novaMetal"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#202020"
              />

              <stop
                offset="28%"
                stopColor="#090909"
              />

              <stop
                offset="55%"
                stopColor="#171717"
              />

              <stop
                offset="100%"
                stopColor="#020202"
              />
            </linearGradient>

            <linearGradient
              id="novaMetalEdge"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#555"
              />

              <stop
                offset="50%"
                stopColor="#181818"
              />

              <stop
                offset="100%"
                stopColor="#050505"
              />
            </linearGradient>

            {/* =========================================
               LIME GLOW
            ========================================= */}

            <filter
              id="novaGlowSoft"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="5"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="novaGlowStrong"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="11"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter
              id="novaGlowExtreme"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="18"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient
              id="novaLime"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor="#8cff00"
              />

              <stop
                offset="50%"
                stopColor="#efffb0"
              />

              <stop
                offset="100%"
                stopColor="#8cff00"
              />
            </linearGradient>

            {/* =========================================
               CENTRAL CORE
            ========================================= */}

            <radialGradient
              id="novaCore"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop
                offset="0%"
                stopColor="#ffffff"
              />

              <stop
                offset="20%"
                stopColor="#dfff8c"
              />

              <stop
                offset="48%"
                stopColor="#aaff00"
              />

              <stop
                offset="100%"
                stopColor="#66aa00"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>

          {/* =================================================
              OUTER CYBER FIELD
          ================================================= */}

          <circle
            cx="345"
            cy="330"
            r="270"
            fill="none"
            stroke="#aaff00"
            strokeWidth="1"
            opacity={active ? 0.15 : 0.025}
            filter={
              active
                ? 'url(#novaGlowSoft)'
                : undefined
            }
          />

          <circle
            cx="345"
            cy="330"
            r="245"
            fill="none"
            stroke="#aaff00"
            strokeWidth="0.6"
            strokeDasharray="4 12"
            opacity={active ? 0.2 : 0.03}
          />

          {/* =================================================
              MAIN MASK SILHOUETTE
          ================================================= */}

          <path
            d="
              M170 180
              L275 138
              L345 125
              L415 138
              L520 180

              L548 275

              L536 430

              L480 475
              L410 500
              L345 510
              L280 500
              L210 475
              L154 430

              L142 275
              Z
            "
            fill="url(#novaMetal)"
            stroke={
              active
                ? '#3f590f'
                : '#242424'
            }
            strokeWidth="5"
            strokeLinejoin="round"
          />

          {/* =================================================
              OUTER EDGE HIGHLIGHT
          ================================================= */}

          <path
            d="
              M170 180
              L275 138
              L345 125
              L415 138
              L520 180
              L548 275
            "
            fill="none"
            stroke={
              active
                ? '#8cff00'
                : '#252525'
            }
            strokeWidth="2"
            opacity={active ? 0.7 : 0.25}
            filter={
              active
                ? 'url(#novaGlowSoft)'
                : undefined
            }
          />

          {/* =================================================
              FOREHEAD PLATE
          ================================================= */}

          <path
            d="
              M275 160
              L345 142
              L415 160
              L390 220
              L345 205
              L300 220
              Z
            "
            fill="url(#novaMetalEdge)"
            stroke="#303030"
            strokeWidth="3"
          />

          {/* forehead center line */}

          <path
            d="
              M345 145
              L345 205
            "
            stroke={
              active
                ? '#aaff00'
                : '#252525'
            }
            strokeWidth="1.5"
            opacity={active ? 0.65 : 0.25}
            filter={
              active
                ? 'url(#novaGlowSoft)'
                : undefined
            }
          />

          {/* =================================================
              LEFT SIDE ARMOR
          ================================================= */}

          <path
            d="
              M180 205
              L270 180
              L292 230
              L250 275
              L175 300
              Z
            "
            fill="#0b0b0b"
            stroke="#303030"
            strokeWidth="3"
          />

          <path
            d="
              M175 300
              L250 275
              L260 375
              L190 405
              Z
            "
            fill="#080808"
            stroke="#292929"
            strokeWidth="3"
          />

          {/* =================================================
              RIGHT SIDE ARMOR
          ================================================= */}

          <path
            d="
              M510 205
              L420 180
              L398 230
              L440 275
              L515 300
              Z
            "
            fill="#0b0b0b"
            stroke="#303030"
            strokeWidth="3"
          />

          <path
            d="
              M515 300
              L440 275
              L430 375
              L500 405
              Z
            "
            fill="#080808"
            stroke="#292929"
            strokeWidth="3"
          />

          {/* =================================================
              LEFT EYE MODULE
          ================================================= */}

          <path
            d="
              M195 235
              L250 210
              L300 225
              L275 270
              L230 275
              L198 260
              Z
            "
            fill="#030303"
            stroke={
              active
                ? '#75c900'
                : '#282828'
            }
            strokeWidth="3"
          />

          <motion.path
            d="
              M207 243
              L250 225
              L286 233
              L268 257
              L232 262
              L210 254
              Z
            "
            fill={
              active
                ? 'url(#novaLime)'
                : '#101010'
            }
            stroke={
              active
                ? '#cfff72'
                : '#252525'
            }
            strokeWidth="2"
            filter={
              active
                ? 'url(#novaGlowStrong)'
                : undefined
            }
            animate={
              active
                ? {
                    opacity: [
                      0.65,
                      1,
                      0.72,
                      1,
                    ],
                  }
                : {
                    opacity: 0.45,
                  }
            }
            transition={
              active
                ? {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : {
                    duration: 0.5,
                  }
            }
          />

          {/* =================================================
              RIGHT EYE MODULE
          ================================================= */}

          <path
            d="
              M495 235
              L440 210
              L390 225
              L415 270
              L460 275
              L492 260
              Z
            "
            fill="#030303"
            stroke={
              active
                ? '#75c900'
                : '#282828'
            }
            strokeWidth="3"
          />

          <motion.path
            d="
              M483 243
              L440 225
              L404 233
              L422 257
              L458 262
              L480 254
              Z
            "
            fill={
              active
                ? 'url(#novaLime)'
                : '#101010'
            }
            stroke={
              active
                ? '#cfff72'
                : '#252525'
            }
            strokeWidth="2"
            filter={
              active
                ? 'url(#novaGlowStrong)'
                : undefined
            }
            animate={
              active
                ? {
                    opacity: [
                      0.65,
                      1,
                      0.72,
                      1,
                    ],
                  }
                : {
                    opacity: 0.45,
                  }
            }
            transition={
              active
                ? {
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.15,
                  }
                : {
                    duration: 0.5,
                  }
            }
          />

          {/* =================================================
              EYE SCAN LINES
          ================================================= */}

          {active && (
            <>
              <motion.line
                x1="212"
                y1="248"
                x2="280"
                y2="248"
                stroke="#ffffff"
                strokeWidth="1"
                opacity="0.8"
                animate={{
                  opacity: [0, 0.8, 0],
                  x1: [212, 225, 212],
                  x2: [280, 293, 280],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.line
                x1="410"
                y1="248"
                x2="478"
                y2="248"
                stroke="#ffffff"
                strokeWidth="1"
                opacity="0.8"
                animate={{
                  opacity: [0, 0.8, 0],
                  x1: [410, 397, 410],
                  x2: [478, 465, 478],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2,
                }}
              />
            </>
          )}

          {/* =================================================
              CENTRAL NOSE / CORE CHANNEL
          ================================================= */}

          <path
            d="
              M345 210
              L320 290
              L330 325
              L345 340
              L360 325
              L370 290
              Z
            "
            fill="#070707"
            stroke="#303030"
            strokeWidth="3"
          />

          <path
            d="
              M345 225
              L345 320
            "
            stroke={
              active
                ? '#aaff00'
                : '#242424'
            }
            strokeWidth="2"
            opacity={active ? 0.7 : 0.2}
            filter={
              active
                ? 'url(#novaGlowSoft)'
                : undefined
            }
          />

          {/* =================================================
              CENTRAL AI CORE
          ================================================= */}

          <motion.g
            animate={
              active
                ? {
                    opacity: [0.55, 1, 0.65, 1],
                    scale: [1, 1.05, 1],
                  }
                : {
                    opacity: 0.18,
                    scale: 0.95,
                  }
            }
            transition={
              active
                ? {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
                : {
                    duration: 0.6,
                  }
            }
            style={{
              transformOrigin:
                '345px 330px',
            }}
          >
            <circle
              cx="345"
              cy="330"
              r="30"
              fill="none"
              stroke="#aaff00"
              strokeWidth="2"
              opacity={active ? 0.8 : 0.15}
              filter={
                active
                  ? 'url(#novaGlowStrong)'
                  : undefined
              }
            />

            <circle
              cx="345"
              cy="330"
              r="21"
              fill="none"
              stroke="#cfff72"
              strokeWidth="1.5"
              strokeDasharray="5 4"
            />

            <circle
              cx="345"
              cy="330"
              r="9"
              fill={
                active
                  ? 'url(#novaCore)'
                  : '#181818'
              }
              filter={
                active
                  ? 'url(#novaGlowExtreme)'
                  : undefined
              }
            />
          </motion.g>

          {/* =================================================
              CHEEK CIRCUITS
          ================================================= */}

          <g
            fill="none"
            stroke="#8cff00"
            opacity={active ? 0.7 : 0.07}
          >
            <path
              d="
                M185 330
                L225 330
                L245 315
                L280 315
              "
              strokeWidth="1.5"
            />

            <path
              d="
                M185 350
                L215 350
                L235 365
                L270 365
              "
              strokeWidth="1"
            />

            <path
              d="
                M505 330
                L465 330
                L445 315
                L410 315
              "
              strokeWidth="1.5"
            />

            <path
              d="
                M505 350
                L475 350
                L455 365
                L420 365
              "
              strokeWidth="1"
            />
          </g>

          {/* =================================================
              JAW
          ================================================= */}

          <path
            d="
              M205 405
              L275 430
              L345 445
              L415 430
              L485 405

              L460 470
              L400 500
              L345 510
              L290 500
              L230 470
              Z
            "
            fill="#070707"
            stroke="#292929"
            strokeWidth="3"
          />

          {/* Jaw accent */}

          <path
            d="
              M255 430
              L345 450
              L435 430
            "
            fill="none"
            stroke={
              active
                ? '#8cff00'
                : '#252525'
            }
            strokeWidth="1.5"
            opacity={active ? 0.7 : 0.15}
            filter={
              active
                ? 'url(#novaGlowSoft)'
                : undefined
            }
          />

          {/* =================================================
              SIDE CIRCUIT MODULES
          ================================================= */}

          <g
            stroke="#aaff00"
            fill="none"
            opacity={active ? 0.65 : 0.05}
          >
            <rect
              x="155"
              y="285"
              width="28"
              height="70"
              rx="3"
              strokeWidth="1"
            />

            <line
              x1="163"
              y1="290"
              x2="163"
              y2="350"
            />

            <line
              x1="173"
              y1="290"
              x2="173"
              y2="350"
            />

            <rect
              x="507"
              y="285"
              width="28"
              height="70"
              rx="3"
              strokeWidth="1"
            />

            <line
              x1="517"
              y1="290"
              x2="517"
              y2="350"
            />

            <line
              x1="527"
              y1="290"
              x2="527"
              y2="350"
            />
          </g>

          {/* =================================================
              SMALL STATUS LIGHTS
          ================================================= */}

          <motion.g
            animate={
              active
                ? {
                    opacity: [0.3, 1, 0.3],
                  }
                : {
                    opacity: 0.12,
                  }
            }
            transition={{
              duration: 1.5,
              repeat: active ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <circle
              cx="180"
              cy="300"
              r="3"
              fill="#aaff00"
              filter={
                active
                  ? 'url(#novaGlowSoft)'
                  : undefined
              }
            />

            <circle
              cx="510"
              cy="300"
              r="3"
              fill="#aaff00"
              filter={
                active
                  ? 'url(#novaGlowSoft)'
                  : undefined
              }
            />
          </motion.g>
        </svg>
      </motion.div>
    )
  }

  /* =========================================================
     WEBSUITER SPIDER
  ========================================================= */

  const SpiderLogo = ({ active }) => {
    return (
      <motion.div
        className="h-full w-full"
        animate={
          active
            ? {
                scale: [1, 1.025, 1],
                rotate: [0, 0.7, 0],
              }
            : {
                scale: 0.94,
                rotate: -2,
              }
        }
        transition={
          active
            ? {
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : {
                duration: 0.6,
              }
        }
      >
        <svg
          viewBox="0 0 220 220"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <filter
              id="spiderGlowPremium"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                stdDeviation="6"
                result="blur"
              />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <linearGradient
              id="spiderLime"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="#dfff8c"
              />

              <stop
                offset="50%"
                stopColor="#aaff00"
              />

              <stop
                offset="100%"
                stopColor="#72c900"
              />
            </linearGradient>
          </defs>

          {/* Spider body */}

          <g
            fill="none"
            stroke="url(#spiderLime)"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter={
              active
                ? 'url(#spiderGlowPremium)'
                : undefined
            }
            opacity={active ? 1 : 0.06}
          >
            <ellipse
              cx="110"
              cy="112"
              rx="18"
              ry="38"
              strokeWidth="8"
            />

            <circle
              cx="110"
              cy="76"
              r="12"
              strokeWidth="7"
            />

            <path
              d="M110 88 V148"
              strokeWidth="7"
            />

            {/* left */}

            <path
              d="M96 96 C70 75 48 72 23 53"
              strokeWidth="8"
            />

            <path
              d="M95 110 C66 101 40 101 16 90"
              strokeWidth="8"
            />

            <path
              d="M96 126 C70 133 47 146 23 166"
              strokeWidth="8"
            />

            <path
              d="M100 142 C80 159 67 180 58 200"
              strokeWidth="8"
            />

            {/* right */}

            <path
              d="M124 96 C150 75 172 72 197 53"
              strokeWidth="8"
            />

            <path
              d="M125 110 C154 101 180 101 204 90"
              strokeWidth="8"
            />

            <path
              d="M124 126 C150 133 173 146 197 166"
              strokeWidth="8"
            />

            <path
              d="M120 142 C140 159 153 180 162 200"
              strokeWidth="8"
            />

            {/* body detail */}

            <path
              d="M101 103 L110 110 L119 103"
              strokeWidth="4"
            />

            <path
              d="M101 120 L110 127 L119 120"
              strokeWidth="4"
            />
          </g>

          {/* spider pulse */}

          {active && (
            <motion.circle
              cx="110"
              cy="110"
              r="65"
              fill="none"
              stroke="#aaff00"
              strokeWidth="1"
              animate={{
                r: [55, 90],
                opacity: [0.4, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          )}
        </svg>
      </motion.div>
    )
  }

  /* =========================================================
     PROJECT VISUAL
  ========================================================= */

  const ProjectVisual = ({ project }) => {
    const isNova = project.title === 'NOVA'
    const isActive =
      hoveredProject === project.number

    return (
      <div
        onMouseEnter={() =>
          setHoveredProject(project.number)
        }
        onMouseLeave={() =>
          setHoveredProject(null)
        }
        className="
          relative
          hidden
          h-[330px]
          overflow-hidden
          border
          border-zinc-800
          bg-[#030403]
          lg:block
        "
      >
        {/* Cursor spotlight */}

        <motion.div
          className="
            pointer-events-none
            absolute
            z-20
            h-[190px]
            w-[190px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.08]
            blur-[65px]
          "
          animate={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            opacity:
              cursor.active && isActive ? 1 : 0,
          }}
          transition={{
            left: {
              duration: 0.12,
            },
            top: {
              duration: 0.12,
            },
            opacity: {
              duration: 0.25,
            },
          }}
        />

        {/* Technical grid */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.07]
            bg-[linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)]
            bg-[size:32px_32px]
          "
        />

        {/* Scan line */}

        {isActive && (
          <motion.div
            className="
              pointer-events-none
              absolute
              left-0
              right-0
              z-20
              h-px
              bg-lime-400/40
              shadow-[0_0_15px_rgba(170,255,0,0.8)]
            "
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        )}

        {/* Corner brackets */}

        <span
          className="
            absolute
            left-5
            top-5
            h-6
            w-6
            border-l
            border-t
            border-lime-400/30
          "
        />

        <span
          className="
            absolute
            bottom-5
            right-5
            h-6
            w-6
            border-b
            border-r
            border-lime-400/30
          "
        />

        {/* Visual */}

        <motion.div
          className="
            absolute
            left-1/2
            top-1/2
            h-[310px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
          "
          animate={{
            opacity:
              isActive && cursor.active
                ? 1
                : 0.22,

            filter:
              isActive && cursor.active
                ? 'brightness(1.12)'
                : 'brightness(0.45)',
          }}
          transition={{
            duration: 0.5,
          }}
        >
          {isNova ? (
            <NovaCyberMask
              active={
                isActive && cursor.active
              }
            />
          ) : (
            <SpiderLogo
              active={
                isActive && cursor.active
              }
            />
          )}
        </motion.div>

        {/* System label */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-5
            left-5
            z-30
          "
        >
          <p
            className="
              text-[8px]
              font-black
              tracking-[0.25em]
              text-zinc-600
            "
          >
            {isNova
              ? 'NOVA // AI CORE'
              : 'WEBSUITER // STUDIO'}
          </p>
        </div>

        {/* Status indicator */}

        <div
          className="
            pointer-events-none
            absolute
            right-5
            top-5
            z-30
            flex
            items-center
            gap-2
          "
        >
          <motion.span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-lime-400
            "
            animate={
              isActive && cursor.active
                ? {
                    opacity: [0.35, 1, 0.35],
                    scale: [0.8, 1.3, 0.8],
                  }
                : {
                    opacity: 0.18,
                    scale: 1,
                  }
            }
            transition={{
              duration: 1.2,
              repeat:
                isActive && cursor.active
                  ? Infinity
                  : 0,
            }}
            style={{
              boxShadow:
                isActive && cursor.active
                  ? '0 0 14px rgba(170,255,0,0.9)'
                  : 'none',
            }}
          />

          <span
            className="
              text-[7px]
              font-bold
              tracking-[0.2em]
              text-zinc-600
            "
          >
            {isActive && cursor.active
              ? 'ACTIVE'
              : 'STANDBY'}
          </span>
        </div>
      </div>
    )
  }

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <section
      ref={sectionRef}
      id="work"
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-800
        bg-black
        px-6
        py-24
        md:px-12
        md:py-32
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            left-[-10%]
            top-[15%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-lime-400/[0.025]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            right-[-10%]
            bottom-[10%]
            h-[420px]
            w-[420px]
            rounded-full
            bg-lime-400/[0.02]
            blur-[150px]
          "
        />

        <motion.div
          className="
            absolute
            h-[260px]
            w-[260px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.025]
            blur-[100px]
          "
          animate={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            opacity: cursor.active ? 1 : 0,
          }}
          transition={{
            left: {
              duration: 0.3,
            },
            top: {
              duration: 0.3,
            },
            opacity: {
              duration: 0.4,
            },
          }}
        />
      </div>

      <div
        className="
          relative
          grid
          gap-12
          md:grid-cols-[180px_1fr]
          lg:grid-cols-[220px_1fr]
        "
      >
        {/* ===================================================
            SECTION NUMBER
        =================================================== */}

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p
            className="
              text-xs
              font-bold
              tracking-[0.25em]
              text-zinc-600
            "
          >
            03 — PROJECTS
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div>
          {/* HEADER */}

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <h2
              className="
                max-w-5xl
                text-[clamp(3.5rem,8vw,7rem)]
                font-black
                leading-[0.85]
                tracking-[-0.06em]
                text-white
              "
            >
              THINGS I'VE
              <br />

              <span className="text-lime-400">
                BUILT.
              </span>
            </h2>

            <p
              className="
                max-w-sm
                text-sm
                leading-relaxed
                text-zinc-500
                md:pb-2
                md:text-base
              "
            >
              Projects, experiments, and ideas turned
              into things that actually work.
            </p>
          </motion.div>

          {/* =================================================
              PROJECT LIST
          ================================================= */}

          <div className="mt-16">
            {projects.map((project) => (
              <motion.article
                key={project.number}
                variants={projectReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                onMouseEnter={() =>
                  setHoveredProject(
                    project.number,
                  )
                }
                onMouseLeave={() =>
                  setHoveredProject(null)
                }
                whileHover={{
                  y: -4,
                }}
                className="
                  group
                  border-t
                  border-zinc-800
                  py-10
                  transition-colors
                  duration-300
                  hover:border-zinc-500
                  md:py-14
                  last:border-b
                "
              >
                <div
                  className="
                    grid
                    gap-8
                    lg:grid-cols-[70px_1fr_300px]
                  "
                >
                  {/* NUMBER */}

                  <div>
                    <motion.p
                      className="
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-zinc-600
                        transition-colors
                        duration-300
                        group-hover:text-lime-500
                      "
                    >
                      {project.number}
                    </motion.p>
                  </div>

                  {/* CONTENT */}

                  <div>
                    {/* TYPE */}

                    <p
                      className="
                        mb-4
                        text-xs
                        font-bold
                        tracking-[0.22em]
                        text-zinc-600
                      "
                    >
                      {project.type}
                    </p>

                    {/* TITLE */}

                    <motion.h3
                      whileHover={{
                        x: 10,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="
                        inline-block
                        cursor-default
                        text-[clamp(3rem,7vw,6rem)]
                        font-black
                        leading-[0.85]
                        tracking-[-0.06em]
                        text-white
                      "
                    >
                      {project.title}
                    </motion.h3>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-8
                        max-w-2xl
                        text-base
                        leading-relaxed
                        text-zinc-500
                        md:text-lg
                      "
                    >
                      {project.description}
                    </p>

                    {/* TECH */}

                    <motion.div
                      variants={techContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      className="
                        mt-7
                        flex
                        flex-wrap
                        gap-2
                      "
                    >
                      {project.tech.map(
                        (technology) => (
                          <motion.span
                            key={technology}
                            variants={techItem}
                            whileHover={{
                              y: -3,
                              borderColor:
                                '#aaff00',
                            }}
                            className="
                              cursor-default
                              border
                              border-zinc-800
                              px-3
                              py-2
                              text-[10px]
                              font-bold
                              tracking-[0.12em]
                              text-zinc-500
                              transition-colors
                              duration-300
                              hover:text-lime-400
                            "
                          >
                            {technology}
                          </motion.span>
                        ),
                      )}
                    </motion.div>

                    {/* ACTION */}

                    <div className="mt-8">
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{
                            x: 5,
                          }}
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            tracking-[0.15em]
                            text-white
                            transition-colors
                            duration-300
                            hover:text-lime-400
                          "
                        >
                          VIEW ON GITHUB

                          <span
                            className="
                              inline-block
                              transition-transform
                              duration-300
                              group-hover/link:translate-x-1
                            "
                          >
                            →
                          </span>
                        </motion.a>
                      ) : (
                        <motion.a
                          href="#contact"
                          whileHover={{
                            x: 5,
                          }}
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            tracking-[0.15em]
                            text-white
                            transition-colors
                            duration-300
                            hover:text-lime-400
                          "
                        >
                          WANT TO KNOW MORE

                          <span
                            className="
                              inline-block
                              transition-transform
                              duration-300
                              group-hover/link:translate-x-1
                            "
                          >
                            →
                          </span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      VISUAL + STATUS
                  ================================================= */}

                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                    "
                  >
                    <ProjectVisual
                      project={project}
                    />

                    <div className="lg:text-right">
                      <motion.span
                        whileHover={{
                          scale: 1.04,
                        }}
                        className="
                          inline-block
                          border
                          border-zinc-800
                          px-3
                          py-2
                          text-[10px]
                          font-bold
                          tracking-[0.15em]
                          text-zinc-500
                        "
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================= */}

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              mt-12
              flex
              flex-col
              gap-4
              border-t
              border-zinc-800
              pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-xs
                font-bold
                tracking-[0.2em]
                text-zinc-600
              "
            >
              BUILD → BREAK → LEARN → REBUILD
            </p>

            <motion.p
              whileHover={{
                x: 5,
              }}
              className="
                cursor-default
                text-xs
                font-bold
                tracking-[0.2em]
                text-zinc-700
                transition-colors
                duration-300
                hover:text-lime-500
              "
            >
              MORE COMING SOON →
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          REDUCED MOTION
      ===================================================== */}

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

export default Projects