const steps = [
  { n: '01', title: 'Share Your Vision', body: 'Tell me the size, subject, palette, and mood you have in mind. A reference image helps but is never required.' },
  { n: '02', title: 'Consultation', body: 'We discuss your vision in detail. I sketch initial concepts and we align on direction before any paint touches canvas.' },
  { n: '03', title: 'Creation', body: 'I work in stages and can share in-progress photos. Timelines vary by scale — typically 4–8 weeks for a finished oil.' },
  { n: '04', title: 'Delivery', body: 'Signed, varnished, and ready to hang. Shipped insured with a certificate of authenticity.' },
]

export default function Custom() {
  return (
    <section id="custom" className="bg-void py-24 px-6 lg:px-12 border-t border-dim">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text side */}
          <div>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-crimson mb-3">Commission</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">Custom Paintings</h2>
            <div className="w-10 h-px bg-crimson mb-8" />
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              A commissioned painting is one of the most personal gifts you can give — or receive. Every piece
              is painted entirely by hand, in oil, on stretched canvas.
            </p>
            <p className="font-sans text-sm text-muted leading-relaxed mb-12">
              Subjects range from portraits and family pets to abstract concepts and architectural scenes.
              If you can describe it, I can paint it.
            </p>

            <div className="space-y-8">
              {steps.map(s => (
                <div key={s.n} className="flex gap-5">
                  <span className="font-serif text-3xl text-crimson/30 leading-none shrink-0 w-8">{s.n}</span>
                  <div>
                    <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-ivory mb-1.5">{s.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Studio image */}
          <div className="relative">
            <img
              src="/artist/studio-close.png"
              alt="Artist at work"
              className="w-full object-cover"
              style={{ aspectRatio: '4/3' }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-crimson opacity-50" />
            <div className="mt-6 bg-card border border-dim p-6">
              <p className="font-sans text-xs tracking-[0.2em] uppercase text-crimson mb-2">Starting From</p>
              <p className="font-serif text-3xl text-ivory">$800</p>
              <p className="font-sans text-xs text-muted mt-1">Price varies by size, complexity, and timeline.</p>
              <a
                href="#contact"
                className="inline-block mt-5 px-6 py-3 bg-crimson text-ivory text-xs tracking-[0.15em] uppercase hover:bg-crimson/80 transition-colors"
              >
                Start a Commission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
