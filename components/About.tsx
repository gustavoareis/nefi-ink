'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '8+',   label: 'Years of\nExperience' },
  { value: '500+', label: 'Projects\nCompleted'  },
  { value: '01',   label: 'Unique\nStyle' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden">

      {/* Diagonal cross-hatch background texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #c41e1e 0, #c41e1e 1px, transparent 0, transparent 50%), repeating-linear-gradient(-45deg, #c41e1e 0, #c41e1e 1px, transparent 0, transparent 50%)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Large ghost text */}
      <div
        className="absolute right-0 bottom-0 font-display text-[20vw] leading-none text-[#e8e0d0] select-none pointer-events-none"
        style={{ opacity: 0.018 }}
        aria-hidden
      >
        NÉFI
      </div>

      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

          {/* ── Photo side ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Outer frame */}
            <div className="absolute -inset-5 border border-[#c41e1e]/10 pointer-events-none" />
            <div className="absolute -inset-3 border border-[#c41e1e]/08 pointer-events-none" />

            {/* Corner brackets */}
            {[
              'top-0 left-0 border-t-2 border-l-2',
              'top-0 right-0 border-t-2 border-r-2',
              'bottom-0 left-0 border-b-2 border-l-2',
              'bottom-0 right-0 border-b-2 border-r-2',
            ].map((cls) => (
              <div
                key={cls}
                className={`absolute w-7 h-7 border-[#c41e1e] pointer-events-none ${cls}`}
              />
            ))}

            {/* Image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 11' }}>
              <Image
                src="/images/profile/image2.jpeg"
                alt="Ramon Néfi — Tattoo Artist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ filter: 'contrast(1.1) brightness(0.88)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
            </div>

            <p className="mt-3 font-mono text-[9px] text-[#4a4540] tracking-[0.3em] uppercase text-center">
              Ramon Néfi — Tattoo Artist
            </p>
          </motion.div>

          {/* ── Text side ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-8 h-px bg-[#c41e1e] origin-left"
              />
              <span className="font-mono text-[9px] text-[#c41e1e] uppercase tracking-[0.35em]">
                About the Artist
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl md:text-5xl text-[#e8e0d0] leading-tight mb-8">
              Art that lives
              <br />
              <em className="text-[#c41e1e] font-display not-italic">on skin</em>
            </h2>

            {/* Body */}
            <div className="space-y-5 font-serif text-lg text-[#7a7060] leading-relaxed">
              <p>
                Ramon Néfi is a tattoo artist specialized in{' '}
                <span className="text-[#e8e0d0] italic">anime, manga and Japanese blackwork</span>.
                With precise strokes and deep narrative sensitivity, each piece is a unique work — created to last a lifetime.
              </p>
              <p>
                Influenced by manga aesthetics and the Japanese{' '}
                <span className="text-[#e8e0d0] italic">tebori</span> tradition, his work
                transitions between delicate and intense, with an unmistakable identity.
              </p>
              <p>
                From concept to final stroke, each project is born from honest collaboration with
                the client — ensuring that the art reflects who you are.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-[#1a1a1a]">
              {stats.map(({ value, label }) => (
                <div key={value} className="text-center">
                  <span className="font-display text-3xl text-[#c41e1e] block">{value}</span>
                  <span
                    className="font-mono text-[9px] text-[#4a4540] uppercase tracking-wider leading-5 whitespace-pre-line"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
