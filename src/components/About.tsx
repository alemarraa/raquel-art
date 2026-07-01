import { asset } from '../utils/asset'

export default function About() {
  return (
    <section id="about" className="bg-surface py-24 px-6 lg:px-12 border-t border-dim">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Images */}
          <div className="relative">
            <img
              src={asset('/artist/studio-wide.png')}
              alt="Raquel in her studio"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            {/* Overlay red accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-crimson" />
            {/* Floating artwork thumbnail */}
            <div className="absolute -bottom-8 -right-4 w-32 h-32 lg:w-40 lg:h-40 overflow-hidden border-2 border-void shadow-2xl">
              <img
                src={asset('/artwork/dual-faces.png')}
                alt="Signature work — Duality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="pt-12 lg:pt-0">
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-crimson mb-3">The Artist</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">Raquel</h2>
            <div className="w-10 h-px bg-crimson mb-8" />

            <div className="space-y-5 font-sans text-sm text-muted leading-relaxed">
              <p>
                Raquel Alonso Gonzalez is a formally trained, multidisciplinary artist with over 30 years
                of practice across oil, charcoal, and hand-painted fabric. Her work spans surrealism,
                cubism, and classical figurative painting — united by a recurring fascination with female
                identity, duality, and the passage of time.
              </p>
              <p>
                Roman numerals, clocks, and hidden faces appear throughout her canvases — not as symbols
                to decode, but as invitations to look longer. Her largest oil, <em className="text-ivory/70">Duality</em>,
                has anchored her studio for years; visitors consistently describe it as the painting
                that stays with them.
              </p>
              <p>
                She also paints on garments and objects — turning everyday surfaces into one-of-a-kind
                wearable art. No two pieces are alike.
              </p>
            </div>

            {/* Education */}
            <div className="mt-8 space-y-4">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-crimson">Education</p>
              {[
                {
                  school: 'Federico Brandt Institute',
                  city: 'Caracas, Venezuela',
                  degree: 'Bachelor of Arts in Fine Arts',
                  years: '1992 – 1996',
                },
                {
                  school: 'Brivil Design Institute',
                  city: 'Caracas, Venezuela',
                  degree: 'Associate of Arts in Interior Design',
                  years: '1990 – 1992',
                },
              ].map(e => (
                <div key={e.school} className="flex gap-4 items-start">
                  <div className="w-px h-10 bg-crimson/30 shrink-0 mt-1" />
                  <div>
                    <p className="font-sans text-xs text-ivory">{e.school} <span className="text-dim">· {e.city}</span></p>
                    <p className="font-sans text-xs text-muted mt-0.5">{e.degree}</p>
                    <p className="font-sans text-xs text-dim mt-0.5">{e.years}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-dim pt-8">
              {[['30+', 'Years painting'], ['2', 'Fine arts degrees'], ['100%', 'Original, hand-painted']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-3xl text-ivory">{n}</p>
                  <p className="font-sans text-xs text-muted mt-1 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
