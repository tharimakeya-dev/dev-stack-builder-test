const LINK_GROUPS = [
  {
    title: 'Product',
    links: ['Home', 'Technologies', 'Projects'],
  },
  {
    title: 'Company',
    links: ['About', 'Contact', 'Careers'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
]

const SOCIALS = ['GitHub', 'Twitter', 'LinkedIn']

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-sm font-bold text-white font-display">
                DS
              </span>
              <span className="text-lg font-semibold text-ink font-display">
                Dev <span className="brand-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/50">
              Curated tools, technologies, and resources for developers building modern
              software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-ink/50">
              {SOCIALS.map((social) => (
                <a key={social} href="#" className="hover:text-ink">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-ink">{group.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink/50">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/5 pt-6 text-xs text-ink/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink/70">
              Privacy
            </a>
            <a href="#" className="hover:text-ink/70">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
