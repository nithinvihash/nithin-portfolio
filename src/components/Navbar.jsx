import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const desktopLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WEBSUITER', href: '#websuiter' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const mobileLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WEBSUITER', href: '#websuiter' },
    { label: 'CONTACT', href: '#contact' },
  ]

  const navContainer = {
    hidden: {
      opacity: 0,
      y: -20,
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

  const mobileMenu = {
    hidden: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
      transformOrigin: 'top',
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  }

  const mobileLink = {
    hidden: {
      opacity: 0,
      x: -10,
    },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.06,
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  return (
    <motion.nav
      variants={navContainer}
      initial="hidden"
      animate="visible"
      className="
        relative
        z-[100]
        flex
        items-center
        justify-between
        border-b
        border-zinc-200
        px-6
        py-6
        md:px-12
      "
    >
      {/* =========================
          LOGO
      ========================== */}

      <motion.a
        href="#home"
        onClick={closeMenu}
        whileHover={{
          opacity: 0.5,
          x: 2,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          relative
          z-[110]
          text-lg
          font-black
          tracking-[0.16em]
          text-black
          sm:text-xl
        "
      >
        NITHIN VIHASH MOHAN
      </motion.a>

      {/* =========================
          DESKTOP NAVIGATION
      ========================== */}

      <motion.div
        className="
          relative
          z-[110]
          hidden
          items-center
          gap-8
          text-xs
          font-bold
          tracking-[0.15em]
          md:flex
        "
      >
        {desktopLinks.map((link) => (
          <motion.a
            key={link.label}
            href={link.href}
            whileHover={{
              opacity: 0.5,
              y: -2,
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
            }}
            className="text-black"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>

      {/* =========================
          MOBILE MENU BUTTON
      ========================== */}

      <motion.button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="
          relative
          z-[110]
          flex
          h-10
          w-10
          items-center
          justify-center
          border
          border-black
          text-black
          md:hidden
        "
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-xl font-bold leading-none"
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{
                opacity: 0,
                rotate: 90,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotate: -90,
                scale: 0.7,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-lg font-bold leading-none"
            >
              ☰
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* =========================
          MOBILE NAVIGATION
      ========================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              absolute
              right-6
              top-full
              z-[105]
              mt-3
              w-52
              border
              border-black
              bg-white
              md:hidden
            "
          >
            <div
              className="
                flex
                flex-col
                divide-y
                divide-zinc-200
                text-xs
                font-bold
                tracking-[0.15em]
              "
            >
              {mobileLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  custom={index}
                  variants={mobileLink}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    paddingLeft: '28px',
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    px-5
                    py-4
                    text-black
                    transition-colors
                    duration-200
                    hover:bg-black
                    hover:text-white
                  "
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar