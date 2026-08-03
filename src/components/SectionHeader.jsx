export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-emerald-400">{eyebrow}</p>
      <h2 className="mb-3 text-3xl font-bold text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-slate-400">{subtitle}</p>}
    </div>
  )
}
