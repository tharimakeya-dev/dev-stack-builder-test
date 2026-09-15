
export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Build Your Ideal
            <br />
            <span className="brand-text">Development Stack</span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/60">
            Explore frontend, backend, database, and tooling options, compare them side by
            side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink/30"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="/assets/banner-stack.png"
            alt="Illustration of a layered technology stack"
            className="w-72 sm:w-96"
            width="384"
            height="384"
          />
        </div>
      </div>
    </section>
  )
}
