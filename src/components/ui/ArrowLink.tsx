import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'solid' | 'outline' | 'signal'

const styles: Record<Variant, string> = {
  solid: 'bg-bone text-ink hover:bg-white',
  outline: 'border border-bone/40 text-bone hover:border-bone hover:bg-bone/5',
  signal: 'bg-signal text-ink hover:brightness-110',
}

type Props = {
  href: string | null
  children: ReactNode
  variant?: Variant
  external?: boolean
  disabledLabel?: string
  className?: string
}

/** Compact uppercase button with a sliding arrow. Renders a muted
 *  placeholder when `href` is null (e.g. a link not supplied yet). */
export function ArrowLink({ href, children, variant = 'solid', external, disabledLabel, className }: Props) {
  const base =
    'btn-arrow inline-flex h-11 items-center gap-2 rounded-[3px] px-4 font-heading text-[0.95rem] tracking-[0.12em] uppercase whitespace-nowrap transition-colors duration-300'

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(base, 'cursor-not-allowed border border-dashed border-line text-ash', className)}
      >
        {disabledLabel ?? children}
      </span>
    )
  }

  return (
    <a
      href={href}
      className={cn(base, styles[variant], className)}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {children}
      <span aria-hidden="true" className="arrow">
        →
      </span>
    </a>
  )
}
