export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="flex flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt=""
          aria-hidden="true"
          className="h-10 w-10 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.visibility = 'hidden'
          }}
        />
        <span className="rounded-full bg-cloud px-3 py-1 text-xs font-medium text-ink/60">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-ink">{tech.name}</h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/55">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-ink/50">
        <span className="rounded-md bg-cloud px-2 py-1 text-ink/70">{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span className="inline-flex items-center gap-1 text-ink/70">
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-amber-400">
            <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.9l-5.2 2.61.99-5.79-4.21-4.1 5.82-.85L10 1.5z" />
          </svg>
          {tech.rating}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? 'cursor-not-allowed bg-ink/5 text-ink/40'
            : 'bg-ink text-white hover:bg-ink/85'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
