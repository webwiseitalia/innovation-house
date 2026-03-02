import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, MapPin, Shield } from 'lucide-react'
import { SITE } from '../constants/siteData'

export default function PrivacyPolicy() {
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
          <Shield className="w-8 h-8 text-[#5bb8c1]" strokeWidth={1.2} />
          <div>
            <h1 className="font-heading text-2xl md:text-3xl font-bold">Privacy Policy</h1>
            <p className="font-body text-white/70 text-sm mt-1">Informativa sul trattamento dei dati personali</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="max-w-3xl mx-auto bg-white rounded-sm shadow-sm p-8 md:p-14">

          <p className="font-body text-[#2d2a26]/60 text-sm mb-10">Ultimo aggiornamento: {SITE.lastPolicyUpdate}</p>

          {/* 1. Titolare */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">1. Titolare del Trattamento</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Il Titolare del trattamento dei dati personali è:
          </p>
          <div className="bg-[#f5f0eb] border-l-4 border-[#5bb8c1] p-6 mb-10 rounded-r-sm">
            <p className="font-heading text-[#2d2a26] font-semibold mb-2">{SITE.name}</p>
            <div className="font-body text-[#2d2a26]/80 text-sm space-y-1">
              <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-[#5bb8c1]" /> {SITE.address.full}</p>
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#5bb8c1]" /> {SITE.email}</p>
            </div>
          </div>

          {/* 2. Dati Raccolti */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">2. Dati Raccolti e Finalità del Trattamento</h2>
          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3">2.1 Dati forniti volontariamente dall&apos;utente</h3>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Tramite il modulo di contatto presente sul sito, raccogliamo i seguenti dati personali:
          </p>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-4 space-y-1 ml-2">
            <li><strong>Nome e Cognome</strong> - per identificare l&apos;interessato</li>
            <li><strong>Indirizzo Email</strong> - per rispondere alle richieste</li>
            <li><strong>Numero di Telefono</strong> (facoltativo) - per contatti telefonici</li>
            <li><strong>Messaggio/Descrizione del Progetto</strong> - per comprendere le esigenze</li>
          </ul>
          <div className="bg-[#5bb8c1]/10 border border-[#5bb8c1]/20 p-5 mb-4 rounded-sm">
            <p className="font-heading text-sm font-semibold text-[#5bb8c1] mb-2">Finalità</p>
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8]">
              I dati vengono raccolti esclusivamente per: rispondere alle richieste di prenotazione, fornire informazioni sui nostri servizi, organizzare soggiorni e consultazioni, gestire la relazione con l&apos;ospite.
            </p>
          </div>

          <h3 className="font-heading text-base font-semibold text-[#2d2a26] mb-3 mt-8">2.2 Base giuridica del trattamento</h3>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Il trattamento è basato sul <strong>consenso esplicito</strong> dell&apos;interessato (Art. 6, par. 1, lett. a del GDPR), fornito attraverso l&apos;invio del modulo di contatto, e sulla <strong>esecuzione di misure precontrattuali</strong> (Art. 6, par. 1, lett. b del GDPR).
          </p>

          {/* 3. Modalità */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">3. Modalità di Trattamento</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            I dati personali sono trattati con strumenti informatici e/o telematici, con logiche strettamente correlate alle finalità indicate e, comunque, in modo da garantire la sicurezza e la riservatezza dei dati stessi.
          </p>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Adottiamo misure di sicurezza tecniche e organizzative adeguate per proteggere i dati personali da accessi non autorizzati, perdita, distruzione o divulgazione.
          </p>

          {/* 4. Conservazione */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">4. Conservazione dei Dati</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            I dati personali vengono conservati per il tempo strettamente necessario a gestire le richieste ricevute e le relazioni commerciali conseguenti.
          </p>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-10 space-y-1 ml-2">
            <li><strong>Richieste di preventivo:</strong> i dati vengono conservati per 24 mesi dalla richiesta, salvo instaurazione di rapporto contrattuale</li>
            <li><strong>Rapporti contrattuali:</strong> i dati vengono conservati per 10 anni in conformità agli obblighi fiscali e contabili</li>
            <li><strong>Richieste di informazioni:</strong> i dati vengono conservati per 12 mesi dalla risposta</li>
          </ul>

          {/* 5. Comunicazione */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">5. Comunicazione e Diffusione dei Dati</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            I dati personali non vengono diffusi e possono essere comunicati esclusivamente a:
          </p>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-4 space-y-1 ml-2">
            <li>Personale interno autorizzato al trattamento (titolare e collaboratori)</li>
            <li>Professionisti esterni (commercialisti, consulenti legali) vincolati da obblighi di riservatezza</li>
            <li>Autorità competenti in caso di richieste legittime previste per legge</li>
          </ul>
          <div className="bg-red-50 border border-red-200 p-5 mb-10 rounded-sm">
            <p className="font-heading text-sm font-semibold text-red-600 mb-2">I tuoi dati NON verranno MAI:</p>
            <ul className="list-disc list-inside font-body text-red-600/80 text-sm leading-[1.8] space-y-0.5 ml-1">
              <li>Venduti a terze parti</li>
              <li>Condivisi con società di marketing</li>
              <li>Utilizzati per invio di newsletter non richieste</li>
              <li>Trasferiti fuori dall&apos;Unione Europea</li>
            </ul>
          </div>

          {/* 6. Diritti */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">6. Diritti dell&apos;Interessato</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            In qualità di interessato, hai il diritto di:
          </p>
          <ul className="list-disc list-inside font-body text-[#2d2a26]/80 text-base leading-[2] mb-4 space-y-1 ml-2">
            <li><strong>Accesso (Art. 15 GDPR):</strong> Ottenere conferma dell&apos;esistenza dei tuoi dati e riceverne copia</li>
            <li><strong>Rettifica (Art. 16 GDPR):</strong> Richiedere la correzione di dati inesatti o incompleti</li>
            <li><strong>Cancellazione (Art. 17 GDPR):</strong> Richiedere la cancellazione dei dati (&ldquo;diritto all&apos;oblio&rdquo;)</li>
            <li><strong>Limitazione (Art. 18 GDPR):</strong> Richiedere la limitazione del trattamento</li>
            <li><strong>Portabilità (Art. 20 GDPR):</strong> Ricevere i dati in formato strutturato e trasferirli ad altro titolare</li>
            <li><strong>Opposizione (Art. 21 GDPR):</strong> Opporsi al trattamento dei dati personali</li>
            <li><strong>Revoca del consenso:</strong> Revocare il consenso in qualsiasi momento</li>
          </ul>
          <div className="bg-[#5bb8c1]/10 border border-[#5bb8c1]/20 p-5 mb-10 rounded-sm">
            <p className="font-heading text-sm font-semibold text-[#5bb8c1] mb-2">Come esercitare i tuoi diritti:</p>
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8]">
              Puoi esercitare i tuoi diritti inviando una richiesta via email a <a href={`mailto:${SITE.email}`} className="text-[#5bb8c1] hover:underline">{SITE.email}</a> o tramite raccomandata A/R all&apos;indirizzo: {SITE.address.full}.
            </p>
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8] mt-1">
              Risponderemo entro <strong>30 giorni</strong> dalla ricezione della richiesta.
            </p>
          </div>

          {/* 7. Reclamo */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">7. Diritto di Reclamo</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Hai il diritto di proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali se ritieni che il trattamento dei tuoi dati violi il GDPR.
          </p>
          <div className="bg-[#f5f0eb] border-l-4 border-[#c8956c] p-5 mb-10 rounded-r-sm">
            <p className="font-heading text-sm font-semibold text-[#2d2a26] mb-2">Garante per la protezione dei dati personali:</p>
            <p className="font-body text-[#2d2a26]/80 text-sm leading-[1.8]">
              Sito web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-[#5bb8c1] hover:underline">www.garanteprivacy.it</a><br />
              Email: garante@gpdp.it<br />
              PEC: protocollo@pec.gpdp.it
            </p>
          </div>

          {/* 8. Cookie */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">8. Cookie e Tecnologie di Tracciamento</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Il nostro sito utilizza esclusivamente cookie tecnici necessari al funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-[#5bb8c1] hover:underline">Cookie Policy</Link>.
          </p>

          {/* 9. Modifiche */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">9. Modifiche alla Privacy Policy</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-10">
            Ci riserviamo il diritto di modificare o aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento. Ti invitiamo a consultare periodicamente questa pagina per essere sempre informato sulle nostre politiche di privacy.
          </p>

          {/* 10. Contatti */}
          <h2 className="font-heading text-xl font-bold text-[#2d2a26] mb-4">10. Contatti</h2>
          <p className="font-body text-[#2d2a26]/80 text-base leading-[1.9] mb-4">
            Per qualsiasi domanda o richiesta relativa al trattamento dei tuoi dati personali, puoi contattarci:
          </p>
          <div className="bg-[#f5f0eb] border-l-4 border-[#5bb8c1] p-6 mb-8 rounded-r-sm">
            <div className="font-body text-[#2d2a26]/80 text-sm space-y-1">
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-[#5bb8c1]" /> <a href={`mailto:${SITE.email}`} className="text-[#5bb8c1] hover:underline">{SITE.email}</a></p>
            </div>
          </div>

          <p className="font-body text-[#2d2a26]/50 text-xs text-center leading-[1.8] mt-12">
            Questa Privacy Policy è conforme al Regolamento (UE) 2016/679 (GDPR) e al D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 mt-10">
          <Link to="/" className="flex-1 text-center font-heading text-xs tracking-[0.3em] uppercase px-8 py-4 border border-[#5bb8c1]/40 text-[#5bb8c1] hover:bg-[#5bb8c1] hover:text-white transition-all duration-500 rounded-sm">
            Torna alla Home
          </Link>
          <Link to="/cookie-policy" className="flex-1 text-center font-heading text-xs tracking-[0.3em] uppercase px-8 py-4 border border-[#2d2a26]/15 text-[#2d2a26]/70 hover:border-[#5bb8c1]/40 hover:text-[#5bb8c1] transition-all duration-500 rounded-sm">
            Leggi la Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  )
}
