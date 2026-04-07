'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const TATTOOS = [
  '/tattoo/12.jpg', '/tattoo/13.jpg', '/tattoo/14.jpg',
  '/tattoo/15.jpg', '/tattoo/16.jpg', '/tattoo/17.jpg',
  '/tattoo/18.png', '/tattoo/19.png', '/tattoo/20.png',
  '/tattoo/21.jpg', '/tattoo/22.jpg', '/tattoo/23.jpg',
  '/tattoo/24.jpg', '/tattoo/25.jpg', '/tattoo/26.jpg',
]

/* ── Single portfolio card ─────────────────────────────────── */
function TattooCard({
  src,
  index,
  onClick,
}: {
  src: string
  index: number
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: (index % 6) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="masonry-item group relative overflow-hidden cursor-crosshair"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={`Tatuagem ${index + 1} por Ramon Néfi`}
        width={600}
        height={800}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        className="grayscale group-hover:grayscale-0 transition-all duration-600 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-400" />

      {/* View label */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#e8e0d0] uppercase border border-[#e8e0d0]/60 px-4 py-2">
          Ampliar
        </span>
      </div>

      {/* Bottom red line sweep */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c41e1e] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  )
}

/* ── Lightbox ──────────────────────────────────────────────── */
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    document.body.classList.add('lightbox-open')
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('lightbox-open')
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/96"
      onClick={onClose}
    >
      {/* Image container */}
      <motion.div
        key={index}
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-2xl w-full mx-8 max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Corner accents */}
        {[
          '-top-2 -left-2 border-t-2 border-l-2',
          '-top-2 -right-2 border-t-2 border-r-2',
          '-bottom-2 -left-2 border-b-2 border-l-2',
          '-bottom-2 -right-2 border-b-2 border-r-2',
        ].map((cls) => (
          <div key={cls} className={`absolute w-5 h-5 border-[#c41e1e] pointer-events-none ${cls}`} />
        ))}

        <Image
          src={images[index]}
          alt={`Tatuagem ${index + 1}`}
          width={800}
          height={900}
          style={{ width: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain' }}
          priority
        />

        {/* Counter */}
        <p className="absolute -bottom-8 left-0 font-mono text-[9px] text-[#4a4540] tracking-widest uppercase">
          {String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </p>
      </motion.div>

      {/* Close */}
      <button
        className="absolute top-6 right-8 font-mono text-xs text-[#7a7060] hover:text-[#c41e1e] transition-colors tracking-widest uppercase"
        onClick={onClose}
      >
        ✕ Fechar
      </button>

      {/* Prev / Next */}
      <button
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-4 text-[#7a7060] hover:text-[#c41e1e] transition-colors font-display text-2xl"
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-4 text-[#7a7060] hover:text-[#c41e1e] transition-colors font-display text-2xl"
        onClick={(e) => { e.stopPropagation(); onNext() }}
        aria-label="Próximo"
      >
        ›
      </button>
    </motion.div>
  )
}

/* ── Main section ──────────────────────────────────────────── */
export default function Portfolio() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(headerRef, { once: true, margin: '-60px' })

  const openLightbox  = useCallback((i: number) => setLightboxIndex(i), [])
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + TATTOOS.length) % TATTOOS.length)), [])
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % TATTOOS.length)), [])

  return (
    <section id="portfolio" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[9px] text-[#c41e1e] uppercase tracking-[0.4em]">
            Trabalhos
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-[#e8e0d0] mt-3 leading-tight">
            Portfólio
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-14 h-px bg-[#c41e1e] mx-auto mt-5 origin-left"
          />
          <p className="font-serif italic text-lg text-[#4a4540] mt-4">
            Cada traço, uma história permanente
          </p>
        </motion.div>

        {/* ── Masonry grid ── */}
        <div className="masonry">
          {TATTOOS.map((src, i) => (
            <TattooCard
              key={src}
              src={src}
              index={i}
              onClick={() => openLightbox(i)}
            />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={TATTOOS}
            index={lightboxIndex}
            onClose={closeLightbox}
            onPrev={prevImage}
            onNext={nextImage}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
