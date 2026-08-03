import { useLanguage } from '../i18n'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="text-sm text-slate-500">{t('footer_note')}</p>
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} Theodor Mounga
        </p>
      </div>
    </footer>
  )
}
