import { stats } from '@/content/portfolio'
import { StatCounter } from '../ui/StatCounter'
import { WordWall } from '../ui/WordWall'
import { cn } from '@/lib/utils'

export function Numbers() {
  const pending = stats.some((s) => s.value === null)
  return (
    <section id="numbers" aria-labelledby="numbers-heading" className="relative overflow-hidden bg-charcoal">
      <div className="relative isolate">
        <WordWall variant="full" />
        <div className="relative mx-auto max-w-8xl px-4 pt-14 md:px-6 md:pt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="numbers-heading" data-reveal="up" className="font-heading text-5xl leading-none uppercase md:text-7xl">
              By the numbers
            </h2>
            {pending && (
              <p data-reveal="up" className="max-w-xs font-mono text-[0.7rem] leading-relaxed tracking-[0.12em] text-ash uppercase">
                <span className="text-signal">●</span> Figures pending verification — they appear here once confirmed.
              </p>
            )}
          </div>
        </div>

        <ul className="relative mx-auto grid max-w-[120rem] grid-cols-2 pt-6 pb-10 md:grid-cols-4 md:pt-10 md:pb-16">
          {stats.map((stat, i) => (
            <li
              key={stat.label}
              className={cn(
                'flex flex-col items-center justify-center px-3 py-8 text-center md:py-10',
                i % 2 === 1 && 'border-l',
                i >= 2 && 'border-t md:border-t-0',
                i === 2 && 'md:border-l',
              )}
            >
              <p
                data-reveal="stamp"
                style={{ ['--i' as string]: i }}
                className="font-heading text-[22vw] leading-none tabular-nums md:text-[min(11vw,12rem)]"
              >
                <StatCounter stat={stat} />
              </p>
              <p
                data-reveal="up"
                style={{ ['--i' as string]: i + 2 }}
                className="mt-3 max-w-[16ch] font-heading text-lg leading-[1.05] uppercase text-bone/85 md:text-2xl"
              >
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
