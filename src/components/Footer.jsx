import Reveal from './Reveal'

function Footer() {
  return (
    <footer className="border-t border-zinc-800 px-6 py-8 md:px-12">
      <Reveal y={15}>
        <div
          className="
            flex
            flex-col
            gap-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* LOGO */}

          <a
            href="#home"
            className="
              text-sm
              font-bold
              tracking-[0.15em]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:text-lime-400
            "
          >
            NITHIN VIHASH
          </a>

          {/* STATEMENT */}

          <p
            className="
              text-xs
              font-bold
              tracking-[0.2em]
              text-zinc-600
            "
          >
            I BUILD. I BREAK. I BUILD BETTER.
          </p>

          {/* COPYRIGHT */}

          <p
            className="
              text-xs
              font-bold
              tracking-[0.15em]
              text-zinc-600
            "
          >
            © 2026
          </p>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer