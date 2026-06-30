import { artworks } from '../data/artwork'

export default function Available() {
  const soldWorks = artworks.filter(a => a.sold)

  return (
    <section id="available" className="bg-surface py-24 px-6 lg:px-12 border-t border-dim">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-crimson mb-3">Collect</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory">Past Sales</h2>
            <div className="w-10 h-px bg-crimson mt-5" />
            <p className="font-sans text-sm text-muted mt-6 max-w-xl leading-relaxed">
              Every original listed here has found a permanent home. To commission a new work in a similar
              style or subject, get in touch — each piece is created entirely from scratch.
            </p>
          </div>
          <a
            href="#custom"
            className="shrink-0 px-7 py-3.5 bg-crimson text-ivory text-xs tracking-[0.2em] uppercase hover:bg-crimson/80 transition-colors self-start lg:self-auto"
          >
            Commission a Painting
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {soldWorks.map(art => (
            <div key={art.id} className="group relative overflow-hidden bg-card">
              <div className="aspect-square overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Sold overlay on hover */}
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/50 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-ivory/60 border border-ivory/20 px-3 py-1.5">
                  Sold
                </span>
              </div>
              <div className="p-3 border-t border-dim">
                <p className="font-serif text-sm text-ivory truncate">{art.title}</p>
                <p className="font-sans text-[11px] text-dim mt-0.5">{art.year}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 border border-dim p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <p className="font-serif text-2xl text-ivory mb-2">Looking for something new?</p>
            <p className="font-sans text-sm text-muted">
              Raquel accepts a limited number of commissions each year. Original oils start at $800.
            </p>
          </div>
          <a
            href="#custom"
            className="shrink-0 px-8 py-4 border border-ivory/20 text-ivory text-xs tracking-[0.2em] uppercase hover:border-crimson hover:text-crimson transition-all duration-300"
          >
            Start a Commission →
          </a>
        </div>
      </div>
    </section>
  )
}
