import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { SiCss } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const skillGroups = [
  {
    number: '01',
    title: 'LANGUAGES',
    description:
      'Core languages I use to build software and web experiences.',
    skills: [
      {
        name: 'Python',
        logo: 'https://cdn.simpleicons.org/python',
      },
      {
        name: 'Java',
        logo: 'https://cdn.simpleicons.org/openjdk',
      },
      {
        name: 'C',
        logo: 'https://cdn.simpleicons.org/c',
      },
      {
        name: 'JavaScript',
        logo: 'https://cdn.simpleicons.org/javascript',
      },
      {
        name: 'HTML5',
        logo: 'https://cdn.simpleicons.org/html5',
      },
      {
        name: 'CSS',
        icon: SiCss,
      },
    ],
  },

  {
    number: '02',
    title: 'FRONTEND',
    description:
      'Tools I use to create modern, responsive interfaces.',
    skills: [
      {
        name: 'React',
        logo: 'https://cdn.simpleicons.org/react',
      },
      {
        name: 'Vite',
        logo: 'https://cdn.simpleicons.org/vite',
      },
      {
        name: 'Tailwind CSS',
        logo: 'https://cdn.simpleicons.org/tailwindcss',
      },
      {
        name: 'Framer Motion',
        logo: 'https://cdn.simpleicons.org/framer',
      },
    ],
  },

  {
    number: '03',
    title: 'AI / COMPUTER VISION',
    description:
      'Technologies explored through AI and computer vision projects.',
    skills: [
      {
        name: 'OpenCV',
        logo: 'https://cdn.simpleicons.org/opencv',
      },
    ],
  },

  {
    number: '04',
    title: 'DATABASES',
    description:
      'Database technology used for application development.',
    skills: [
      {
        name: 'MySQL',
        logo: 'https://cdn.simpleicons.org/mysql',
      },
    ],
  },

  {
    number: '05',
    title: 'TOOLS',
    description:
      'Tools that support my development workflow.',
    skills: [
      {
        name: 'Git',
        logo: 'https://cdn.simpleicons.org/git',
      },
      {
        name: 'GitHub',
        logo: 'https://cdn.simpleicons.org/github',
      },
      {
        name: 'VS Code',
        icon: VscVscode,
      },
      {
        name: 'npm',
        logo: 'https://cdn.simpleicons.org/npm',
      },
      {
        name: 'Chrome DevTools',
        logo: 'https://cdn.simpleicons.org/googlechrome',
      },
    ],
  },
]

const exploring = [
  'Machine Learning',
  'AI APIs',
  'LLMs',
  'RAG',
  'LangChain',
  'MLOps',
]

const particles = [
  { x: 8, y: 14, size: 2 },
  { x: 16, y: 34, size: 1 },
  { x: 23, y: 72, size: 2 },
  { x: 31, y: 21, size: 1 },
  { x: 38, y: 61, size: 2 },
  { x: 46, y: 13, size: 1 },
  { x: 53, y: 78, size: 2 },
  { x: 61, y: 31, size: 1 },
  { x: 68, y: 66, size: 2 },
  { x: 76, y: 18, size: 1 },
  { x: 83, y: 47, size: 2 },
  { x: 91, y: 27, size: 1 },
  { x: 95, y: 73, size: 2 },
  { x: 13, y: 88, size: 1 },
  { x: 43, y: 91, size: 1 },
  { x: 72, y: 89, size: 2 },
]

