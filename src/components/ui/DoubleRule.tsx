import { cn } from '@/lib/utils'

/** Thick + hairline editorial divider. Optionally draws in on scroll. */
export function DoubleRule({ className, animate = true, flip = false }: { className?: string; animate?: boolean; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      data-reveal={animate ? 'draw' : undefined}
      className={cn('double-rule text-bone/80', flip && 'rotate-180', className)}
    />
  )
}
