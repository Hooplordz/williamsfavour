import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** Small monospace label used above headings and on metadata. */
export function Eyebrow({ children, className, accent }: { children: ReactNode; className?: string; accent?: boolean }) {
  return (
    <p className={cn('flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.18em] uppercase text-ash', className)}>
      {accent && <span aria-hidden="true" className="inline-block size-1.5 rotate-45 bg-signal" />}
      {children}
    </p>
  )
}
