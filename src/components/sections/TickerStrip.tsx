import { tickerItems } from '@/content/portfolio'
import { DoubleRule } from '../ui/DoubleRule'
import { Ticker } from '../ui/Ticker'

export function TickerStrip() {
  return (
    <section aria-label={tickerItems.join(', ')} className="bg-ink text-bone">
      <DoubleRule animate={false} className="text-bone/70" />
      <Ticker items={tickerItems} className="py-3 font-heading text-3xl tracking-[0.03em] uppercase md:py-5 md:text-5xl" />
      <div aria-hidden="true" className="border-y border-line">
        <Ticker
          items={tickerItems}
          reverse
          seconds={60}
          className="py-2 font-mono text-[0.7rem] tracking-[0.3em] text-ash uppercase md:text-xs"
        />
      </div>
      <DoubleRule animate={false} flip className="text-bone/70" />
    </section>
  )
}
