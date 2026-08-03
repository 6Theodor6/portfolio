import { useLanguage } from '../i18n'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Education() {
  const { lang, t } = useLanguage()
  const items = data[lang].education

  return (
    <section id="education" className="border-t border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeader eyebrow="02" title={t('edu_title')} subtitle={t('edu_subtitle')} />
        </Reveal>
        <div className="space-y-6">
          {items.map((e) => (
            <Reveal key={e.degree}>
              <div className="flex flex-col gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 md:flex-row md:items-start">
                <div className="md:w-40 md:pt-1">
                  <p className="font-mono text-sm text-emerald-400">{e.period}</p>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-100">{e.degree}</h3>
                  <p className="mt-1 text-emerald-400">{e.school}</p>
                  <p className="mt-1 text-sm text-slate-500">{e.faculty}</p>
                  {e.note && (
                    <p className="mt-1 font-mono text-xs text-emerald-500/70">{e.note}</p>
                  )}
                  <p className="mt-3 text-slate-400">{e.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
