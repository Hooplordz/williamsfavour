import { links, navItems, person } from '@/content/portfolio'
import { ArrowLink } from './ui/ArrowLink'
import { DoubleRule } from './ui/DoubleRule'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-8xl px-4 md:px-6">
        <DoubleRule animate={false} />
        <div className="grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-5">
            <p className="flex items-baseline gap-2">
              <span className="font-heading text-5xl tracking-[0.14em] uppercase">Wilfa</span>
              <span className="font-mono text-xs tracking-[0.3em] text-signal uppercase">Tech</span>
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-ash">
              Robotics, artificial intelligence, the Internet of Things and software engineering — founded by {person.name}.
            </p>
            <ArrowLink href="#top" variant="outline" className="h-9 text-[0.8rem]">
              Back to top
            </ArrowLink>
          </div>
          <nav aria-label="Footer">
            <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase">Sections</h2>
            <ul className="mt-4 space-y-1">
              {[...navItems, { label: 'Contact', href: '#contact' }].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-heading text-2xl uppercase underline-offset-4 hover:text-signal">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase">Elsewhere</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a href={links.github} target="_blank" rel="noreferrer noopener" className="font-heading text-2xl uppercase hover:text-signal">
                  GitHub ↗
                </a>
              </li>
              {links.linkedin && (
                <li>
                  <a href={links.linkedin} target="_blank" rel="noreferrer noopener" className="font-heading text-2xl uppercase hover:text-signal">
                    LinkedIn ↗
                  </a>
                </li>
              )}
              <li>
                <a href={`mailto:${links.email}`} className="font-heading text-2xl uppercase hover:text-signal">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto flex max-w-8xl flex-wrap justify-between gap-2 px-4 py-5 font-mono text-[0.68rem] tracking-[0.12em] text-ash uppercase md:px-6">
          <span>© {year} {person.company} · {person.name}</span>
          <span>Built with React, TypeScript & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  )
}
