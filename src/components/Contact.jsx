import { useLanguage } from '../i18n'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Contact() {
  const { lang, t } = useLanguage()
  const c = data[lang].contact

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader eyebrow="05" title={t('contact_title')} subtitle={t('contact_subtitle')} />
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        <Reveal>
          <a
            href={`mailto:${c.email}`}
            className="group block h-full rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-emerald-500/40"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-slate-500">
              {t('contact_email')}
            </p>
            <p className="break-all text-slate-200 group-hover:text-emerald-400">{c.email}</p>
          </a>
        </Reveal>
        <Reveal>
          <a
            href={c.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-emerald-500/40"
          >
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-slate-500">YouTube</p>
            <p className="break-all text-slate-200 group-hover:text-emerald-400">
              youtube.com/@Artificerofalltrades
            </p>
          </a>
        </Reveal>
        <Reveal>
          <div className="h-full rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <p className="mb-2 font-mono text-xs uppercase tracking-wide text-slate-500">
              {t('contact_location')}
            </p>
            <p className="text-slate-200">{c.location}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}