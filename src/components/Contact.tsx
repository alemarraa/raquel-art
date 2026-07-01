import { useState, type FormEvent } from 'react'

type Status = 'idle' | 'sending' | 'success' | 'error'

const subjects = [
  'Purchasing an available work',
  'Commissioning a custom painting',
  'General inquiry',
  'Press / collaboration',
]

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1dc59d8e-1288-473d-a557-21d7c8845ab3',
          subject: `Art inquiry — ${data.subject}`,
          from_name: 'Raquel Alonso Art',
          replyto: data.email,
          cc: '2022571147@txt.att.net',
          bcc: 'alessandro.marra@empowerestatesnet.com',
          name: data.name,
          email: data.email,
          message: data.message,
          subject_type: data.subject,
        }),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-void py-24 px-6 lg:px-12 border-t border-dim">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-crimson mb-3">Get in Touch</p>
          <h2 className="font-serif text-4xl lg:text-5xl text-ivory mb-6">Contact</h2>
          <div className="w-10 h-px bg-crimson mb-8" />
          <p className="font-sans text-sm text-muted leading-relaxed mb-10">
            Whether you're interested in an available painting, a custom commission, or simply want to
            learn more about the work — reach out. All inquiries are answered personally.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-crimson/40 shrink-0" />
              <p className="font-sans text-sm text-muted">Commissions typically have a 4–8 week timeline</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-crimson/40 shrink-0" />
              <p className="font-sans text-sm text-muted">All works ship insured with certificate of authenticity</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-crimson/40 shrink-0" />
              <p className="font-sans text-sm text-muted">Custom fabric painting available on request</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {status === 'success' ? (
            <div className="border border-crimson/30 bg-crimson/5 p-8">
              <p className="font-serif text-2xl text-ivory mb-2">Thank you.</p>
              <p className="font-sans text-sm text-muted">Your message has been received. I'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">Name</label>
                  <input
                    name="name"
                    required
                    type="text"
                    className="w-full bg-card border border-dim focus:border-crimson/50 text-ivory text-sm px-4 py-3 outline-none transition-colors font-sans"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">Email</label>
                  <input
                    name="email"
                    required
                    type="email"
                    className="w-full bg-card border border-dim focus:border-crimson/50 text-ivory text-sm px-4 py-3 outline-none transition-colors font-sans"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">Subject</label>
                <select
                  name="subject"
                  className="w-full bg-card border border-dim focus:border-crimson/50 text-ivory text-sm px-4 py-3 outline-none transition-colors font-sans"
                >
                  {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-card border border-dim focus:border-crimson/50 text-ivory text-sm px-4 py-3 outline-none transition-colors font-sans resize-none"
                  placeholder="Tell me what you're looking for..."
                />
              </div>

              {status === 'error' && (
                <p className="font-sans text-xs text-crimson">Something went wrong. Please try again or email directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3.5 bg-crimson text-ivory text-xs tracking-[0.2em] uppercase hover:bg-crimson/80 transition-colors disabled:opacity-50 font-sans"
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
