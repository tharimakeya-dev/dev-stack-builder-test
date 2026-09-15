export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length

  return (
    <aside className="h-fit rounded-2xl border border-black/5 bg-white p-5 shadow-card lg:sticky lg:top-24">
      <h3 className="text-lg font-semibold text-ink">Your Stack</h3>
      <p className="mt-1 text-sm text-ink/45">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      <div className="mt-4 flex flex-col gap-2.5">
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-ink/15 py-10 text-center text-sm text-ink/40">
            Your stack is empty.
          </div>
        ) : (
          stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-black/5 px-3 py-2.5"
            >
              <img src={tech.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-ink">{tech.name}</p>
                <p className="text-xs text-ink/45">{tech.category}</p>
              </div>
              <button
                type="button"
                onClick={() => onRemove(tech)}
                aria-label={`Remove ${tech.name} from your stack`}
                className="flex h-7 w-7 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-cloud hover:text-ink/70"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>

      {count > 0 && (
        <button
          type="button"
          onClick={onRemoveAll}
          className="mt-4 w-full rounded-xl border border-rose-200 py-2.5 text-sm font-semibold text-rose-500 transition-colors hover:bg-rose-50"
        >
          Remove All
        </button>
      )}
    </aside>
  )
}
