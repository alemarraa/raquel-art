import { useEffect, useRef } from 'react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const FADE_SECONDS = 1.2

    function tick() {
      if (!video) return
      const t = video.currentTime
      const dur = video.duration || 0

      if (dur > 0) {
        const fadeIn = Math.min(1, t / FADE_SECONDS)
        const fadeOut = dur - t < FADE_SECONDS ? Math.max(0, (dur - t) / FADE_SECONDS) : 1
        video.style.opacity = String(Math.min(fadeIn, fadeOut))
      }

      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section id="top" className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
      {/* Video */}
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-void/60 via-void/30 to-void/80 pointer-events-none" />

      {/* Red accent line at bottom — mirrors the real painting */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-crimson opacity-60" />

      {/* Hero text */}
      <div className="relative z-10 text-center px-6">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold mb-6 opacity-80">
          Original Works · Oil · Charcoal · Mixed Media
        </p>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-ivory leading-none tracking-tight">
          Raquel Alonso
        </h1>
        <div className="w-12 h-px bg-crimson mx-auto my-6" />
        <p className="font-sans text-sm tracking-[0.15em] text-muted max-w-xs mx-auto leading-relaxed">
          Surrealism · Cubism · Figurative
        </p>

        <a
          href="#gallery"
          className="inline-block mt-12 px-8 py-3 border border-ivory/30 text-ivory/80 text-xs tracking-[0.2em] uppercase hover:border-ivory hover:text-ivory transition-all duration-300"
        >
          View Work
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-ivory animate-pulse" />
      </div>
    </section>
  )
}
