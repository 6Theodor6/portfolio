import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

const links = [
  { key: 'nav_about', href: '#about' },
  { key: 'nav_skills', href: '#skills' },
  { key: 'nav_education', href: '#education' },
  { key: 'nav_experience', href: '#experience' },
  { key: 'nav_projects', href: '#projects' },
  { key: 'nav_contact', href: '#contact' },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggle = () => setLang(lang === 'en' ? 'cz' : 'en')

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all ${
        scrolled
          ? 'border-slate-800 bg-slate-950/90 backdrop-blur'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#about" className="font-mono text-lg font-bold text-emerald-400">
          TM
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 transition hover:text-emerald-400"
            >
              {t(l.key)}
            </a>
          ))}
          <LanguageToggle lang={lang} toggle={toggle} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle lang={lang} toggle={toggle} />
          <button
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 text-slate-300"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-slate-400 transition hover:text-emerald-400"
              >
                {t(l.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

function LanguageToggle({ lang, toggle }) {
  return (
    <button
      onClick={toggle}
      className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
      aria-label="Toggle language"
    >
      {lang === 'en' ? 'CZ' : 'EN'}
    </button>
  )
}