function Skills() {
  const skillsRef = useRef(null)
  const exploringRef = useRef(null)
  const animationFrame = useRef(null)

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    visible: false,
  })

  const [exploringMouse, setExploringMouse] = useState({
    x: 50,
    y: 50,
    visible: false,
  })

  const [isTouchDevice, setIsTouchDevice] = useState(false)

  /* =========================================================
     DETECT TOUCH DEVICES
  ========================================================== */

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: coarse)')

    setIsTouchDevice(mediaQuery.matches)

    const handleChange = (event) => {
      setIsTouchDevice(event.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  /* =========================================================
     MAIN SECTION CURSOR
  ========================================================== */

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (event) => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }

      animationFrame.current = requestAnimationFrame(() => {
        const section = skillsRef.current

        if (!section) return

        const rect = section.getBoundingClientRect()

        const inside =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom

        if (!inside) {
          setMouse((current) => ({
            ...current,
            visible: false,
          }))

          return
        }

        setMouse({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
          visible: true,
        })
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [isTouchDevice])

  /* =========================================================
     EXPLORING CURSOR
  ========================================================== */

  const handleExploringMove = (event) => {
    if (isTouchDevice) return

    const element = exploringRef.current

    if (!element) return

    const rect = element.getBoundingClientRect()

    setExploringMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
      visible: true,
    })
  }

  const handleExploringLeave = () => {
    setExploringMouse((current) => ({
      ...current,
      visible: false,
    }))
  }

  return (
    <section
      ref={skillsRef}
      id="skills"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-zinc-800
        bg-[#090a09]
        px-6
        py-24
        text-white
        md:px-12
        md:py-32
      "
    >
      {/* =====================================================
          PREMIUM INTERACTIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
        "
      >
        {/* Ambient glow */}

        <div
          className="
            absolute
            -left-32
            top-[-10%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-lime-400/[0.055]
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            -right-40
            top-[35%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-lime-300/[0.04]
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[-15%]
            left-[25%]
            h-[220px]
            w-[220px]
            rounded-full
            bg-emerald-400/[0.025]
            blur-[160px]
          "
        />

        {/* =================================================
            SMALLER MAIN CURSOR GLOW
        ================================================== */}

        <div
          className="
            absolute
            h-[160px]
            w-[160px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.075]
            blur-[75px]
            transition-[left,top,opacity]
            duration-400
            ease-out
          "
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            opacity: mouse.visible ? 1 : 0,
          }}
        />

        {/* Smaller cursor core */}

        <div
          className="
            absolute
            h-[90px]
            w-[90px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-300/[0.065]
            blur-[38px]
            transition-[left,top,opacity]
            duration-150
            ease-out
          "
          style={{
            left: `${mouse.x}%`,
            top: `${mouse.y}%`,
            opacity: mouse.visible ? 1 : 0,
          }}
        />

        {/* =================================================
            REACTIVE PARTICLES
        ================================================== */}

        {particles.map((particle, index) => {
          const dx = mouse.x - particle.x
          const dy = mouse.y - particle.y

          const distance = Math.sqrt(dx * dx + dy * dy)

          const influence = Math.max(
            0,
            1 - distance / 18,
          )

          const moveX =
            influence > 0
              ? -(dx / Math.max(distance, 1)) *
                influence *
                16
              : 0

          const moveY =
            influence > 0
              ? -(dy / Math.max(distance, 1)) *
                influence *
                16
              : 0

          return (
            <span
              key={index}
              className="
                absolute
                rounded-full
                bg-lime-300
                transition-all
                duration-300
                ease-out
              "
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: mouse.visible
                  ? 0.16 + influence * 0.7
                  : 0.14,
                transform: `
                  translate3d(
                    ${moveX}px,
                    ${moveY}px,
                    0
                  )
                  scale(${1 + influence * 2})
                `,
                boxShadow:
                  influence > 0
                    ? `0 0 ${
                        6 + influence * 14
                      }px rgba(190,255,60,${
                        influence * 0.45
                      })`
                    : 'none',
              }}
            />
          )
        })}
      </div>

      {/* =====================================================
          CONTENT
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
                sticky
                top-8
                text-xs
                font-bold
                tracking-[0.25em]
                text-zinc-600
              "
            >
              02 — SKILLS
            </p>
          </div>
        </Reveal>

        {/* MAIN CONTENT */}

        <div className="max-w-6xl">
          {/* =================================================
              HEADING
          ================================================== */}

          <Reveal>
            <div>
              <p
                className="
                  mb-6
                  text-[10px]
                  font-black
                  tracking-[0.3em]
                  text-lime-400
                "
              >
                MY TOOLKIT
              </p>

              <h2
                className="
                  max-w-5xl
                  text-[clamp(3.5rem,8vw,8rem)]
                  font-black
                  leading-[0.84]
                  tracking-[-0.07em]
                  text-white
                "
              >
                WHAT I
                <br />
                <span className="text-zinc-600">
                  WORK WITH.
                </span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-zinc-500
                  md:text-lg
                "
              >
                Technologies and tools I use to build
                practical software, AI experiments, and
                modern web experiences.
              </p>
            </div>
          </Reveal>

          {/* =================================================
              SKILL CATEGORIES
          ================================================== */}

          <div className="mt-24 space-y-24">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.08}
                y={30}
              >
                <div
                  className="
                    relative
                    border-t
                    border-zinc-800
                    pt-8
                  "
                >
                  {/* CATEGORY HEADER */}

                  <div
                    className="
                      mb-12
                      flex
                      flex-col
                      gap-5
                      sm:flex-row
                      sm:items-start
                      sm:justify-between
                    "
                  >
                    <div>
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            text-[10px]
                            font-black
                            tracking-[0.2em]
                            text-zinc-700
                          "
                        >
                          {group.number}
                        </span>

                        <h3
                          className="
                            text-xs
                            font-black
                            tracking-[0.22em]
                            text-lime-400
                          "
                        >
                          {group.title}
                        </h3>
                      </div>

                      <p
                        className="
                          mt-3
                          max-w-md
                          text-xs
                          leading-relaxed
                          text-zinc-600
                        "
                      >
                        {group.description}
                      </p>
                    </div>

                    <span
                      className="
                        self-start
                        rounded-full
                        border
                        border-zinc-800
                        bg-zinc-950/70
                        px-3
                        py-1.5
                        text-[9px]
                        font-black
                        tracking-[0.18em]
                        text-zinc-600
                      "
                    >
                      {String(group.skills.length).padStart(2, '0')}{' '}
                      {group.skills.length === 1
                        ? 'SKILL'
                        : 'SKILLS'}
                    </span>
                  </div>

                  {/* =================================================
                      SKILL LOGOS
                  ================================================== */}

                  <div
                    className="
                      grid
                      grid-cols-2
                      gap-x-4
                      gap-y-14
                      sm:grid-cols-3
                      md:grid-cols-4
                      lg:grid-cols-5
                      xl:grid-cols-6
                    "
                  >
                    {group.skills.map((skill) => {
                      const Icon = skill.icon

                      return (
                        <div
                          key={skill.name}
                          className="
                            group
                            flex
                            flex-col
                            items-center
                            text-center
                          "
                        >
                          <div className="relative">
                            {/* Hover aura */}

                            <div
                              className="
                                pointer-events-none
                                absolute
                                inset-[-16px]
                                rounded-full
                                bg-lime-400/[0.075]
                                opacity-0
                                blur-xl
                                transition-all
                                duration-500
                                group-hover:scale-125
                                group-hover:opacity-100
                              "
                            />

                            {/* Circle */}

                            <div
                              className="
                                relative
                                flex
                                h-24
                                w-24
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-zinc-800
                                bg-zinc-950/85
                                p-5
                                shadow-[0_20px_50px_rgba(0,0,0,0.25)]
                                backdrop-blur-xl
                                transition-all
                                duration-500
                                ease-out
                                group-hover:-translate-y-2
                                group-hover:border-lime-400/60
                                group-hover:bg-zinc-900
                                group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]
                                sm:h-28
                                sm:w-28
                                sm:p-6
                              "
                            >
                              {/* Inner ring */}

                              <div
                                className="
                                  pointer-events-none
                                  absolute
                                  inset-2
                                  rounded-full
                                  border
                                  border-zinc-800/70
                                  transition-colors
                                  duration-500
                                  group-hover:border-lime-400/20
                                "
                              />

                              {/* Image logo */}

                              {skill.logo && (
                                <img
                                  src={skill.logo}
                                  alt={skill.name}
                                  loading="lazy"
                                  className="
                                    relative
                                    z-10
                                    h-full
                                    w-full
                                    object-contain
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-110
                                  "
                                />
                              )}

                              {/* React icon */}

                              {Icon && (
                                <Icon
                                  aria-label={skill.name}
                                  className="
                                    relative
                                    z-10
                                    h-full
                                    w-full
                                    text-white
                                    transition-transform
                                    duration-500
                                    ease-out
                                    group-hover:scale-110
                                  "
                                />
                              )}
                            </div>
                          </div>

                          {/* Skill name */}

                          <span
                            className="
                              mt-5
                              max-w-[130px]
                              text-xs
                              font-bold
                              text-zinc-500
                              transition-all
                              duration-300
                              group-hover:-translate-y-0.5
                              group-hover:text-white
                            "
                          >
                            {skill.name}
                          </span>

                          {/* Lime indicator */}

                          <span
                            className="
                              mt-2
                              h-1
                              w-1
                              rounded-full
                              bg-lime-400
                              opacity-0
                              shadow-[0_0_10px_rgba(190,255,60,0.8)]
                              transition-all
                              duration-300
                              group-hover:opacity-100
                            "
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* =================================================
              CURRENTLY EXPLORING
          ================================================== */}

          <Reveal delay={0.15}>
            <div
              ref={exploringRef}
              onMouseMove={handleExploringMove}
              onMouseEnter={handleExploringMove}
              onMouseLeave={handleExploringLeave}
              className="
                group/exploring
                relative
                mt-32
                overflow-hidden
                rounded-[2px]
                border
                border-zinc-800
                bg-[#050605]
                p-7
                text-white
                shadow-[0_30px_100px_rgba(0,0,0,0.35)]
                md:p-10
              "
            >
              {/* =================================================
                  EXPLORING INTERACTIVE FIELD
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  overflow-hidden
                "
              >
                {/* Smaller spotlight */}

                <div
                  className="
                    absolute
                    h-[260px]
                    w-[260px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-lime-400/[0.075]
                    blur-[70px]
                    transition-[left,top,opacity]
                    duration-200
                    ease-out
                  "
                  style={{
                    left: `${exploringMouse.x}%`,
                    top: `${exploringMouse.y}%`,
                    opacity: exploringMouse.visible ? 1 : 0,
                  }}
                />

                {/* Small cursor core */}

                <div
                  className="
                    absolute
                    h-[80px]
                    w-[80px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-lime-300/[0.10]
                    blur-[32px]
                    transition-[left,top,opacity]
                    duration-100
                    ease-out
                  "
                  style={{
                    left: `${exploringMouse.x}%`,
                    top: `${exploringMouse.y}%`,
                    opacity: exploringMouse.visible ? 1 : 0,
                  }}
                />

                {/* Reactive particles */}

                {particles.map((particle, index) => {
                  const dx =
                    exploringMouse.x - particle.x

                  const dy =
                    exploringMouse.y - particle.y

                  const distance = Math.sqrt(
                    dx * dx + dy * dy,
                  )

                  const influence = Math.max(
                    0,
                    1 - distance / 24,
                  )

                  const moveX =
                    influence > 0
                      ? -(dx / Math.max(distance, 1)) *
                        influence *
                        28
                      : 0

                  const moveY =
                    influence > 0
                      ? -(dy / Math.max(distance, 1)) *
                        influence *
                        28
                      : 0

                  return (
                    <span
                      key={`exploring-${index}`}
                      className="
                        absolute
                        rounded-full
                        bg-lime-300
                        transition-all
                        duration-300
                        ease-out
                      "
                      style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size + 1}px`,
                        height: `${particle.size + 1}px`,
                        opacity:
                          0.12 + influence * 0.75,
                        transform: `
                          translate3d(
                            ${moveX}px,
                            ${moveY}px,
                            0
                          )
                          scale(${1 + influence * 2.5})
                        `,
                        boxShadow:
                          influence > 0
                            ? `0 0 ${
                                8 + influence * 18
                              }px rgba(190,255,60,${
                                influence * 0.55
                              })`
                            : 'none',
                      }}
                    />
                  )
                })}
              </div>

              {/* =================================================
                  CURSOR RING
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  z-[1]
                  h-14
                  w-14
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-lime-300/[0.15]
                  transition-[left,top,opacity,transform]
                  duration-150
                  ease-out
                "
                style={{
                  left: `${exploringMouse.x}%`,
                  top: `${exploringMouse.y}%`,
                  opacity: exploringMouse.visible ? 1 : 0,
                  transform: `
                    translate(-50%, -50%)
                    scale(${
                      exploringMouse.visible ? 1 : 0.6
                    })
                  `,
                }}
              />

              {/* =================================================
                  DECORATIVE FRAME
              ================================================== */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  right-6
                  top-6
                  h-10
                  w-10
                  border-r
                  border-t
                  border-lime-400/30
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  bottom-6
                  left-6
                  h-10
                  w-10
                  border-b
                  border-l
                  border-lime-400/20
                "
              />

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="relative z-10">
                <div
                  className="
                    flex
                    flex-col
                    gap-8
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  "
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-lime-400
                          shadow-[0_0_12px_rgba(190,255,60,0.8)]
                        "
                      />

                      <p
                        className="
                          text-[10px]
                          font-black
                          tracking-[0.25em]
                          text-lime-400
                        "
                      >
                        CURRENTLY EXPLORING
                      </p>
                    </div>

                    <h3
                      className="
                        mt-5
                        text-3xl
                        font-black
                        tracking-[-0.05em]
                        text-white
                        md:text-5xl
                      "
                    >
                      What's next.
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-lg
                        text-sm
                        leading-relaxed
                        text-zinc-500
                      "
                    >
                      Technologies I'm actively learning
                      and working toward implementing in
                      future projects.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-[9px]
                      font-bold
                      tracking-[0.2em]
                      text-zinc-600
                    "
                  >
                    <span
                      className="
                        h-1
                        w-1
                        rounded-full
                        bg-lime-400/70
                      "
                    />

                    NEXT → BUILD
                  </div>
                </div>

                {/* =================================================
                    EXPLORING PILLS
                ================================================== */}

                <div
                  className="
                    mt-12
                    flex
                    flex-wrap
                    gap-3
                  "
                >
                  {exploring.map((skill) => (
                    <span
                      key={skill}
                      className="
                        group/pill
                        relative
                        cursor-default
                        overflow-hidden
                        rounded-full
                        border
                        border-zinc-800
                        bg-zinc-950/80
                        px-5
                        py-3
                        text-xs
                        font-bold
                        text-zinc-400
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-lime-400/70
                        hover:bg-lime-400
                        hover:text-black
                        hover:shadow-[0_12px_35px_rgba(190,255,60,0.12)]
                      "
                    >
                      {/* Shine */}

                      <span
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          -translate-x-full
                          bg-gradient-to-r
                          from-transparent
                          via-white/20
                          to-transparent
                          transition-transform
                          duration-700
                          group-hover/pill:translate-x-full
                        "
                      />

                      <span className="relative z-10">
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>

                
              </div>
            </div>
          </Reveal>

          {/* =================================================
              BOTTOM STATEMENT
          ================================================== */}

          <Reveal delay={0.15}>
            <div
              className="
                mt-20
                flex
                flex-col
                gap-3
                border-t
                border-zinc-800
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <p
                className="
                  text-[10px]
                  font-black
                  tracking-[0.25em]
                  text-zinc-700
                "
              >
                ALWAYS LEARNING.
              </p>

              <p
                className="
                  text-[10px]
                  font-black
                  tracking-[0.25em]
                  text-zinc-700
                "
              >
                ALWAYS BUILDING.
              </p>
            </div>
          </Reveal>
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

export default Skills