import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n'
import { data } from '../data'
import SectionHeader from './SectionHeader'
import Reveal from './Reveal'

export default function Projects() {
  const { lang, t } = useLanguage()
  const projects = data[lang].projects
  const [open, setOpen] = useState(null)

  const current = projects.filter((p) => p.status === 'current')
  const completed = projects.filter((p) => p.status !== 'current')

  const active = open !== null ? projects.find((p) => p.title === open) : null

  useEffect(() => {
    if (open === null) return
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="projects" className="border-t border-slate-800 bg-slate-900/30">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <SectionHeader eyebrow="04" title={t('projects_title')} subtitle={t('projects_subtitle')} />
        </Reveal>

        {completed.length > 0 && (
          <>
            <Reveal>
              <h3 className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-wide text-slate-500">
                <span className="h-px w-6 bg-slate-600/50" />
                {t('projects_completed')}
              </h3>
            </Reveal>
            <div className="mb-12 grid gap-6 md:grid-cols-2">
              {completed.map((p) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  open={open}
                  setOpen={setOpen}
                  t={t}
                />
              ))}
            </div>
          </>
        )}

        {current.length > 0 && (
          <>
            <Reveal>
              <h3 className="mb-4 flex items-center gap-3 font-mono text-sm uppercase tracking-wide text-amber-400">
                <span className="h-px w-6 bg-amber-400/50" />
                {t('projects_current')}
              </h3>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {current.map((p) => (
                <ProjectCard
                  key={p.title}
                  p={p}
                  open={open}
                  setOpen={setOpen}
                  t={t}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-2xl animate-reveal rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl"
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
            >
              ✕
            </button>

            <div className="p-6 pb-4">
              <div className="mb-3 flex flex-wrap items-center gap-2 pr-10">
                <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                  {active.tag}
                </span>
                {active.status === 'current' && (
                  <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 font-mono text-xs text-amber-400">
                    {t('projects_current')}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold text-slate-100">{active.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{active.summary}</p>
            </div>

            <div className="max-h-[70vh] overflow-y-auto px-6 pb-6">
              {active.media && active.media.length > 0 && (
                <div className={`mb-5 grid gap-3 ${active.media.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {active.media.map((m, mi) =>
                    m.type === 'video' ? (
                      <div key={mi}>
                        <video
                          src={m.src}
                          controls
                          preload="metadata"
                          playsInline
                          className="h-56 w-full rounded-lg border border-slate-800 bg-black object-contain md:h-64"
                        />
                        {m.caption && (
                          <p className="mt-1.5 text-xs text-slate-500">{m.caption}</p>
                        )}
                      </div>
                    ) : (
                      <figure key={mi}>
                        <img
                          src={m.src}
                          alt={m.caption || ''}
                          className="h-56 w-full rounded-lg border border-slate-800 bg-black object-cover md:h-64"
                        />
                        {m.caption && (
                          <figcaption className="mt-1.5 text-xs text-slate-500">
                            {m.caption}
                          </figcaption>
                        )}
                      </figure>
                    ),
                  )}
                </div>
              )}
              <ul className="space-y-2">
                {active.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="mt-1.5 h-1 w-1 flex-none rounded-full bg-emerald-400" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function ProjectCard({ p, open, setOpen, t }) {
  return (
    <Reveal>
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50">
        <div className="flex items-start gap-4 p-6 pb-4">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="inline-block rounded-full bg-emerald-500/10 px-3 py-1 font-mono text-xs text-emerald-400">
                {p.tag}
              </span>
              {p.status === 'current' && (
                <span className="inline-block rounded-full bg-amber-500/15 px-3 py-1 font-mono text-xs text-amber-400">
                  {t('projects_current')}
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{p.title}</h3>
          </div>
        </div>

        <p className="px-6 pb-4 text-sm text-slate-400">{p.summary}</p>

        <button
          onClick={() => setOpen(p.title)}
          className="mt-auto flex items-center justify-between border-t border-slate-800 px-6 py-3 text-sm font-medium text-emerald-400 transition hover:bg-emerald-500/5"
        >
          {t('projects_view')}
          <span>▸</span>
        </button>
      </div>
    </Reveal>
  )
}