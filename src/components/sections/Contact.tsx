import { useState } from 'react'
import { contact, links } from '@/content/portfolio'
import { cn } from '@/lib/utils'
import { Eyebrow } from '../ui/Eyebrow'
import { WordWall } from '../ui/WordWall'

type Channel = { label: string; value: string; href: string | null; external?: boolean }

export function Contact() {
  const [copied, setCopied] = useState(false)

  const channels: Channel[] = [
    { label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { label: 'GitHub', value: `@${links.githubHandle}`, href: links.github, external: true },
    { label: 'LinkedIn', value: links.linkedin ? 'View profile' : 'Profile link coming soon', href: links.linkedin, external: true },
  ]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${links.email}`
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative isolate overflow-hidden bg-ink">
      <WordWall />
      <div className="relative mx-auto max-w-8xl px-4 pt-20 pb-16 md:px-6 md:pt-28">
        <Eyebrow accent>Contact</Eyebrow>
        <h2
          id="contact-heading"
          data-reveal="stamp"
          className="mt-4 font-heading text-[clamp(4.5rem,17vw,15rem)] leading-[0.82] uppercase"
        >
          {contact.stamp}
        </h2>
        <p data-reveal="up" className="mt-3 font-heading text-4xl leading-none uppercase text-outline md:text-6xl">
          {contact.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <p data-reveal="up" className="max-w-md text-lg leading-relaxed font-medium text-bone/80">
            {contact.body}
          </p>
          <button
            type="button"
            onClick={copyEmail}
            data-reveal="up"
            className="rounded-[3px] border border-line px-3 py-2 font-mono text-[0.7rem] tracking-[0.16em] text-ash uppercase transition-colors hover:border-bone/40 hover:text-bone"
          >
            <span aria-live="polite">{copied ? 'Email copied ✓' : 'Copy email address'}</span>
          </button>
        </div>

        <ul className="mt-12 grid border-t border-line md:grid-cols-3">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className="font-mono text-[0.7rem] tracking-[0.2em] text-ash uppercase">0{i + 1} · {c.label}</span>
                <span className="mt-8 flex items-end justify-between gap-4">
                  <span className="font-heading text-3xl leading-none uppercase break-all md:text-[2.1rem]">{c.label}</span>
                  {c.href && (
                    <span aria-hidden="true" className="text-2xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  )}
                </span>
                <span className={cn('mt-2 text-sm font-medium break-all', c.href ? 'text-bone/75' : 'text-ash italic')}>
                  {c.value}
                </span>
              </>
            )
            const cls = cn(
              'group relative flex h-full flex-col border-b border-line p-6 transition-colors duration-500 md:p-8',
              i > 0 && 'md:border-l',
              c.href && 'hover:bg-charcoal',
            )
            return (
              <li key={c.label} data-reveal="up" style={{ ['--i' as string]: i }}>
                {c.href ? (
                  <a href={c.href} className={cls} {...(c.external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}>
                    {inner}
                    <span aria-hidden="true" className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100" />
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
