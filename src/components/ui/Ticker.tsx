import { cn } from '@/lib/utils'

type Props = {
  items: string[]
  reverse?: boolean
  seconds?: number
  className?: string
}

/** Infinite horizontal text strip. Content is duplicated so the loop is seamless. */
export function Ticker({ items, reverse, seconds = 38, className }: Props) {
  const group = (hidden: boolean) => (
    <div className="flex shrink-0" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          {item}
          <span aria-hidden="true" className="mx-[0.9em] inline-block size-[0.32em] rotate-45 bg-signal" />
        </span>
      ))}
    </div>
  )
  return (
    <div className={cn('marquee overflow-hidden', className)}>
      <div className={cn('marquee-track', reverse && 'marquee-track--reverse')} style={{ ['--marquee-time' as string]: `${seconds}s` }}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
