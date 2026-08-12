import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      number: '01',
      title: 'NOVA',
      type: 'PERSONAL AI ASSISTANT',
      description:
        'A modular, privacy-first personal AI assistant built with Python, featuring desktop automation, offline voice interaction, and local face authentication using YuNet and SFace.',
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
      github: 'https://github.com/nithinvihash/nova-ai-assistant',
    },
    {
      number: '02',
      title: 'WEBSUITER',
      type: 'FREELANCE DIGITAL STUDIO',
      description:
        'A freelance digital studio focused on creating modern websites and digital experiences for individuals, businesses, and growing brands.',
      tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
      status: 'BUILDING',
    },
  ]

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

  return (
    <section
      id="work"
      className="
        border-t
        border-zinc-200
        bg-white
        px-6
        py-24
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
        {/* =========================
            SECTION NUMBER
        ========================== */}

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p
            className="
              text-xs
              font-bold
              tracking-[0.25em]
              text-zinc-400
            "
          >
            03 — PROJECTS
          </p>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div>
          {/* HEADER */}

          <motion.div
            variants={sectionReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              Projects, experiments, and ideas turned into
              things that actually work.
            </p>
          </motion.div>

          {/* =========================
              PROJECT LIST
          ========================== */}

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
                whileHover={{
                  y: -4,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  border-t
                  border-zinc-200
                  py-10
                  transition-colors
                  duration-300
                  hover:border-black
                  md:py-14
                  last:border-b
                "
              >
                <div
                  className="
                    grid
                    gap-8
                    lg:grid-cols-[70px_1fr_180px]
                  "
                >
                  {/* NUMBER */}

                  <div>
                   <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="
    text-xs
    font-bold
    tracking-[0.2em]
    text-zinc-400
    transition-colors
    duration-300
    group-hover:text-lime-500
  "
>
  {project.number}
</motion.p>
                  </div>

                  {/* PROJECT CONTENT */}

                  <div>
                    {/* PROJECT TYPE */}

                    <p
                      className="
                        mb-4
                        text-xs
                        font-bold
                        tracking-[0.22em]
                        text-zinc-400
                      "
                    >
                      {project.type}
                    </p>

                    {/* PROJECT TITLE */}

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

                    {/* TECH STACK */}

                    <motion.div
                      variants={techContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{
                        once: true,
                        amount: 0.3,
                      }}
                      className="mt-7 flex flex-wrap gap-2"
                    >
                      {project.tech.map((technology) => (
                        <motion.span
                          key={technology}
                          variants={techItem}
                          whileHover={{
                            y: -3,
                            borderColor: '#000000',
                          }}
                          className="
                            cursor-default
                            border
                            border-zinc-200
                            px-3
                            py-2
                            text-[10px]
                            font-bold
                            tracking-[0.12em]
                            text-zinc-500
                          "
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* PROJECT ACTION */}

                    <div className="mt-8">
                      {project.github ? (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{
                            x: 5,
                          }}
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            tracking-[0.15em]
                            text-black
                            transition-colors
                            duration-300
                            hover:text-lime-500
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
                          transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 20,
                          }}
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            text-xs
                            font-bold
                            tracking-[0.15em]
                            text-black
                            transition-colors
                            duration-300
                            hover:text-lime-500
                          "
                        >
                          WANT TO KNOW MORE

                          <span
                            className="
                              inline-block
                              text-black
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

                  {/* STATUS */}

                  <div className="lg:text-right">
                    <motion.span
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="
                        inline-block
                        border
                        border-zinc-300
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
              </motion.article>
            ))}
          </div>

          {/* =========================
              BOTTOM STATEMENT
          ========================== */}

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
              border-zinc-200
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
                text-zinc-400
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
                text-zinc-300
              "
            >
              MORE COMING SOON →
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects