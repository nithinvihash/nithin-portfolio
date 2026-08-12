import Reveal from './Reveal'

function Skills() {
  const skillGroups = [
    {
      number: '01',
      title: 'LANGUAGES',
      skills: [
        'Python',
        'Java',
        'C',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SQL',
        'JSX',
      ],
    },
    {
      number: '02',
      title: 'FRONTEND',
     skills: [
  'React',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Responsive Web Design',
  'CSS Animations',
  'SVG',
  'Component Architecture',
],
    },
    {
      number: '03',
      title: 'AI / COMPUTER VISION',
      skills: [
        'OpenCV',
        'YuNet',
        'SFace',
        'Face Detection',
        'Face Recognition',
        'Vosk',
        'pyttsx3',
      ],
    },
    {
      number: '04',
      title: 'PYTHON / DEVELOPMENT',
      skills: [
        'unittest',
        'dataclasses',
        'logging',
        'Virtual Environments',
        'Plugin Architecture',
        'Command Routing',
        'Event-Driven Architecture',
      ],
    },
    {
      number: '05',
      title: 'DATABASES',
      skills: [
        'MySQL',
        'SQL',
        'Database Fundamentals',
      ],
    },
    {
      number: '06',
      title: 'TOOLS',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'npm',
        'pip',
        'Chrome DevTools',
        'Windows 11',
      ],
    },
    {
      number: '07',
      title: 'CONCEPTS',
      skills: [
        'OOP',
        'Modular Architecture',
        'Plugin Systems',
        'Event Bus',
        'Command Router',
        'Unit Testing',
        'Debugging',
        'Configuration Management',
        'Version Control',
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

  return (
    <section
      id="skills"
      className="
        border-t
        border-zinc-800
        px-6
        py-24
        md:px-12
        md:py-32
      "
    >
      <div
        className="
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
                text-zinc-500
              "
            >
              02 — SKILLS
            </p>
          </div>
        </Reveal>

        {/* CONTENT */}

        <div className="max-w-6xl">

          {/* HEADING */}

          <Reveal>
            <div>
              <h2
                className="
                  max-w-5xl
                  text-[clamp(3.5rem,8vw,8rem)]
                  font-black
                  leading-[0.86]
                  tracking-[-0.065em]
                "
              >
                WHAT I
                <br />
                <span className="text-zinc-500">
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
                Technologies, tools, and concepts I've used
                while building projects and experimenting with
                different ways of solving problems.
              </p>
            </div>
          </Reveal>

          {/* SKILL LIST */}

          <div className="mt-20">

            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.08}
                y={30}
              >
                <div
                  className="
                    border-t
                    border-zinc-800
                    py-8
                    md:py-10
                  "
                >
                  <div
                    className="
                      grid
                      gap-6
                      md:grid-cols-[120px_220px_1fr]
                      md:items-start
                    "
                  >
                    {/* NUMBER */}

                    <span
                      className="
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-zinc-700
                      "
                    >
                      {group.number}
                    </span>

                    {/* CATEGORY */}

                    <h3
                      className="
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-lime-400
                      "
                    >
                      {group.title}
                    </h3>

                    {/* SKILLS */}

                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-x-10
                        sm:grid-cols-2
                      "
                    >
                      {group.skills.map((skill) => (
                        <div
                          key={skill}
                          className="
                            group
                            flex
                            min-h-[42px]
                            items-center
                            justify-between
                            border-b
                            border-zinc-900
                            py-2
                            transition-colors
                            duration-200
                          "
                        >
                          <span
                            className="
                              text-sm
                              font-bold
                              text-black
                              transition-colors
                              duration-200
                              group-hover:text-lime-400
                              md:text-base
                            "
                          >
                            {skill}
                          </span>

                          <span
                            className="
                              translate-x-[-6px]
                              text-black
                              opacity-0
                              transition-all
                              duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-100
                            "
                          >
                            →
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <div className="border-t border-zinc-800" />
          </div>

          {/* CURRENTLY EXPLORING */}

          <Reveal delay={0.15}>
            <div className="mt-20">

              <div
                className="
                  flex
                  flex-col
                  gap-4
                  border-b
                  border-zinc-800
                  pb-6
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      font-bold
                      tracking-[0.2em]
                      text-lime-400
                    "
                  >
                    CURRENTLY EXPLORING
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-lg
                      text-sm
                      leading-relaxed
                      text-zinc-500
                    "
                  >
                    Technologies I'm actively learning and
                    working toward implementing in future
                    projects.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-7">
                {exploring.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-sm
                      font-bold
                      text-zinc-500
                      transition-colors
                      duration-200
                      hover:text-lime-400
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </Reveal>

          {/* BOTTOM STATEMENT */}

          <Reveal delay={0.15}>
            <div
              className="
                mt-20
                flex
                flex-col
                gap-2
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
                  text-xs
                  font-bold
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                ALWAYS LEARNING.
              </p>

              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.25em]
                  text-zinc-600
                "
              >
                ALWAYS BUILDING.
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Skills