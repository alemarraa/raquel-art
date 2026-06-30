import { useEffect, useState } from 'react'

const links = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Available', href: '#available' },
  { label: 'Custom', href: '#custom' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-void/95 backdrop-blur-sm border-b border-dim' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <a
          href="#top"
          className="font-serif text-ivory text-xl tracking-wide hover:text-gold transition-colors"
        >
          Raquel
          <span className="text-crimson ml-1">·</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-xs tracking-[0.18em] uppercase text-muted hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-crimson text-crimson text-xs tracking-[0.12em] uppercase hover:bg-crimson hover:text-ivory transition-all duration-300"
          >
            Inquire
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ivory p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <div className={`w-5 h-px bg-ivory mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-5 h-px bg-ivory mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-px bg-ivory transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-void border-t border-dim px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-sans text-xs tracking-[0.18em] uppercase text-muted hover:text-ivory transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-5 py-2.5 border border-crimson text-crimson text-xs tracking-[0.12em] uppercase text-center hover:bg-crimson hover:text-ivory transition-all"
          >
            Inquire
          </a>
        </div>
      )}
    </header>
  )
}
