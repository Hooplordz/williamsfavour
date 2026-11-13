import { useEffect, useRef, useState } from 'react'
import type { Stat } from '@/content/portfolio'

const DURATION = 1600

/** A giant numeral that counts up once visible. When no value has been
 *  supplied yet it scrambles briefly and settles on an "XX" placeholder. */
export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(stat.value === null ? 'XX' : '0')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        if (stat.value === null) {
          if (reduce) return
          let ticks = 0
          const id = window.setInterval(() => {
            ticks++
            setDisplay(ticks > 14 ? 'XX' : String(Math.floor(Math.random() * 90 + 10)))
            if (ticks > 14) window.clearInterval(id)
          }, 60)
          return
        }
        const target = stat.value
        if (reduce) return setDisplay(String(target))
        const start = performance.now()
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / DURATION)
          const eased = 1 - Math.pow(1 - t, 4)
          setDisplay(String(Math.round(target * eased)))
          if (t < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [stat.value])

  const placeholder = stat.value === null
  return (
    <span ref={ref} className={placeholder ? 'text-outline' : undefined}>
      {display}
      {!placeholder && stat.suffix ? <span className="text-signal">{stat.suffix}</span> : null}
    </span>
  )
}
