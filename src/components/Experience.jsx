import { useLanguage } from '../i18n'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Experience() {
  const { lang, t } = useLanguage()
  const jobs = data[lang].experience

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader eyebrow="03" title={t('exp_title')} subtitle={t('exp_subtitle')} />
      </Reveal>
      <div className="space-y-6">
        {jobs.map((job) => (
          <Reveal key={job.company}>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-100">{job.role}</h3>
                  <p className="text-emerald-400">{job.company}</p>
                </div>
                <p className="font-mono text-sm text-slate-500">{job.period}</p>
              </div>
              <ul className="space-y-3">
                {job.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-slate-400">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="mt-1 h-4 w-4 flex-none text-emerald-400"
                    >
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
