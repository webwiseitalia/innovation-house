import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Cookie, ShieldCheck, AlertCircle } from 'lucide-react'
import { SITE } from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#e8e2db]">
      {/* Header */}
      <div className="bg-[#1a3a4a] text-white py-8 md:py-12 px-6 md:px-10 lg:px-16">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-[#5bb8c1] hover:text-white transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Torna alla Home
        </Link>
        <div className="flex items-center gap-4">
          <Cookie className="w-8 h-8 text-[#5bb8c1]" strokeWidth={1.2} />
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">Cookie Policy</h1>
            <p className="font-body text-white/70 text-sm mt-1">Informativa sull&apos;utilizzo dei cookie</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-sm shadow-sm p-8 md:p-14">

          <p className="font-body text-[#2d2a26]/60 text-sm mb-8">Ultimo aggiornamento: {SITE.lastPolicyUpdate}</p>

          {/* Privacy-Friendly Badge */}
          <div className="bg-green-50 border border-green-200 p-6 mb-10 rounded-sm flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-base font-semibold text-green-700 mb-1">Sito Privacy-Friendly</p>
              <p className="font-body text-green-700/80 text-sm leading-[1.8]">
                Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.
              </p>
            </div>
          </div>

          {/* 1. Cosa sono */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">1. Cosa sono i Cookie</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
          </p>

          {/* 2. Tipologie */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">2. Tipologie di Cookie</h2>

          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3">2.1 Cookie Tecnici</h3>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
          </p>
          <div className="bg-[#5bb8c1]/10 border border-[#5bb8c1]/20 p-5 mb-6 rounded-sm">
            <p className="font-heading text-sm font-semibold text-[#5bb8c1] mb-2">Cookie tecnici utilizzati su questo sito:</p>
            <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-sm leading-[1.8] space-y-0.5 ml-1">
              <li>Cookie di navigazione e di sessione</li>
              <li>Cookie per memorizzare le preferenze dell&apos;interfaccia</li>
            </ul>
            <p className="font-body text-[#2d2a26]/60 text-xs mt-3 italic">
              Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell&apos;utente.
            </p>
          </div>

          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3 mt-8">2.2 Cookie Analitici</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-6 rounded-sm">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-red-600">NON UTILIZZATI</p>
              <p className="font-body text-red-600/80 text-sm leading-[1.8]">
                Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
              </p>
            </div>
          </div>

          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3 mt-8">2.3 Cookie di Profilazione</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-6 rounded-sm">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-red-600">NON UTILIZZATI</p>
              <p className="font-body text-red-600/80 text-sm leading-[1.8]">
                Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
              </p>
            </div>
          </div>

          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3 mt-8">2.4 Cookie di Terze Parti</h3>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-10 rounded-sm">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-heading text-sm font-semibold text-red-600">NON UTILIZZATI</p>
              <p className="font-body text-red-600/80 text-sm leading-[1.8]">
                Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
              </p>
            </div>
          </div>

          {/* 3. Cookie Utilizzati */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">3. Cookie Utilizzati su Questo Sito</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#1a3a4a] text-white">
                  <th className="text-left p-3 font-heading text-xs tracking-wider uppercase">Nome Cookie</th>
                  <th className="text-left p-3 font-heading text-xs tracking-wider uppercase">Tipologia</th>
                  <th className="text-left p-3 font-heading text-xs tracking-wider uppercase">Finalità</th>
                  <th className="text-left p-3 font-heading text-xs tracking-wider uppercase">Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2d2a26]/10">
                  <td className="p-3 font-body text-[#2d2a26]/80 font-medium">{SITE.cookieKey}</td>
                  <td className="p-3"><span className="bg-[#5bb8c1]/15 text-[#5bb8c1] font-heading text-xs px-2 py-1 rounded">Tecnico</span></td>
                  <td className="p-3 font-body text-[#2d2a26]/80">Memorizza lo stato di accettazione/chiusura della barra laterale per migliorare l&apos;esperienza di navigazione</td>
                  <td className="p-3 font-body text-[#2d2a26]/80 whitespace-nowrap">365 giorni</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[#c8956c]/10 border border-[#c8956c]/20 p-5 mb-10 rounded-sm">
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8]">
              <strong>Nota importante:</strong> I cookie tecnici come &ldquo;{SITE.cookieKey}&rdquo; sono essenziali per il funzionamento del sito e non richiedono il consenso dell&apos;utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
            </p>
          </div>

          {/* 4. Come Gestire */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">4. Come Gestire i Cookie</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser.
          </p>
          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3">Disabilitare i cookie tramite il browser:</h3>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-4 space-y-1 ml-2">
            <li><strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti</li>
            <li><strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web</li>
            <li><strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web</li>
            <li><strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie</li>
          </ul>
          <div className="bg-[#c8956c]/10 border border-[#c8956c]/20 p-5 mb-10 rounded-sm">
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8]">
              <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell&apos;esperienza di navigazione.
            </p>
          </div>

          {/* 5. Link Esterni */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">5. Link a Siti Esterni</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
          </p>

          {/* 6. Aggiornamenti */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">6. Aggiornamenti della Cookie Policy</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
          </p>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull&apos;utilizzo dei cookie sul nostro sito.
          </p>

          {/* 7. Base Normativa */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">7. Base Normativa</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Questa Cookie Policy è redatta in conformità a:
          </p>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-10 space-y-1 ml-2">
            <li>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
            <li>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
            <li>Provvedimento del Garante per la protezione dei dati personali dell&apos;8 maggio 2014, n. 229</li>
            <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
          </ul>

          {/* 8. Contatti */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">8. Contatti</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
          </p>
          <div className="bg-[#f5f0eb] border-l-4 border-[#5bb8c1] p-6 mb-8 rounded-r-sm">
            <p className="font-heading text-[#2d2a26] font-semibold mb-2">{SITE.name}</p>
            <div className="font-body text-[#2d2a26]/80 text-sm space-y-1">
              <p>{SITE.address.full}</p>
              <p>Email: <a href={`mailto:${SITE.email}`} className="text-[#5bb8c1] hover:underline">{SITE.email}</a></p>
            </div>
          </div>

          {/* Zero Tracking Badge */}
          <div className="text-center mt-12 py-8 border-t border-[#2d2a26]/8">
            <ShieldCheck className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <p className="font-heading text-lg font-bold text-[#2d2a26]">Zero Tracciamento</p>
            <p className="font-body text-[#2d2a26]/60 text-sm mt-1">Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/" className="flex-1 text-center font-heading text-xs tracking-[0.3em] uppercase px-8 py-4 border border-[#5bb8c1]/40 text-[#5bb8c1] hover:bg-[#5bb8c1] hover:text-white transition-all duration-500 rounded-sm">
            Torna alla Home
          </Link>
          <Link to="/privacy-policy" className="flex-1 text-center font-heading text-xs tracking-[0.3em] uppercase px-8 py-4 border border-[#2d2a26]/15 text-[#2d2a26]/70 hover:border-[#5bb8c1]/40 hover:text-[#5bb8c1] transition-all duration-500 rounded-sm">
            Leggi la Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
