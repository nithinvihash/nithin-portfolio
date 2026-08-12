import { motion } from 'framer-motion'

function WebSuiter() {
  const services = [
    'LANDING PAGES',
    'BUSINESS WEBSITES',
    'PORTFOLIO WEBSITES',
    'RESPONSIVE EXPERIENCES',
  ]

  const reveal = {
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

  const serviceReveal = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <section
      id="websuiter"
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
            SECTION LABEL
        ========================== */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
        >
          <p
            className="
              sticky
              top-8
              text-xs
              font-bold
              tracking-[0.25em]
              text-zinc-400
            "
          >
            04 — WEBSUITER
          </p>
        </motion.div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div>

          {/* =========================
              INTRO
          ========================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="max-w-6xl"
          >
            <p
              className="
                mb-6
                text-xs
                font-bold
                tracking-[0.25em]
                text-zinc-400
              "
            >
              FREELANCE DIGITAL STUDIO
            </p>

            <h2
              className="
                text-[clamp(4rem,9vw,9rem)]
                font-black
                leading-[0.82]
                tracking-[-0.07em]
              "
            >
              WE BUILD
              <br />

              <motion.span
                className="inline-block text-lime-400"
                whileHover={{
                  x: 8,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                FOR THE WEB.
              </motion.span>
            </h2>
          </motion.div>

          {/* =========================
              MAIN STUDIO BLOCK
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-16
              grid
              overflow-hidden
              border
              border-black
              lg:grid-cols-[1.1fr_0.9fr]
            "
          >

            {/* =========================
                LEFT — STUDIO INTRO
            ========================== */}

            <motion.div
              whileHover={{
                backgroundColor: '#050505',
              }}
              className="
                bg-black
                p-7
                text-white
                md:p-10
                lg:p-14
              "
            >
              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="
                  max-w-2xl
                  text-base
                  leading-relaxed
                  text-zinc-400
                  md:text-lg
                "
              >
                WebSuiter is our freelance digital studio focused
                on building modern websites and digital experiences
                for individuals, businesses, and growing brands.
              </motion.p>

              {/* =========================
                  CTA BUTTONS
              ========================== */}

              <div className="mt-12 flex flex-col gap-3 sm:flex-row">

                {/* WORK WITH US */}

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
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-lime-400
                    bg-lime-400
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-black
                    transition-colors
                    duration-300
                    hover:border-white
                    hover:bg-white
                  "
                >
                  WORK WITH US

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

                {/* SEE OUR WORK */}

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
                    inline-flex
                    items-center
                    justify-center
                    border
                    border-white/20
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-white
                    transition-colors
                    duration-300
                    hover:border-white
                  "
                >
                  SEE OUR WORK

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

            {/* =========================
                RIGHT — SERVICES
            ========================== */}

            <div className="bg-lime-400 p-7 md:p-10 lg:p-14">

              <p
                className="
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  text-black/50
                "
              >
                WHAT WE DO
              </p>

              <div className="mt-8">

                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    custom={index}
                    variants={serviceReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    whileHover={{
                      x: 8,
                    }}
                    className="
                      group
                      flex
                      cursor-default
                      items-center
                      justify-between
                      border-t
                      border-black/15
                      py-5
                      last:border-b
                    "
                  >

                    <div className="flex items-center gap-4">

                      <span
                        className="
                          text-[10px]
                          font-bold
                          text-black/40
                        "
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="
                          text-sm
                          font-black
                          tracking-tight
                        "
                      >
                        {service}
                      </span>

                    </div>

                    <motion.span
                      className="text-lg"
                      whileHover={{
                        x: 5,
                        rotate: -5,
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      →
                    </motion.span>

                  </motion.div>
                ))}

              </div>
            </div>
          </motion.div>

          {/* =========================
              STUDIO STATEMENT
          ========================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            className="
              mt-12
              grid
              gap-8
              border-t
              border-zinc-200
              pt-6
              md:grid-cols-2
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
              WEBSUITER — DIGITAL EXPERIENCES,
              <br />
              BUILT BETTER.
            </p>

            <p
              className="
                max-w-lg
                text-sm
                leading-relaxed
                text-zinc-500
                md:ml-auto
              "
            >
              Simple ideas deserve thoughtful execution.
              We focus on clean interfaces, responsive layouts,
              and websites that actually serve a purpose.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default WebSuiter