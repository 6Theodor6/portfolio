import { useLanguage } from '../i18n'
import { data } from '../data'

export default function Hero() {
  const { lang, t } = useLanguage()
  const p = data[lang].profile

  return (
    <section id="about" className="relative flex min-h-screen items-center">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-24">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-sm text-emerald-400">{p.role}</p>
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-100 md:text-7xl">
              {p.name}
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-slate-400">{p.summary}</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-md bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                {t('hero_cta')}
              </a>
              <a
                href="#contact"
                className="rounded-md border border-slate-700 px-6 py-3 font-semibold text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
              >
                {t('hero_cta2')}
              </a>
            </div>
          </div>

          <div className="flex-none">
            <div className="h-48 w-48 animate-float overflow-hidden rounded-full border-4 border-emerald-500/30 shadow-lg shadow-emerald-500/10 md:h-72 md:w-72">
              <img
                src="/media/profile.jpg"
                alt={p.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {['KiCad', 'STM32', 'ESP32', 'DDR3L', 'SPI / I2C', 'Fusion 360'].map(
            (s) => (
              <span
                key={s}
                className="rounded-full border border-slate-800 bg-slate-900 px-4 py-1.5 font-mono text-xs text-slate-400"
              >
                {s}
              </span>
            ),
          )}
        </div>
      </div>

      <a
        href="#skills"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-8 w-8 animate-scroll-down"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  )
}