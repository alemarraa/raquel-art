export default function Footer() {
  return (
    <footer className="bg-surface border-t border-dim py-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-serif text-ivory text-lg">Raquel Alonso</span>
          <span className="text-crimson">·</span>
          <span className="font-sans text-xs text-muted">Original Fine Art</span>
        </div>
        <div className="flex gap-8">
          {['Gallery', 'Available', 'Custom', 'About', 'Contact'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="font-sans text-xs tracking-[0.12em] uppercase text-dim hover:text-muted transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <p className="font-sans text-xs text-dim">© {new Date().getFullYear()} Raquel Alonso Gonzalez. All rights reserved.</p>
      </div>
    </footer>
  )
}
