export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-ink/50">
      <span
        className="h-10 w-10 animate-spin rounded-full border-4 border-ink/10 border-t-pink-500"
        role="status"
        aria-label="Loading"
      />
      <p className="text-sm">Loading technologies…</p>
    </div>
  )
}
