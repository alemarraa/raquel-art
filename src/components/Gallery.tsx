import { useState } from 'react'
import { artworks, type Artwork } from '../data/artwork'

export default function Gallery() {
  const [selected, setSelected] = useState<Artwork | null>(null)

  return (
    <section id="gallery" className="bg-void py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-crimson mb-3">Portfolio</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory">The Work</h2>
          <div className="w-10 h-px bg-crimson mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          {artworks.map((art, i) => (
            <button
              key={art.id}
              onClick={() => setSelected(art)}
              className={`group relative overflow-hidden bg-card text-left focus:outline-none ${
                i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
              style={{ aspectRatio: i === 0 ? '16/9' : '4/3' }}
            >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Sold badge — always visible, top-left */}
              {art.sold && (
                <span className="absolute top-3 left-3 bg-void/80 text-ivory/60 font-sans text-[10px] tracking-[0.2em] uppercase px-2 py-1 border border-ivory/10">
                  Sold
                </span>
              )}

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/60 transition-all duration-500 flex items-end p-5 opacity-0 group-hover:opacity-100">
                <div>
                  <p className="font-serif text-lg text-ivory">{art.title}</p>
                  <p className="font-sans text-xs text-muted mt-1">{art.medium}{art.year ? ` · ${art.year}` : ''}</p>
                  {art.sold && (
                    <span className="inline-block mt-2 text-xs text-ivory/50 tracking-[0.15em] uppercase">
                      Sold — Private Collection
                    </span>
                  )}
                  {art.available && (
                    <span className="inline-block mt-2 text-xs text-crimson border border-crimson px-2 py-0.5 tracking-wide">
                      Available
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-void/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-muted hover:text-ivory text-3xl leading-none"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            ×
          </button>
          <div
            className="flex flex-col lg:flex-row gap-10 max-w-5xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full lg:w-2/3">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full max-h-[70vh] object-contain"
              />
              {selected.sold && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-crimson opacity-40" />
              )}
            </div>
            <div className="flex flex-col justify-center lg:w-1/3">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-crimson mb-3">{selected.category}</p>
              <h3 className="font-serif text-3xl text-ivory mb-2">{selected.title}</h3>
              <p className="font-sans text-sm text-muted mb-1">{selected.medium}</p>
              {selected.year && <p className="font-sans text-xs text-dim mb-6">{selected.year}</p>}
              <p className="font-sans text-sm text-muted leading-relaxed mb-8">{selected.description}</p>
              {selected.sold ? (
                <div className="space-y-4">
                  <p className="font-sans text-xs text-ivory/40 tracking-[0.2em] uppercase">
                    Sold · Private Collection
                  </p>
                  <div className="border-t border-dim pt-4">
                    <p className="font-sans text-xs text-muted mb-3">Interested in a similar piece?</p>
                    <a
                      href="#custom"
                      onClick={() => setSelected(null)}
                      className="inline-block px-6 py-3 border border-crimson text-crimson text-xs tracking-[0.15em] uppercase hover:bg-crimson hover:text-ivory transition-all duration-300"
                    >
                      Commission a Custom Work
                    </a>
                  </div>
                </div>
              ) : selected.available ? (
                <div>
                  {selected.price && (
                    <p className="font-serif text-2xl text-ivory mb-4">${selected.price.toLocaleString()}</p>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className="inline-block px-6 py-3 bg-crimson text-ivory text-xs tracking-[0.15em] uppercase hover:bg-crimson/80 transition-colors"
                  >
                    Inquire to Purchase
                  </a>
                </div>
              ) : (
                <p className="font-sans text-xs text-dim tracking-wide uppercase">Private Collection</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
