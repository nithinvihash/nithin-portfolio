import Reveal from './Reveal'

function Contact() {
  const contactLinks = [
    {
      label: 'EMAIL',
      value: 'nithinvihash@gmail.com',
      href: 'mailto:nithinvihash@gmail.com',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-none stroke-current stroke-[1.8]"
          aria-hidden="true"
        >
          <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
          <path d="m4 6 8 6 8-6" />
        </svg>
      ),
    },
    {
      label: 'GITHUB',
      value: '/nithinvihash',
      href: 'https://github.com/nithinvihash',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.56 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.3 3.1 1.16a10.75 10.75 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.04.76 2.1v3.11c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
        </svg>
      ),
    },
    {
      label: 'LINKEDIN',
      value: '/nithin-vihash-mohan',
      href: 'https://www.linkedin.com/in/nithin-vihash-mohan/',
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M5.1 3.75A2.25 2.25 0 1 1 5.1 8.25a2.25 2.25 0 0 1 0-4.5ZM3.25 9.75h3.7V21h-3.7V9.75ZM9.25 9.75h3.55v1.54h.05c.49-.93 1.7-1.91 3.5-1.91 3.74 0 4.43 2.46 4.43 5.66V21h-3.7v-5.29c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.38-2.03 2.79V21h-3.7V9.75Z" />
        </svg>
      ),
    },
  ]

  return (
    <section
      id="contact"
      className="
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
      <div
        className="
          grid
          gap-12
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
              05 — CONTACT
            </p>
          </div>
        </Reveal>

        {/* MAIN CONTENT */}

        <div className="max-w-6xl">

          {/* HEADING */}

          <Reveal>
            <div>
              <p
                className="
                  mb-6
                  text-xs
                  font-bold
                  tracking-[0.25em]
                  text-lime-400
                "
              >
                HAVE AN IDEA?
              </p>

              <h2
                className="
                  max-w-6xl
                  text-[clamp(3.8rem,9vw,9rem)]
                  font-black
                  leading-[0.82]
                  tracking-[-0.07em]
                "
              >
                LET'S BUILD
                <br />
                <span className="text-zinc-600">
                  SOMETHING.
                </span>
              </h2>

              <p
                className="
                  mt-10
                  max-w-xl
                  text-base
                  leading-relaxed
                  text-zinc-400
                  md:text-lg
                "
              >
                Whether you have a project in mind, want to
                collaborate, or just want to talk about tech —
                I'd love to hear from you.
              </p>
            </div>
          </Reveal>

          {/* CONTACT LINKS */}

          <div
            className="
              mt-14
              grid
              gap-3
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {contactLinks.map((contact, index) => (
              <Reveal
                key={contact.label}
                delay={index * 0.1}
                y={30}
              >
                <a
                  href={contact.href}
                  target={
                    contact.href.startsWith('http')
                      ? '_blank'
                      : undefined
                  }
                  rel={
                    contact.href.startsWith('http')
                      ? 'noreferrer'
                      : undefined
                  }
                  className="
                    group
                    flex
                    min-h-[140px]
                    flex-col
                    justify-between
                    border
                    border-zinc-800
                    bg-black
                    p-5
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-lime-400
                    md:p-6
                  "
                >
                  {/* ICON + LABEL */}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-white
                          transition-colors
                          duration-300
                          group-hover:text-lime-400
                        "
                      >
                        {contact.icon}
                      </span>

                      <span
                        className="
                          text-[10px]
                          font-bold
                          tracking-[0.2em]
                          text-zinc-500
                          transition-colors
                          duration-300
                          group-hover:text-zinc-300
                        "
                      >
                        {contact.label}
                      </span>
                    </div>

                    <span
                      className="
                        text-lg
                        text-white
                        transition-all
                        duration-300
                        group-hover:translate-x-1
                        group-hover:text-lime-400
                      "
                    >
                      →
                    </span>
                  </div>

                  {/* CONTACT VALUE */}

                  <span
                    className="
                      break-all
                      text-sm
                      font-bold
                      text-zinc-200
                      transition-colors
                      duration-300
                      group-hover:text-white
                      md:text-base
                    "
                  >
                    {contact.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* AVAILABILITY */}

          <Reveal delay={0.15}>
            <div
              className="
                mt-16
                grid
                gap-10
                border-t
                border-zinc-800
                pt-7
                md:grid-cols-2
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  CURRENTLY OPEN FOR
                </p>

                <div className="mt-5 space-y-3">
                  <p className="text-sm font-bold">
                    <span className="mr-3 text-lime-400">
                      →
                    </span>
                    FREELANCE PROJECTS
                  </p>

                  <p className="text-sm font-bold">
                    <span className="mr-3 text-lime-400">
                      →
                    </span>
                    INTERNSHIPS
                  </p>

                  <p className="text-sm font-bold">
                    <span className="mr-3 text-lime-400">
                      →
                    </span>
                    COLLABORATIONS
                  </p>
                </div>
              </div>

              <div className="md:text-right">
                <p
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  RESPONSE TIME
                </p>

                <p
                  className="
                    mt-5
                    text-sm
                    font-bold
                    text-zinc-300
                  "
                >
                  USUALLY WITHIN 24–48 HOURS.
                </p>
              </div>
            </div>
          </Reveal>

          {/* BOTTOM */}

          <Reveal delay={0.15}>
            <div
              className="
                mt-20
                border-t
                border-zinc-800
                pt-5
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-3
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
                  NITHIN VIHASH — CSE (AI/ML)
                </p>

                <p
                  className="
                    text-xs
                    font-bold
                    tracking-[0.2em]
                    text-zinc-700
                  "
                >
                  LET'S BUILD SOMETHING USEFUL.
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Contact