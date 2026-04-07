'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function MangaGrid() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.04 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {[15, 30, 45, 55, 70, 85].map((x) => (
        <line key={`v${x}`} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%" stroke="#e8e0d0" strokeWidth="1" />
      ))}
      {[20, 40, 60, 80].map((y) => (
        <line key={`h${y}`} x1="0" y1={`${y}%`} x2="100%" y2={`${y}%`} stroke="#e8e0d0" strokeWidth="1" />
      ))}
      <line x1="0" y1="100%" x2="40%" y2="0" stroke="#c41e1e" strokeWidth="0.5" />
      <line x1="100%" y1="0" x2="60%" y2="100%" stroke="#c41e1e" strokeWidth="0.5" />
    </svg>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  /*
   * Track how far we've scrolled through the hero section.
   * offset: ['start start', 'end start'] means:
   *   0 = section top touches viewport top
   *   1 = section bottom touches viewport top
   *
   * We move the background DOWN as we scroll out (positive Y),
   * which makes it lag behind the page — classic parallax.
   */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Background travels 35% of its own height over the scroll range
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen min-h-[600px] flex items-center justify-center"
      /* overflow: clip is like overflow: hidden but does NOT create a scroll
         container, so it won't interfere with the parallax transform. */
      style={{ overflow: 'clip' }}
    >
      {/* ── Parallax background ──
          Extend 20% beyond section on each axis so there's always
          image visible as the background translates downward. */}
      <motion.div
        style={{
          y: bgY,
          position: 'absolute',
          inset: '-20%',
          backgroundImage: 'url(/images/profile/image1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.28) contrast(1.15)',
        }}
      />

      {/* ── Manga grid ── */}
      <MangaGrid />

      {/* ── Radial vignette ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 10%, rgba(8,8,8,0.75) 80%, #080808 100%)',
        }}
      />

      {/* ── Edge fades ── */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#080808] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#080808] to-transparent" />

      {/* ── Red accent lines ── */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[22%] left-0 w-1/3 h-px bg-gradient-to-r from-[#c41e1e] to-transparent opacity-70"
      />
      <motion.div
        initial={{ scaleX: 0, originX: 1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[22%] right-0 w-1/3 h-px bg-gradient-to-l from-[#c41e1e] to-transparent opacity-70"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '1em' }}
          animate={{ opacity: 0.9, letterSpacing: '0.4em' }}
          transition={{ duration: 2, delay: 0.3 }}
          className="font-mono text-[10px] text-[#c41e1e] uppercase tracking-[0.4em] mb-10"
        >
          Tattoo Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-none tracking-tight text-[#e8e0d0] select-none"
          style={{
            fontSize: 'clamp(4.5rem, 18vw, 14rem)',
            textShadow: '0 0 120px rgba(196,30,30,0.25), 0 2px 40px rgba(0,0,0,0.8)',
          }}
        >
          nefi<span className="text-[#c41e1e]">.</span>ink
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.6, delay: 1.1 }}
          className="font-serif italic text-xl md:text-2xl text-[#e8e0d0] mt-5 tracking-[0.2em]"
        >
          by Ramon Néfi
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-px bg-[#c41e1e] mt-7 origin-left"
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex items-center gap-5 mt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-[#e8e0d0]"
        >
          <span>Anime</span>
          <span className="text-[#c41e1e] text-base">×</span>
          <span>Manga</span>
          <span className="text-[#c41e1e] text-base">×</span>
          <span>Blackwork</span>
        </motion.div>
      </div>

      {/* ── Vertical side text (desktop) ── */}
      <div className="absolute left-7 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c41e1e]" />
        <p className="vertical-text font-mono text-[9px] text-[#4a4540] uppercase tracking-[0.3em]">
          Art · Skin · Identity
        </p>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#c41e1e]" />
      </div>

      <div className="absolute right-7 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#c41e1e]" />
        <p
          className="vertical-text font-mono text-[9px] text-[#4a4540] uppercase tracking-[0.3em]"
          style={{ transform: 'rotate(180deg)' }}
        >
          nefi.ink — Ramon Néfi
        </p>
        <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#c41e1e]" />
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#4a4540] uppercase">Scroll</span>
        <div className="relative w-px h-14 overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-[#c41e1e] to-transparent"
          />
        </div>
      </motion.div>
    </section>
  )
}
