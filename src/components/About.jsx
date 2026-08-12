import Reveal from './Reveal'

function About() {
  const facts = [
    '2ND YEAR — B.E CSE (AI/ML)',
    'PYTHON DEVELOPER',
    'WEB DEVELOPMENT',
    'FORGING → WEBSUITER',
  ]

  return (
    <section
      id="about"
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
                text-xs
                font-bold
                tracking-[0.25em]
                text-zinc-500
              "
            >
              01 — ABOUT
            </p>
          </div>
        </Reveal>

        {/* MAIN CONTENT */}

        <div className="max-w-6xl">

          {/* HEADING */}

          <Reveal>
            <h2
              className="
                max-w-5xl
                text-[clamp(3.5rem,8vw,8rem)]
                font-black
                leading-[0.86]
                tracking-[-0.065em]
              "
            >
              I LIKE TO BUILD
              <br />
              <span className="text-zinc-500">
                THINGS THAT ACTUALLY WORK.
              </span>
            </h2>
          </Reveal>

          {/* INTRO */}

          <div
            className="
              mt-16
              grid
              gap-14
              md:grid-cols-[1.2fr_0.8fr]
              md:gap-16
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
                    text-black
                    md:text-2xl
                  "
                >
                  I'm Nithin, a CSE (AI/ML) student and
                  developer who enjoys turning ideas into
                  practical software.
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
                  web experiences. I care about understanding
                  how things work, breaking them, and
                  improving them until they actually make
                  sense.
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
                  Right now, I'm building my skills through
                  real projects, experimenting with new
                  technologies, and developing WebSuiter
                  alongside my own tools and ideas.
                </p>

              </div>
            </Reveal>

            {/* CURRENTLY */}

            <Reveal delay={0.2} x={20}>
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
                <p
                  className="
                    mb-7
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-lime-400
                  "
                >
                  CURRENTLY
                </p>

                <div>
                 {facts.map((fact, index) => (
  <Reveal
    key={fact}
    delay={0.1 + index * 0.08}
    x={15}
  >
    <div
      className="
        group
        flex
        items-center
        justify-between
        border-b
        border-zinc-900
        py-4
      "
    >
      <p
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
        {fact}
      </p>

      <span
        className="
          translate-x-[-6px]
          text-lime-400
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
  </Reveal>
))}
                </div>
              </div>
            </Reveal>

          </div>

          {/* BUILDING PHILOSOPHY */}

          <Reveal delay={0.15}>
            <div
              className="
                mt-20
                border-t
                border-zinc-800
                pt-6
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-4
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
                    text-zinc-500
                  "
                >
                  HOW I BUILD
                </p>

                <p
                  className="
                    text-sm
                    font-bold
                    tracking-[0.12em]
                    text-black
                    md:text-base
                  "
                >
                  LEARN → BUILD → BREAK → IMPROVE
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default About