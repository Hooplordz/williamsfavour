import { collaborate, links } from '@/content/portfolio'
import { ArrowLink } from '../ui/ArrowLink'
import { Eyebrow } from '../ui/Eyebrow'
import { WordWall } from '../ui/WordWall'

export function Collaborate() {
  return (
    <section id="collaborate" aria-labelledby="collaborate-heading" className="relative isolate overflow-hidden bg-charcoal">
      <WordWall variant="full" />
      <div className="relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-28">
        <Eyebrow accent>{collaborate.kicker}</Eyebrow>
        <h2
          id="collaborate-heading"
          className="mt-6 font-heading text-[clamp(3rem,9.5vw,8.5rem)] leading-[0.9] uppercase"
        >
          {collaborate.headline.map((line, i) => (
            <span key={i} data-reveal="up" style={{ ['--i' as string]: i }} className={`block ${i === 2 ? 'text-signal' : ''}`}>
              {line}
            </span>
          ))}
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div data-reveal="up" className="flex flex-col items-start gap-6">
            <p className="max-w-xl text-xl leading-relaxed font-medium md:text-2xl">{collaborate.body}</p>
            <ArrowLink href={`mailto:${links.email}?subject=Collaboration%20with%20WILFA%20TECH`} variant="signal">
              Start a conversation
            </ArrowLink>
          </div>
          <ul className="border-t border-line">
            {collaborate.points.map((point, i) => (
              <li
                key={point.title}
                data-reveal="up"
                style={{ ['--i' as string]: i }}
                className="grid grid-cols-[2.5rem_1fr] gap-2 border-b border-line py-6"
              >
                <span className="font-mono text-xs text-signal">0{i + 1}</span>
                <div>
                  <h3 className="font-heading text-2xl leading-tight uppercase md:text-3xl">{point.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-bone/70">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
