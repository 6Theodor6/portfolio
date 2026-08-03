import { useLanguage } from '../i18n'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Skills() {
  const { lang, t } = useLanguage()
  const skills = data[lang].skills

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeader eyebrow="01" title={t('skills_title')} subtitle={t('skills_subtitle')} />
      </Reveal>
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((s) => (
          <Reveal key={s.name}>
            <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-emerald-500/40">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <SkillIcon name={s.icon} />
                </span>
                <h3 className="text-lg font-semibold text-slate-100">{s.name}</h3>
              </div>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    {item}
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

function SkillIcon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  switch (name) {
    case 'pcb':
      return (
        <svg viewBox="0 0 24 24" {...common} className="h-5 w-5">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="7" cy="9" r="1.2" />
          <circle cx="12" cy="8" r="1.2" />
          <circle cx="17" cy="10" r="1.2" />
          <path d="M8 9h2.8M13.2 8H17M10.8 8.5V9" />
          <path d="M7 10.2V15M17 11.2v4M7 15h10" />
        </svg>
      )
    case 'chip':
      return (
        <svg viewBox="0 0 24 24" {...common} className="h-5 w-5">
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9.5" y="9.5" width="5" height="5" />
          <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
        </svg>
      )
    case 'osc':
      return (
        <svg viewBox="0 0 24 24" {...common} className="h-5 w-5">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M3.5 15c3 0 2-6 4.5-6s2 6 4.5 6 2-6 4.5-6 1.5 6 4 6" />
          <path d="M4 8V6M20 8V6" />
        </svg>
      )
    case 'cad':
      return (
        <svg viewBox="0 0 24 24" {...common} className="h-5 w-5">
          <path d="M12 3l9 5-9 5-9-5 9-5z" />
          <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
        </svg>
      )
    default:
      return null
  }
}
