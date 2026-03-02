import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../constants/siteData'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(SITE.cookieKey)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(SITE.cookieKey, 'accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(SITE.cookieKey, 'rejected')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[90] bg-[#1a3a4a]/40 backdrop-blur-sm"
          />

          {/* Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[95] p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-2xl shadow-[#1a3a4a]/20 p-6 md:p-8 border border-[#5bb8c1]/10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-2">
                    Questo sito utilizza cookie tecnici
                  </h3>
                  <p className="font-body text-sm text-[#2d2a26]/70 leading-[1.8]">
                    Utilizziamo solo cookie tecnici necessari al funzionamento del sito. Non utilizziamo cookie di profilazione o tracciamento.{' '}
                    <Link to="/cookie-policy" className="text-[#5bb8c1] hover:underline">Leggi la Cookie Policy</Link>
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <button
                    onClick={handleReject}
                    className="font-heading text-xs tracking-[0.2em] uppercase px-6 py-3.5 border border-[#2d2a26]/15 text-[#2d2a26]/70 hover:border-[#2d2a26]/30 hover:text-[#2d2a26] transition-all duration-500 rounded-sm"
                  >
                    Rifiuta
                  </button>
                  <button
                    onClick={handleAccept}
                    className="font-heading text-xs tracking-[0.2em] uppercase px-6 py-3.5 bg-[#5bb8c1] text-white hover:bg-[#4a9da5] transition-all duration-500 rounded-sm"
                  >
                    Accetta
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
