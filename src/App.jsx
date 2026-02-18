import { useState, useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Wifi, Waves, Eye, Snowflake, Bath, PawPrint, Coffee,
  CircleParking, Home, Church, Castle, Footprints,
  Facebook, Instagram, X, ArrowUpRight, Minus, Plus
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ─── Images ───
import heroImg from './assets/foto/foto-1.webp'
import poolImg from './assets/foto/foto-7.webp'
import stairsImg from './assets/foto/foto-2.webp'
import entranceImg from './assets/foto/foto-3.webp'
import pondImg from './assets/foto/foto-5.webp'
import deluxeRoom1 from './assets/foto/foto-6.webp'
import deluxeRoom2 from './assets/foto/foto-19.webp'
import deluxeRoom3 from './assets/foto/foto-21.webp'
import deluxeBath from './assets/foto/foto-20.webp'
import queenRoom1 from './assets/foto/foto-10.webp'
import queenRoom2 from './assets/foto/foto-11.webp'
import queenRoom3 from './assets/foto/foto-16.webp'
import superiorRoom1 from './assets/foto/foto-17.webp'
import superiorRoom2 from './assets/foto/foto-18.webp'
import bath1 from './assets/foto/foto-8.webp'
import bath2 from './assets/foto/foto-9.webp'
import bath3 from './assets/foto/foto-14.webp'
import corridor1 from './assets/foto/foto-12.webp'
import corridor2 from './assets/foto/foto-15.webp'
import stoneEntryImg from './assets/foto/foto-4.webp'
import hallwayImg from './assets/foto/foto-13.webp'

// ─── Data ───
const rooms = [
  {
    name: 'Deluxe Room',
    tagline: 'Vista Mare + Terrazza',
    num: '01',
    description: 'Camera mansardata con travi a vista bianche, terrazza privata e vista mare. Un angolo di pace con ogni comfort, dotata anche di angolo cottura.',
    features: ['Terrazza privata', 'Vista mare', 'Travi a vista', 'Angolo cottura', 'Bagno con doccia', 'Aria condizionata', 'TV', 'Bollitore'],
    images: [deluxeRoom1, deluxeRoom2, deluxeRoom3, deluxeBath],
  },
  {
    name: 'Queen Room',
    tagline: 'Vista Mare',
    num: '02',
    description: 'Camera elegante con pavimento in ceramica turchese e splendida vista mare dalla finestra. Ambiente luminoso e accogliente con bagno privato.',
    features: ['Vista mare', 'Bagno con vasca', 'Aria condizionata', 'TV a schermo piatto', 'Armadio', 'Bollitore tè/caffè'],
    images: [queenRoom1, queenRoom2, queenRoom3, bath1],
  },
  {
    name: 'Superior Queen',
    tagline: 'Vista Piscina',
    num: '03',
    description: 'Camera spaziosa con vista sulla piscina e sulle colline circostanti. Un rifugio confortevole per il vostro soggiorno.',
    features: ['Vista piscina', 'Bagno privato', 'Aria condizionata', 'TV a schermo piatto', 'Armadio', 'Bollitore tè/caffè'],
    images: [superiorRoom1, superiorRoom2, bath2, bath3],
  },
]

const services = [
  { icon: Wifi, title: 'WiFi', desc: 'Tutta la struttura' },
  { icon: CircleParking, title: 'Parcheggio', desc: 'Privato · Gratuito' },
  { icon: Waves, title: 'Piscina', desc: 'Vista panoramica' },
  { icon: Eye, title: 'Vista Mare', desc: 'Golfo dei Poeti' },
  { icon: Snowflake, title: 'Clima', desc: 'A/C + Riscaldamento' },
  { icon: Bath, title: 'Bagno Privato', desc: 'Set cortesia' },
  { icon: PawPrint, title: 'Pet Friendly', desc: 'Su richiesta' },
  { icon: Coffee, title: 'Bollitore', desc: 'Tè · Caffè' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [lightbox, setLightbox] = useState({ open: false, img: '', alt: '' })
  const [expandedRoom, setExpandedRoom] = useState(0)
  const [formData, setFormData] = useState({
    nome: '', email: '', telefono: '', checkin: '', checkout: '', ospiti: '2', camera: '', messaggio: '', privacy: false
  })

  const lenisRef = useRef(null)
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -60 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [])

  // ─── Lenis ───
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wrapper: window,
      content: document.documentElement,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    const rafCb = (time) => { lenis.raf(time * 1000) }
    gsap.ticker.add(rafCb)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(rafCb)
      lenis.destroy()
    }
  }, [])

  // ─── Scroll listener ───
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // ─── GSAP Master Timeline ───
  useEffect(() => {
    const ctx = gsap.context(() => {

      // === HERO ===
      // Parallax on hero image
      gsap.to('.hero-visual', {
        yPercent: 25,
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        }
      })

      // Hero title - character reveal
      const heroH1 = document.querySelector('.hero-h1')
      if (heroH1) {
        const split = new SplitType(heroH1, { types: 'chars' })
        gsap.from(split.chars, {
          y: 140,
          rotateX: -80,
          opacity: 0,
          stagger: { each: 0.035, from: 'start' },
          duration: 1.4,
          ease: 'power4.out',
          delay: 0.3,
        })
      }

      // Hero subtitle words
      const heroSub = document.querySelector('.hero-sub')
      if (heroSub) {
        const splitSub = new SplitType(heroSub, { types: 'words' })
        gsap.from(splitSub.words, {
          y: 50,
          opacity: 0,
          stagger: 0.04,
          duration: 0.9,
          ease: 'power3.out',
          delay: 1.0,
        })
      }

      gsap.from('.hero-meta', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        delay: 1.5,
      })

      gsap.from('.hero-cta', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.8,
      })

      // Hero side image offset entrance
      gsap.from('.hero-side-img', {
        x: 120,
        opacity: 0,
        duration: 1.6,
        ease: 'power4.out',
        delay: 0.6,
      })

      // === STRUTTURA ===
      const strutturaTitle = document.querySelector('.struttura-title')
      if (strutturaTitle) {
        const splitStr = new SplitType(strutturaTitle, { types: 'lines,words' })
        gsap.from(splitStr.words, {
          y: 100,
          rotateZ: () => gsap.utils.random(-3, 3),
          opacity: 0,
          stagger: { each: 0.05 },
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: { trigger: strutturaTitle, start: 'top 80%' }
        })
      }

      gsap.from('.str-text-block', {
        x: -80,
        opacity: 0,
        duration: 1.3,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.str-text-block', start: 'top 82%' }
      })

      // Struttura images — each unique
      gsap.from('.str-img-hero', {
        clipPath: 'inset(100% 0% 0% 0%)',
        duration: 1.5,
        ease: 'power4.inOut',
        scrollTrigger: { trigger: '.str-img-hero', start: 'top 85%' }
      })
      gsap.set('.str-img-hero', { clipPath: 'inset(0% 0% 0% 0%)' })

      gsap.from('.str-img-float', {
        y: 100,
        rotation: -6,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.str-img-float', start: 'top 90%' }
      })

      gsap.from('.str-img-offset', {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.str-img-offset', start: 'top 85%' }
      })

      // === MARQUEE ===
      // Handled by CSS animation

      // === ROOMS ===
      const roomsTitle = document.querySelector('.rooms-title')
      if (roomsTitle) {
        const splitRooms = new SplitType(roomsTitle, { types: 'chars' })
        gsap.from(splitRooms.chars, {
          y: -80,
          opacity: 0,
          stagger: { each: 0.025, from: 'center' },
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: { trigger: roomsTitle, start: 'top 78%' }
        })
      }

      // === SERVICES ===
      const srvItems = gsap.utils.toArray('.srv-item')
      if (srvItems.length) {
        srvItems.forEach((item, i) => {
          gsap.from(item, {
            y: gsap.utils.random(20, 60),
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            delay: i * 0.06,
            scrollTrigger: { trigger: '.srv-grid', start: 'top 90%' }
          })
        })
      }

      // === TERRITORIO ===
      const terTitle = document.querySelector('.ter-title')
      if (terTitle) {
        const splitTer = new SplitType(terTitle, { types: 'words' })
        gsap.from(splitTer.words, {
          y: 60,
          opacity: 0,
          stagger: 0.07,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: { trigger: terTitle, start: 'top 80%' }
        })
      }

      const terCards = gsap.utils.toArray('.ter-card')
      terCards.forEach((card, i) => {
        const dir = i % 2 === 0 ? -1 : 1
        gsap.from(card, {
          x: dir * 140,
          y: 50,
          rotation: dir * 3,
          opacity: 0,
          duration: 1.3,
          ease: 'power4.out',
          scrollTrigger: { trigger: card, start: 'top 88%' }
        })
      })

      // === POSIZIONE ===
      gsap.from('.pos-map', {
        scale: 0.85,
        opacity: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.pos-map', start: 'top 85%' }
      })

      gsap.from('.pos-info', {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        scrollTrigger: { trigger: '.pos-info', start: 'top 80%' }
      })

      // === CONTATTI ===
      gsap.from('.contact-form-wrap', {
        y: 100,
        opacity: 0,
        duration: 1.3,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 80%' }
      })

      gsap.from('.contact-side', {
        x: 120,
        rotation: 2,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out',
        scrollTrigger: { trigger: '.contact-side', start: 'top 82%' }
      })

    })

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Prenotazione Innovation House - ${formData.nome}`)
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\nTelefono: ${formData.telefono}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nOspiti: ${formData.ospiti}\nCamera: ${formData.camera}\n\nMessaggio:\n${formData.messaggio}`
    )
    window.location.href = `mailto:info@innovationhouse.it?subject=${subject}&body=${body}`
  }

  const navLinks = [
    { label: 'Struttura', id: 'struttura' },
    { label: 'Camere', id: 'camere' },
    { label: 'Servizi', id: 'servizi' },
    { label: 'Territorio', id: 'territorio' },
    { label: 'Contatti', id: 'contatti' },
  ]

  return (
    <div className="noise-bg relative">

      {/* ═══ LIGHTBOX ═══ */}
      <AnimatePresence>
        {lightbox.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#0c0c0c]/95 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightbox({ open: false, img: '', alt: '' })}
          >
            <motion.img
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              src={lightbox.img}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <span className="absolute top-10 right-10 font-heading text-[10px] tracking-[0.5em] uppercase text-white/30 hover:text-white transition-colors cursor-pointer">Chiudi</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ NAV ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-[#0c0c0c]/80 backdrop-blur-2xl' : ''}`}>
        <div className="flex items-center justify-between h-14 md:h-16 px-6 md:px-10 lg:px-16">
          <button onClick={() => scrollTo('hero')} className="font-heading text-[11px] md:text-xs tracking-[0.5em] uppercase text-white/70 hover:text-white transition-colors">
            Innovation<br className="md:hidden" /> House
          </button>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((l) => (
              <button key={l.id} onClick={() => scrollTo(l.id)} className="font-body text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-[#c8956c] transition-colors duration-500">
                {l.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollTo('contatti')} className="hidden md:block font-heading text-[10px] tracking-[0.35em] uppercase text-[#c8956c] border border-[#c8956c]/30 px-7 py-3 hover:bg-[#c8956c] hover:text-[#0c0c0c] transition-all duration-500">
              Prenota
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-[5px]" aria-label="Menu">
              <span className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-7 rotate-45 translate-y-[3px]' : 'w-7'}`} />
              <span className={`block h-[1px] bg-white transition-all duration-500 ${menuOpen ? 'w-7 -rotate-45 -translate-y-[3px]' : 'w-4'}`} />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              className="lg:hidden fixed inset-0 top-20 bg-[#0c0c0c] z-40 flex flex-col justify-center px-10"
            >
              {navLinks.map((l, i) => (
                <motion.button
                  key={l.id}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => scrollTo(l.id)}
                  className="block text-left font-heading text-[clamp(2rem,8vw,4rem)] font-light text-white/80 hover:text-[#c8956c] hover:pl-4 transition-all duration-500 py-3"
                >
                  {l.label}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section id="hero" ref={heroRef} className="relative min-h-screen overflow-hidden">
        {/* Full background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Innovation House vista aerea" className="hero-visual w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c]/80 via-[#0c0c0c]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
        </div>

        {/* Content — pushed hard left, vertical offset */}
        <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-32">
          <div className="px-6 md:px-10 lg:px-16">
            <div className="max-w-[920px]">
              {/* Overline */}
              <p className="hero-meta font-body text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-[#c8956c]/80 mb-6 md:mb-10">
                Guest House · La Spezia
              </p>

              {/* Title — massive, tight */}
              <h1 className="hero-h1 font-heading text-[clamp(3.5rem,12vw,10rem)] font-bold text-white leading-[0.88] tracking-[-0.03em] mb-8 md:mb-12">
                Innovation<br />House
              </h1>

              {/* Subtitle — shifted right */}
              <p className="hero-sub font-body text-white/70 text-base md:text-lg leading-[1.8] max-w-md md:ml-[8vw] mb-12">
                Vista mare, piscina e il profumo della Liguria. La base per esplorare il Golfo dei Poeti.
              </p>

              {/* Meta row — uneven */}
              <div className="flex flex-wrap items-end gap-6 md:gap-12">
                <button onClick={() => scrollTo('contatti')} className="hero-cta group font-heading text-[10px] md:text-[11px] tracking-[0.4em] uppercase bg-[#c8956c] text-[#0c0c0c] px-8 md:px-10 py-4 md:py-5 hover:bg-white transition-colors duration-500 flex items-center gap-3">
                  Prenota
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <div className="hero-meta flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-white/20" />
                  <span className="font-heading text-[40px] md:text-[56px] font-bold text-white/20 leading-none">9.1</span>
                  <div>
                    <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/50 block">Superb</span>
                    <span className="font-body text-[9px] text-white/35">bedandbreakfast.eu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side image — overlapping, offset right — desktop only */}
          <div className="hero-side-img hidden lg:block absolute top-[18vh] right-[4vw] w-[28vw] max-w-[380px]">
            <img src={poolImg} alt="Piscina" className="w-full h-[45vh] object-cover cursor-pointer" onClick={() => setLightbox({ open: true, img: poolImg, alt: 'Piscina con vista' })} />
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40 mt-4 text-right">La piscina · Vista Golfo</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ MARQUEE ═══════════════════════ */}
      <div className="py-6 md:py-8 border-y border-white/[0.04] overflow-hidden bg-[#0c0c0c]">
        <div ref={marqueeRef} className="marquee-track flex items-center gap-8 md:gap-12 whitespace-nowrap w-max">
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex items-center gap-8 md:gap-12">
              {['Vista Mare', 'Piscina', 'Cinque Terre · 8 min', 'Parcheggio Gratuito', 'Golfo dei Poeti', '9.1/10 Superb', 'Pet Friendly'].map((t, i) => (
                <span key={`${rep}-${i}`} className="flex items-center gap-4 md:gap-6">
                  <span className="font-heading text-[11px] md:text-xs tracking-[0.3em] uppercase text-white/40">{t}</span>
                  <span className="w-1.5 h-1.5 bg-[#c8956c]/40 rotate-45" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ═══════════════════════ LA STRUTTURA ═══════════════════════ */}
      <section id="struttura" className="texture-dots relative py-32 md:py-48 overflow-hidden">
        <div className="px-6 md:px-10 lg:px-16">
          {/* Title — offset left, huge */}
          <div className="mb-20 md:mb-36 w-full">
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60 block mb-5">( 01 )</span>
            <h2 className="struttura-title font-heading text-[clamp(2.8rem,7vw,6.5rem)] font-bold text-white/90 leading-[0.92] tracking-[-0.02em]">
              Un rifugio tra<br />le colline di<br />La Spezia
            </h2>
          </div>

          {/* Broken layout — text left, images scattered right */}
          <div className="relative">
            {/* Text — narrow column */}
            <div className="str-text-block md:w-[42%] lg:w-[35%]">
              <p className="font-body text-white/65 text-[15px] md:text-base leading-[2] mb-8">
                Innovation House è una guest house situata in posizione collinare a La Spezia, con splendida vista sul mare e sulla piscina. La struttura offre un rifugio tranquillo e confortevole, ideale per esplorare le meraviglie del Golfo dei Poeti e delle Cinque Terre.
              </p>
              <p className="font-body text-white/50 text-sm leading-[2] mb-16">
                Immersa nel verde, tra ulivi e giardini fioriti, la casa vi accoglierà con il calore tipico dell&apos;ospitalità ligure.
              </p>

              {/* Facts — vertical, sparse */}
              <div className="space-y-6">
                {['Posizione panoramica con vista mare', 'Atmosfera rilassante', 'Base ideale per escursioni', 'Parcheggio privato gratuito'].map((t, i) => (
                  <div key={t} className="flex items-start gap-5 group">
                    <span className="font-heading text-[10px] text-[#c8956c]/40 mt-1">0{i + 1}</span>
                    <span className="font-body text-white/70 text-sm group-hover:text-white transition-colors duration-500">{t}</span>
                  </div>
                ))}
              </div>

              {/* Review block — dropped below */}
              <div className="mt-24 md:mt-32 border-l-2 border-[#c8956c]/30 pl-8">
                <span className="font-heading text-[4.5rem] font-bold text-[#c8956c]/20 leading-none block">9.1</span>
                <span className="font-heading text-white/70 text-lg font-light tracking-wide block mt-2">&ldquo;Superb&rdquo;</span>
                <span className="font-body text-white/40 text-[10px] tracking-[0.3em] uppercase block mt-3">Bedandbreakfast.eu · 10 recensioni</span>
              </div>
            </div>

            {/* Images — scattered across right side */}
            <div className="mt-16 md:mt-0 md:absolute md:top-[-8%] md:right-0 md:w-[54%] lg:w-[58%]">
              {/* Main image — large */}
              <div className="overflow-hidden">
                <img
                  src={stairsImg}
                  alt="Scalinata nel giardino"
                  className="str-img-hero w-full md:w-[80%] h-[350px] md:h-[520px] object-cover cursor-pointer hover:scale-[1.03] transition-transform duration-[1.2s]"
                  onClick={() => setLightbox({ open: true, img: stairsImg, alt: 'Scalinata nel giardino' })}
                />
              </div>

              {/* Float image — offset, overlapping */}
              <img
                src={entranceImg}
                alt="Ingresso"
                className="str-img-float w-[55%] md:w-[45%] h-[220px] md:h-[300px] object-cover absolute -bottom-8 md:bottom-auto md:top-[380px] right-0 md:right-[5%] shadow-2xl shadow-black/30 cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                onClick={() => setLightbox({ open: true, img: entranceImg, alt: 'Ingresso' })}
              />

              {/* Small offset image */}
              <img
                src={pondImg}
                alt="Giardino con laghetto koi"
                className="str-img-offset hidden md:block w-[35%] h-[200px] object-cover mt-20 ml-[15%] cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                onClick={() => setLightbox({ open: true, img: pondImg, alt: 'Giardino con laghetto koi' })}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ LE CAMERE ═══════════════════════ */}
      <section id="camere" className="texture-grain py-32 md:py-48 bg-[#111111] relative">
        {/* Large ghost number */}
        <div className="absolute top-16 right-6 md:right-16 font-heading text-[20vw] font-bold text-white/[0.015] leading-none select-none pointer-events-none">
          02
        </div>

        <div className="px-6 md:px-10 lg:px-16 w-full relative z-10">
          {/* Section label + title — right aligned */}
          <div className="md:text-right mb-16 md:mb-28">
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60">( 02 )</span>
            <h2 className="rooms-title font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white/90 leading-[0.95] mt-5 tracking-[-0.02em]">
              Le Camere
            </h2>
            <p className="font-body text-white/50 text-sm mt-6 md:ml-auto max-w-md leading-[1.9]">
              Bagno privato, aria condizionata, TV e WiFi gratuito in ogni camera
            </p>
          </div>

          {/* Rooms — accordion style, not cards */}
          <div className="space-y-0 border-t border-white/[0.06]">
            {rooms.map((room, idx) => (
              <div key={room.name} className="border-b border-white/[0.06]">
                {/* Header — clickable */}
                <button
                  onClick={() => setExpandedRoom(expandedRoom === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between py-7 md:py-10 group"
                >
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className="font-heading text-xs text-[#c8956c]/40">{room.num}</span>
                    <span className={`font-heading text-xl md:text-3xl font-light tracking-wide transition-colors duration-500 ${expandedRoom === idx ? 'text-[#c8956c]' : 'text-white/80 group-hover:text-white'}`}>
                      {room.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="hidden md:block font-body text-[10px] tracking-[0.2em] uppercase text-white/40">{room.tagline}</span>
                    {expandedRoom === idx ? (
                      <Minus className="w-4 h-4 text-[#c8956c]" strokeWidth={1} />
                    ) : (
                      <Plus className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" strokeWidth={1} />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedRoom === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-12 md:pb-16">
                        {/* Asymmetric layout for room content */}
                        <div className="grid grid-cols-12 gap-4 md:gap-6">
                          {/* Main image — large */}
                          <div className="col-span-12 md:col-span-7">
                            <img
                              src={room.images[0]}
                              alt={room.name}
                              className="w-full h-[280px] md:h-[450px] object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                              onClick={() => setLightbox({ open: true, img: room.images[0], alt: room.name })}
                            />
                          </div>

                          {/* Two smaller images — stacked, offset */}
                          <div className="col-span-6 md:col-span-2 md:mt-12">
                            <img
                              src={room.images[1]}
                              alt={`${room.name} 2`}
                              className="w-full h-[160px] md:h-[200px] object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                              onClick={() => setLightbox({ open: true, img: room.images[1], alt: room.name })}
                            />
                          </div>
                          <div className="col-span-6 md:col-span-3 md:-mt-4">
                            <img
                              src={room.images[2]}
                              alt={`${room.name} 3`}
                              className="w-full h-[160px] md:h-[200px] object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-700"
                              onClick={() => setLightbox({ open: true, img: room.images[2], alt: room.name })}
                            />
                          </div>

                          {/* Description — offset right */}
                          <div className="col-span-12 md:col-span-5 md:col-start-8 md:-mt-[180px] relative z-10">
                            <div className="bg-[#0c0c0c]/90 backdrop-blur-sm border border-white/[0.05] p-8 md:p-10">
                              <p className="font-body text-white/65 text-sm leading-[1.9] mb-8">{room.description}</p>
                              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                                {room.features.map((f) => (
                                  <div key={f} className="flex items-center gap-3">
                                    <span className="w-3 h-[1px] bg-[#c8956c]/50" />
                                    <span className="font-body text-white/70 text-xs">{f}</span>
                                  </div>
                                ))}
                              </div>
                              <button onClick={() => scrollTo('contatti')} className="font-heading text-[10px] tracking-[0.35em] uppercase text-[#c8956c] border border-[#c8956c]/30 px-8 py-4 hover:bg-[#c8956c] hover:text-[#0c0c0c] transition-all duration-500 flex items-center gap-3 group">
                                Richiedi Disponibilità
                                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Amenities — horizontal, sparse */}
          <div className="mt-20 md:mt-28 flex flex-wrap gap-x-6 md:gap-x-10 gap-y-2">
            {['Lenzuola', 'Asciugamani', 'Asciugacapelli', 'Set cortesia', 'Armadio', 'TV', 'A/C', 'WiFi'].map((item, i) => (
              <span key={item} className="font-body text-white/35 text-[10px] tracking-[0.2em] uppercase">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SERVIZI ═══════════════════════ */}
      <section id="servizi" className="texture-lines py-32 md:py-48 px-6 md:px-10 lg:px-16 relative overflow-hidden">
        {/* Huge background text */}
        <div className="absolute top-[20%] -right-[10%] font-heading text-[18vw] font-bold text-white/[0.015] leading-none select-none pointer-events-none -rotate-12">
          COMFORT
        </div>

        <div className="w-full relative z-10">
          {/* Title — asymmetric, left-pushed */}
          <div className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60 block mb-5">( 03 )</span>
              <h2 className="font-heading text-[clamp(2.5rem,5.5vw,5rem)] font-bold text-white/90 leading-[0.95] tracking-[-0.02em]">
                Tutto per il<br />vostro relax
              </h2>
            </div>
            <p className="font-body text-white/50 text-sm max-w-xs leading-[2] md:pb-2">
              Ogni servizio incluso. Nessun costo nascosto.
            </p>
          </div>

          {/* Services grid */}
          <div className="srv-grid grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/[0.04]">
            {services.map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="srv-item bg-[#0c0c0c] p-7 md:p-10 group hover:bg-[#151515] transition-all duration-700">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#c8956c]/60 group-hover:text-[#c8956c] mb-5 md:mb-8 transition-colors duration-500" strokeWidth={1.2} />
                  <h3 className="font-heading text-sm md:text-base text-white/80 group-hover:text-white font-medium mb-1 transition-colors duration-500">{s.title}</h3>
                  <p className="font-body text-[11px] text-white/45 group-hover:text-white/60 transition-colors duration-500">{s.desc}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-14 flex items-center gap-5">
            <div className="w-16 h-[1px] bg-white/[0.06]" />
            <p className="font-body text-[11px] text-white/45 tracking-[0.15em]">Lingue parlate: Italiano · English · Español</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ GALLERIA (Horizontal) ═══════════════════════ */}
      <section className="py-10 md:py-14 bg-[#080808] overflow-hidden">
        <div className="flex gap-4 md:gap-5 px-6 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}>
          {[
            { src: heroImg, alt: 'Vista aerea', h: 'h-[250px] md:h-[380px]', w: 'w-[320px] md:w-[480px]' },
            { src: stoneEntryImg, alt: 'Ingresso in pietra', h: 'h-[200px] md:h-[300px]', w: 'w-[220px] md:w-[340px]', mt: 'mt-10' },
            { src: corridor1, alt: 'Interni', h: 'h-[260px] md:h-[400px]', w: 'w-[280px] md:w-[420px]' },
            { src: hallwayImg, alt: 'Corridoio', h: 'h-[180px] md:h-[280px]', w: 'w-[200px] md:w-[300px]', mt: 'mt-16' },
            { src: deluxeRoom1, alt: 'Camera Deluxe', h: 'h-[240px] md:h-[360px]', w: 'w-[300px] md:w-[440px]' },
            { src: bath3, alt: 'Bagno con vasca', h: 'h-[200px] md:h-[300px]', w: 'w-[220px] md:w-[320px]', mt: 'mt-8' },
            { src: corridor2, alt: 'Interni', h: 'h-[230px] md:h-[350px]', w: 'w-[260px] md:w-[400px]' },
            { src: queenRoom1, alt: 'Camera Queen', h: 'h-[190px] md:h-[290px]', w: 'w-[240px] md:w-[360px]', mt: 'mt-12' },
          ].map((img, i) => (
            <div key={i} className={`flex-shrink-0 ${img.w} ${img.mt || ''} cursor-pointer group`} onClick={() => setLightbox({ open: true, img: img.src, alt: img.alt })}>
              <img src={img.src} alt={img.alt} className={`w-full ${img.h} object-cover group-hover:scale-[1.03] transition-transform duration-700`} />
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ POSIZIONE ═══════════════════════ */}
      <section id="posizione" className="texture-grid py-32 md:py-48 px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="mb-16 md:mb-24">
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60 block mb-5">( 04 )</span>
            <h2 className="font-heading text-[clamp(2rem,4.5vw,4rem)] font-bold text-white/90 leading-[0.95]">
              Dove siamo
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* Map — bleeds left, irregular */}
            <div className="pos-map col-span-12 md:col-span-7 -ml-6 md:-ml-10 lg:-ml-16">
              <div className="h-[350px] md:h-[550px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2862.5!2d9.8167!3d44.1067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDA2JzI0LjEiTiA5wrA0OSUyNzAwLjEiRQ!5e0!3m2!1sit!2sit!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.6) invert(0.92) contrast(1.1)', opacity: 0.7 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Posizione Innovation House"
                />
              </div>
            </div>

            {/* Info — right, offset down */}
            <div className="pos-info col-span-12 md:col-span-5 md:pt-24">
              <div className="space-y-0">
                {[
                  { place: 'Stazione La Spezia', dist: '5 km', note: 'Treni per Cinque Terre' },
                  { place: 'Porto traghetti', dist: '~6 km', note: 'Portovenere, Lerici' },
                  { place: 'Cinque Terre', dist: '8 min', note: 'In treno' },
                  { place: 'Portovenere', dist: '20 min', note: 'In auto' },
                  { place: 'Lerici', dist: '20 min', note: 'In auto' },
                  { place: 'Aeroporto Pisa', dist: '87 km', note: 'Galileo Galilei' },
                ].map((item) => (
                  <div key={item.place} className="flex items-baseline justify-between py-5 border-b border-white/[0.05] group hover:border-[#c8956c]/20 transition-colors">
                    <div>
                      <span className="font-heading text-sm font-medium text-white/75 group-hover:text-white transition-colors block">{item.place}</span>
                      <span className="font-body text-[10px] text-white/40 block mt-1">{item.note}</span>
                    </div>
                    <span className="font-heading text-sm font-bold text-[#c8956c]/60">{item.dist}</span>
                  </div>
                ))}
              </div>

              <div className="mt-14 border border-white/[0.04] p-8">
                <h4 className="font-heading text-xs font-medium text-white/65 mb-5 tracking-wide">Come raggiungerci</h4>
                <div className="space-y-3 font-body text-[13px] text-white/50 leading-[1.9]">
                  <p><span className="text-white/75">Auto:</span> Uscita A12 La Spezia — seguire per Pianello</p>
                  <p><span className="text-white/75">Treno:</span> La Spezia Centrale, poi taxi (5 km)</p>
                  <p><span className="text-white/75">Aereo:</span> Pisa (87 km) o Genova (100 km)</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <CircleParking className="w-4 h-4 text-[#c8956c]/50" strokeWidth={1.2} />
                  <span className="font-body text-[11px] text-[#c8956c]/60 tracking-wide">Parcheggio gratuito</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ TERRITORIO ═══════════════════════ */}
      <section id="territorio" className="texture-grain py-32 md:py-48 relative overflow-hidden">
        {/* Background texture — offset rectangle */}
        <div className="absolute top-[10%] left-[5%] w-[85%] h-[80%] bg-[#111111] -z-0" />

        <div className="px-6 md:px-10 lg:px-16 w-full relative z-10">
          <div className="mb-20 md:mb-36">
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60 block mb-5">( 05 )</span>
            <h2 className="ter-title font-heading text-[clamp(2.5rem,7vw,6.5rem)] font-bold text-white/90 leading-[0.92] tracking-[-0.02em] max-w-4xl">
              Il Golfo<br />dei Poeti
            </h2>
            <p className="font-body text-white/50 text-base max-w-lg leading-[2] mt-8 md:ml-[12vw]">
              Un territorio amato da Byron, Shelley, Montale e D&apos;Annunzio
            </p>
          </div>

          {/* Territory — broken grid, cards with photos */}
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <div className="ter-card col-span-12 md:col-span-7 border border-white/[0.05] hover:border-[#c8956c]/15 transition-all duration-700 bg-[#0c0c0c]/60 backdrop-blur-sm overflow-hidden">
              <div className="overflow-hidden cursor-pointer" onClick={() => setLightbox({ open: true, img: heroImg, alt: 'Cinque Terre' })}>
                <img src={heroImg} alt="Cinque Terre" className="w-full h-[200px] md:h-[260px] object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-14">
                <Home className="w-9 h-9 text-[#c8956c]/60" strokeWidth={1} />
                <h3 className="font-heading text-2xl md:text-4xl text-white/80 font-light mt-6 mb-2 tracking-wide">Cinque Terre</h3>
                <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c8956c]/50">Patrimonio UNESCO</span>
                <p className="font-body text-white/55 text-sm leading-[2] mt-6 max-w-lg">
                  Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore — cinque borghi colorati a picco sul mare. Raggiungibili in treno (8 min) o battello.
                </p>
              </div>
            </div>

            <div className="ter-card col-span-12 md:col-span-5 md:mt-20 border border-white/[0.05] hover:border-[#c8956c]/15 transition-all duration-700 bg-[#0c0c0c]/60 backdrop-blur-sm overflow-hidden">
              <div className="overflow-hidden cursor-pointer" onClick={() => setLightbox({ open: true, img: stoneEntryImg, alt: 'Portovenere' })}>
                <img src={stoneEntryImg} alt="Portovenere" className="w-full h-[180px] md:h-[220px] object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12">
                <Church className="w-8 h-8 text-[#c8956c]/60" strokeWidth={1} />
                <h3 className="font-heading text-xl md:text-2xl text-white/80 font-light mt-6 mb-2">Portovenere</h3>
                <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c8956c]/50">Patrimonio UNESCO</span>
                <p className="font-body text-white/55 text-sm leading-[2] mt-6">
                  Borgo medievale con la chiesa di San Pietro. Isole Palmaria, Tino e Tinetto.
                </p>
              </div>
            </div>

            <div className="ter-card col-span-12 md:col-span-5 md:-mt-12 border border-white/[0.05] hover:border-[#c8956c]/15 transition-all duration-700 bg-[#0c0c0c]/60 backdrop-blur-sm overflow-hidden">
              <div className="overflow-hidden cursor-pointer" onClick={() => setLightbox({ open: true, img: stairsImg, alt: 'Lerici e Tellaro' })}>
                <img src={stairsImg} alt="Lerici e Tellaro" className="w-full h-[180px] md:h-[220px] object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-12">
                <Castle className="w-8 h-8 text-[#c8956c]/60" strokeWidth={1} />
                <h3 className="font-heading text-xl md:text-2xl text-white/80 font-light mt-6 mb-2">Lerici e Tellaro</h3>
                <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c8956c]/50">Borghi pittoreschi</span>
                <p className="font-body text-white/55 text-sm leading-[2] mt-6">
                  Castello di Lerici, borghi amati da Byron e Shelley. Spiagge e tramonti mozzafiato.
                </p>
              </div>
            </div>

            <div className="ter-card col-span-12 md:col-span-7 border border-white/[0.05] hover:border-[#c8956c]/15 transition-all duration-700 bg-[#0c0c0c]/60 backdrop-blur-sm overflow-hidden">
              <div className="overflow-hidden cursor-pointer" onClick={() => setLightbox({ open: true, img: pondImg, alt: 'Escursioni' })}>
                <img src={pondImg} alt="Escursioni nella natura" className="w-full h-[200px] md:h-[260px] object-cover hover:scale-[1.05] transition-transform duration-700" />
              </div>
              <div className="p-8 md:p-14">
                <Footprints className="w-9 h-9 text-[#c8956c]/60" strokeWidth={1} />
                <h3 className="font-heading text-2xl md:text-3xl text-white/80 font-light mt-6 mb-2 tracking-wide">Escursioni</h3>
                <span className="font-body text-[9px] tracking-[0.4em] uppercase text-[#c8956c]/50">Trekking e natura</span>
                <p className="font-body text-white/55 text-sm leading-[2] mt-6 max-w-lg">
                  Sentiero Azzurro, Via dell&apos;Amore, Alta Via del Golfo. Trekking nel Parco Nazionale delle Cinque Terre.
                </p>
              </div>
            </div>
          </div>

          {/* La Spezia spots — scattered horizontal */}
          <div className="mt-24 md:mt-32 border-t border-white/[0.04] pt-10">
            <h3 className="font-heading text-base text-white/60 font-light mb-6 tracking-wide">La Spezia</h3>
            <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3">
              {['Museo Amedeo Lia', 'Museo Tecnico Navale', 'Castello San Giorgio', 'CAMEC', 'Museo del Sigillo', 'Passeggiata Morin', 'Via del Prione', 'Arsenale Militare'].map((p) => (
                <span key={p} className="font-body text-white/40 text-[11px] tracking-[0.1em] hover:text-white/65 transition-colors duration-500 cursor-default">{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTATTI ═══════════════════════ */}
      <section id="contatti" className="texture-dots py-32 md:py-48 px-6 md:px-10 lg:px-16">
        <div className="w-full">
          <div className="mb-16 md:mb-28">
            <span className="font-body text-[10px] tracking-[0.6em] uppercase text-[#c8956c]/60 block mb-5">( 06 )</span>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white/90 leading-[0.95] tracking-[-0.02em] max-w-3xl">
              Prenota il tuo soggiorno
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-8 md:gap-16">
            {/* Form — wide */}
            <div className="contact-form-wrap col-span-12 lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid md:grid-cols-2 gap-7">
                  <div>
                    <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Nome *</label>
                    <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 placeholder:text-white/10 text-sm" placeholder="Il tuo nome" />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 placeholder:text-white/10 text-sm" placeholder="la-tua@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Telefono</label>
                  <input type="tel" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 placeholder:text-white/10 text-sm" placeholder="+39 ..." />
                </div>

                <div className="grid grid-cols-3 gap-7">
                  <div>
                    <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Check-in *</label>
                    <input type="date" required value={formData.checkin} onChange={(e) => setFormData({ ...formData, checkin: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 text-sm" />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Check-out *</label>
                    <input type="date" required value={formData.checkout} onChange={(e) => setFormData({ ...formData, checkout: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 text-sm" />
                  </div>
                  <div>
                    <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Ospiti</label>
                    <select value={formData.ospiti} onChange={(e) => setFormData({ ...formData, ospiti: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 text-sm">
                      <option value="1" className="bg-[#0c0c0c]">1</option>
                      <option value="2" className="bg-[#0c0c0c]">2</option>
                      <option value="3" className="bg-[#0c0c0c]">3</option>
                      <option value="4" className="bg-[#0c0c0c]">4</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Camera</label>
                  <select value={formData.camera} onChange={(e) => setFormData({ ...formData, camera: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 text-sm">
                    <option value="" className="bg-[#0c0c0c]">Seleziona</option>
                    <option value="Deluxe Room" className="bg-[#0c0c0c]">Deluxe Room — Vista Mare + Terrazza</option>
                    <option value="Queen Room" className="bg-[#0c0c0c]">Queen Room — Vista Mare</option>
                    <option value="Superior Queen Room" className="bg-[#0c0c0c]">Superior Queen Room — Vista Piscina</option>
                  </select>
                </div>

                <div>
                  <label className="block font-heading text-[10px] tracking-[0.2em] uppercase text-white/55 mb-3">Richieste</label>
                  <textarea rows={3} value={formData.messaggio} onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })} className="w-full px-0 py-4 bg-transparent border-0 border-b border-white/10 focus:border-[#c8956c] outline-none transition-colors duration-500 font-body text-white/80 placeholder:text-white/10 resize-none text-sm" placeholder="Animali, orario di arrivo, richieste particolari..." />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input type="checkbox" required checked={formData.privacy} onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })} className="mt-1 w-4 h-4 accent-[#c8956c] bg-transparent border border-white/20" />
                  <label className="font-body text-[11px] text-white/50 leading-relaxed">
                    Acconsento al trattamento dei dati personali ai sensi del GDPR. *
                  </label>
                </div>

                <button type="submit" className="font-heading text-[10px] tracking-[0.4em] uppercase px-12 py-5 bg-[#c8956c] text-[#0c0c0c] hover:bg-white transition-colors duration-500 flex items-center gap-3 group w-full md:w-auto justify-center">
                  Invia Richiesta
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact sidebar — offset, different rhythm */}
            <div className="contact-side col-span-12 lg:col-span-4 lg:col-start-9 space-y-10 lg:pt-12">
              <div>
                <h3 className="font-heading text-[10px] tracking-[0.35em] uppercase text-white/55 mb-6">Indirizzo</h3>
                <p className="font-body text-white/65 text-sm leading-[2]">
                  Salita del Pianello, 12<br />
                  19131 La Spezia (SP)<br /><br />
                  <a href="mailto:info@innovationhouse.it" className="text-[#c8956c]/60 hover:text-[#c8956c] transition-colors">info@innovationhouse.it</a>
                </p>
              </div>

              <div>
                <h3 className="font-heading text-[10px] tracking-[0.35em] uppercase text-white/55 mb-6">Politiche</h3>
                <div className="space-y-4">
                  {[
                    { l: 'Check-in', v: '15:00 — 18:00' },
                    { l: 'Check-out', v: '09:00 — 10:00' },
                    { l: 'Età minima', v: '18 anni' },
                    { l: 'Bambini', v: 'Benvenuti' },
                    { l: 'Animali', v: 'Su richiesta' },
                    { l: 'Pagamento', v: 'Contanti' },
                    { l: 'Feste', v: 'Non ammesse' },
                  ].map((p) => (
                    <div key={p.l} className="flex justify-between border-b border-white/[0.04] pb-3">
                      <span className="font-body text-[11px] text-white/45">{p.l}</span>
                      <span className="font-body text-[11px] text-white/70 font-medium">{p.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#c8956c]/15 p-8">
                <p className="font-heading text-white/75 text-sm font-light tracking-wide leading-relaxed">
                  Prenotazione diretta<br />
                  <span className="text-[#c8956c]">= Miglior tariffa garantita</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer className="texture-lines bg-[#060606] text-white py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="w-full">
          {/* Top — large name, asymmetric */}
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h3 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold text-white/10 leading-[0.95]">
              Innovation<br />House
            </h3>
            <div className="flex gap-6">
              <a href="#" aria-label="Facebook" className="w-10 h-10 border border-white/[0.06] flex items-center justify-center text-white/15 hover:text-[#c8956c] hover:border-[#c8956c]/30 transition-all duration-500">
                <Facebook className="w-4 h-4" strokeWidth={1.2} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 border border-white/[0.06] flex items-center justify-center text-white/15 hover:text-[#c8956c] hover:border-[#c8956c]/30 transition-all duration-500">
                <Instagram className="w-4 h-4" strokeWidth={1.2} />
              </a>
            </div>
          </div>

          {/* Grid — uneven columns */}
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <p className="font-body text-white/45 text-sm leading-[2] max-w-xs">
                Guest House a La Spezia con vista mare e piscina. La base ideale per esplorare le Cinque Terre.
              </p>
            </div>

            <div className="col-span-6 md:col-span-3 md:col-start-6">
              <div className="space-y-3">
                {navLinks.map((link) => (
                  <button key={link.id} onClick={() => scrollTo(link.id)} className="block font-body text-white/45 hover:text-white/75 text-sm transition-colors">
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-6 md:col-span-3">
              <div className="space-y-3 font-body text-white/45 text-sm">
                <p>Salita del Pianello, 12</p>
                <p>19131 La Spezia (SP)</p>
                <p className="text-[#c8956c]/40 mt-4">info@innovationhouse.it</p>
              </div>
              <div className="mt-8 space-y-1.5 font-body text-white/8 text-[10px] tracking-wider">
                <p>CITR: 011015-AFF-0538</p>
                <p>CIN: IT011015C2ST5SAIVY</p>
              </div>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="rule-line mt-16 mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-body text-white/30 text-[10px] tracking-[0.15em]">
              © 2026 Innovation House — La Spezia
            </p>
            <div className="flex gap-8">
              <a href="#" className="font-body text-white/30 hover:text-white/55 text-[10px] tracking-[0.1em] transition-colors">Privacy Policy</a>
              <a href="#" className="font-body text-white/30 hover:text-white/55 text-[10px] tracking-[0.1em] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
