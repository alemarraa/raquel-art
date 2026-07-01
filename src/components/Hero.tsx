import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3F0rtuqhVXOrvbhcD2uKbDzBqES/hf_20260630_215337_a7b04717-b597-4095-9430-7dc5a7135090.mp4'

const navLinks = [
  { label: 'Wander', href: '#gallery' },
  { label: 'Archive', href: '#available' },
  { label: 'Story', href: '#about' },
  { label: 'Connect', href: '#contact' },
]

function StaggeredFade({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <span ref={ref} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          transition={{ duration: 0.5, delay: i * 0.07 }}
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <section
      id="top"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', backgroundColor: '#010101' }}
    >
      {/* Video background */}
      <video
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Nav */}
      <nav className="relative z-20 flex items-center justify-between md:justify-center px-5 sm:px-8 pt-6 pb-2 md:gap-16">
        {/* Brand */}
        <span
          className="text-white font-light uppercase"
          style={{ letterSpacing: '0.25em', fontSize: '0.8rem' }}
        >
          <span className="hidden sm:inline" style={{ letterSpacing: '0.3em' }}>
            Organic Visions
          </span>
          <span className="sm:hidden">Organic Visions</span>
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-white/80 font-light uppercase hover:text-white transition-colors duration-300"
              style={{ letterSpacing: '0.2em', fontSize: '0.7rem' }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-16 left-4 right-4 z-50 md:hidden mobile-menu-glass rounded-2xl py-8 flex flex-col items-center gap-5"
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                className="text-white/90 font-light uppercase hover:text-white transition-colors"
                style={{ letterSpacing: '0.25em', fontSize: '0.75rem' }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center"
        style={{
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
          paddingTop: '3rem',
          height: 'calc(100vh - 5rem)',
        }}
      >
        {/* Heading */}
        <h1
          className="font-garamond font-normal text-white leading-none tracking-tight mb-6 sm:mb-8"
          style={{ lineHeight: 1.08 }}
        >
          <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            <StaggeredFade text="WITNESS THE" />
          </span>
          <span className="block text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            <StaggeredFade text="HIDDEN REALM" />
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-white/70 font-light leading-relaxed max-w-xs sm:max-w-md mb-8 sm:mb-10 text-sm sm:text-base lg:text-lg"
        >
          An odyssey through delicate living forms,
          <span className="hidden sm:inline"><br /></span>
          {' '}revealed by lens and curiosity.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#gallery"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="liquid-glass rounded-full text-white/90 uppercase"
          style={{
            paddingLeft: '1.75rem',
            paddingRight: '1.75rem',
            paddingTop: '0.875rem',
            paddingBottom: '0.875rem',
            letterSpacing: '0.18em',
            fontSize: '0.72rem',
            textDecoration: 'none',
          }}
        >
          Begin the Experience
        </motion.a>
      </div>
    </section>
  )
}
