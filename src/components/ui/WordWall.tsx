import { cn } from '@/lib/utils'

/** Decorative wall of tiny words used as a background texture. */
export function WordWall({ variant = 'fade', className }: { variant?: 'fade' | 'full' | 'radial'; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('word-wall', variant === 'full' && 'word-wall--full', variant === 'radial' && 'word-wall--radial', className)}
    />
  )
}
