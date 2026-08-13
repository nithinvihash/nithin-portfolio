import { useEffect, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WebSuiter from './components/WebSuiter'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [progress, setProgress] = useState(0)
  const [loading, setLoading] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    let current = 0

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 1

      if (current >= 100) {
        current = 100
        clearInterval(interval)

        setProgress(100)

        // Give the 100% state a moment before revealing the site
        setTimeout(() => {
          setExiting(true)

          setTimeout(() => {
            setLoading(false)
          }, 700)
        }, 450)
      } else {
        setProgress(current)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [])

  /*
   * =========================================================
   * CYBERPUNK ENTRANCE LOADER
   * =========================================================
   */

  if (loading) {
    const circumference = 2 * Math.PI * 135
    const progressOffset =
      circumference - (progress / 100) * circumference

    return (
      <div
        className={`
          fixed
          inset-0
          z-[9999]
          flex
          items-center
          justify-center
          overflow-hidden
          bg-[#030303]
          text-white
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            exiting
              ? 'scale-[1.08] opacity-0'
              : 'scale-100 opacity-100'
          }
        `}
      >
        {/* =================================================
            BACKGROUND GRID
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

        {/* =================================================
            CENTRAL CYBER ATMOSPHERE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-400/[0.045]
            blur-[120px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[240px]
            w-[240px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-lime-300/[0.04]
            blur-[70px]
          "
        />

        {/* =================================================
            LOADER
        ================================================== */}

        <div
          className="
            relative
            flex
            h-[320px]
            w-[320px]
            items-center
            justify-center
          "
        >
          {/* Outer rotating ring */}

          <div
            className="
              absolute
              inset-[-18px]
              rounded-full
              border
              border-zinc-800
              border-t-lime-400
              border-r-lime-400/40
              animate-[spin_4s_linear_infinite]
            "
          />

          {/* Second rotating ring */}

          <div
            className="
              absolute
              inset-[-5px]
              rounded-full
              border
              border-zinc-900
              border-b-lime-300/60
              animate-[spin_7s_linear_infinite_reverse]
            "
          />

          {/* =================================================
              SVG PROGRESS RING
          ================================================== */}

          <svg
            className="
              absolute
              h-[300px]
              w-[300px]
              -rotate-90
            "
            viewBox="0 0 300 300"
          >
            {/* Background ring */}

            <circle
              cx="150"
              cy="150"
              r="135"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />

            {/* Progress ring */}

            <circle
              cx="150"
              cy="150"
              r="135"
              fill="none"
              stroke="#a3e635"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              style={{
                filter:
                  'drop-shadow(0 0 8px rgba(163,230,53,0.9)) drop-shadow(0 0 22px rgba(163,230,53,0.35))',
                transition:
                  'stroke-dashoffset 0.08s linear',
              }}
            />
          </svg>

          {/* =================================================
              INNER CIRCLE
          ================================================== */}

          <div
            className="
              absolute
              flex
              h-[215px]
              w-[215px]
              flex-col
              items-center
              justify-center
              rounded-full
              border
              border-zinc-800
              bg-[#050505]/90
              shadow-[0_0_80px_rgba(163,230,53,0.06)]
              backdrop-blur-xl
            "
          >
            {/* Percentage */}

            <div
              className="
                flex
                items-baseline
                leading-none
              "
            >
              <span
                className="
                  text-[4.8rem]
                  font-black
                  tracking-[-0.08em]
                  text-white
                  sm:text-[5.5rem]
                "
              >
                {progress}
              </span>

              <span
                className="
                  ml-1
                  text-xl
                  font-bold
                  text-lime-400
                "
              >
                %
              </span>
            </div>

            {/* Status */}

            <div
              className="
                mt-4
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5
                  animate-pulse
                  rounded-full
                  bg-lime-400
                  shadow-[0_0_8px_rgba(163,230,53,0.9)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  tracking-[0.28em]
                  text-zinc-500
                "
              >
                {progress < 30
                  ? 'INITIALIZING'
                  : progress < 60
                    ? 'LOADING SYSTEM'
                    : progress < 90
                      ? 'CALIBRATING'
                      : progress < 100
                        ? 'FINALIZING'
                        : 'SYSTEM READY'}
              </span>
            </div>
          </div>

          {/* =================================================
              MICRO MARKERS
          ================================================== */}

          <span
            className="
              absolute
              left-[12px]
              top-1/2
              h-1
              w-1
              -translate-y-1/2
              rounded-full
              bg-lime-400
              shadow-[0_0_8px_rgba(163,230,53,1)]
            "
          />

          <span
            className="
              absolute
              right-[12px]
              top-1/2
              h-1
              w-1
              -translate-y-1/2
              rounded-full
              bg-lime-400
              shadow-[0_0_8px_rgba(163,230,53,1)]
            "
          />

          <span
            className="
              absolute
              left-1/2
              top-[12px]
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-lime-400
              shadow-[0_0_8px_rgba(163,230,53,1)]
            "
          />

          <span
            className="
              absolute
              bottom-[12px]
              left-1/2
              h-1
              w-1
              -translate-x-1/2
              rounded-full
              bg-lime-400
              shadow-[0_0_8px_rgba(163,230,53,1)]
            "
          />
        </div>

        {/* =================================================
            TOP LEFT SYSTEM TEXT
        ================================================== */}

        <div
          className="
            absolute
            left-6
            top-6
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
            sm:left-10
            sm:top-10
          "
        >
          NITHIN VIHASH
        </div>

        {/* =================================================
            TOP RIGHT
        ================================================== */}

        <div
          className="
            absolute
            right-6
            top-6
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
            sm:right-10
            sm:top-10
          "
        >
          PORTFOLIO / 2026
        </div>

        {/* =================================================
            BOTTOM LEFT
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-6
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
            sm:bottom-10
            sm:left-10
          "
        >
          SYSTEM ONLINE
        </div>

        {/* =================================================
            BOTTOM RIGHT
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            right-6
            text-[9px]
            font-bold
            tracking-[0.25em]
            text-zinc-700
            sm:bottom-10
            sm:right-10
          "
        >
          BUILD → BREAK → IMPROVE
        </div>

        {/* =================================================
            CORNER MARKS
        ================================================== */}

        <div
          className="
            absolute
            left-4
            top-4
            h-8
            w-8
            border-l
            border-t
            border-lime-400/20
          "
        />

        <div
          className="
            absolute
            right-4
            top-4
            h-8
            w-8
            border-r
            border-t
            border-lime-400/20
          "
        />

        <div
          className="
            absolute
            bottom-4
            left-4
            h-8
            w-8
            border-b
            border-l
            border-lime-400/20
          "
        />

        <div
          className="
            absolute
            bottom-4
            right-4
            h-8
            w-8
            border-b
            border-r
            border-lime-400/20
          "
        />

        {/* =================================================
            REDUCED MOTION
        ================================================== */}

        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `}
        </style>
      </div>
    )
  }

  /*
   * =========================================================
   * MAIN PORTFOLIO
   * =========================================================
   */

  return (
    <>
      {/* HOME / HERO */}
      <div className="home-background">
        <Navbar />
        <Hero />
      </div>

      {/* REST OF PORTFOLIO */}
      <About />
      <Skills />
      <Projects />
      <WebSuiter />
      <Contact />
      <Footer />
    </>
  )
}

export default App