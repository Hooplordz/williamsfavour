import { useEffect, useState } from 'react'
import { navItems, person } from '@/content/portfolio'
import { ArrowLink } from './ui/ArrowLink'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500',
        scrolled || open ? 'border-b border-line bg-ink/80 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-8xl items-center justify-between gap-6 px-4 md:h-[4.5rem] md:px-6">
        <a href="#top" className="intro-nav group flex items-baseline gap-2" style={{ ['--i' as string]: 0 }} aria-label={`${person.company} — home`}>
          <span className="font-heading text-[1.65rem] leading-none tracking-[0.16em] uppercase">Wilfa</span>
          <span className="font-mono text-[0.65rem] tracking-[0.3em] text-signal uppercase transition-colors group-hover:text-bone">Tech</span>
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex gap-7 lg:gap-9">
            {navItems.map((item, i) => (
              <li key={item.href} className="intro-nav" style={{ ['--i' as string]: i + 1 }}>
                <a
                  href={item.href}
                  className="group relative font-heading text-[0.95rem] tracking-[0.16em] uppercase text-bone/80 transition-colors hover:text-bone"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-signal transition-transform duration-500 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="intro-nav hidden md:block" style={{ ['--i' as string]: navItems.length + 1 }}>
          <ArrowLink href="#contact" className="h-9 text-[0.85rem]">
            Contact me
          </ArrowLink>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
          className="intro-nav relative grid size-11 place-items-center rounded-full border border-line md:hidden"
        >
          <span aria-hidden="true" className="relative block h-2.5 w-5">
            <span className={cn('absolute left-0 h-0.5 w-5 bg-bone transition-transform duration-300', open ? 'top-1 rotate-45' : 'top-0')} />
            <span className={cn('absolute left-0 h-0.5 w-5 bg-bone transition-transform duration-300', open ? 'top-1 -rotate-45' : 'top-2')} />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={cn(
          'fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink transition-[opacity,transform] duration-500 md:hidden',
          open ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0',
        )}
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col justify-between px-4 pt-6 pb-10">
          <ul>
            {[...navItems, { label: 'Contact', href: '#contact' }].map((item, i) => (
              <li key={item.href} className="border-b border-line">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 font-heading text-5xl uppercase"
                >
                  {item.label}
                  <span className="font-mono text-xs text-ash">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-mono text-xs tracking-[0.2em] text-ash uppercase">
            {person.name} · {person.company}
          </p>
        </nav>
      </div>
    </header>
  )
}
