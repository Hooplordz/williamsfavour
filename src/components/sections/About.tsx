import { about, person } from '@/content/portfolio'
import { ArrowLink } from '../ui/ArrowLink'
import { DoubleRule } from '../ui/DoubleRule'
import { Eyebrow } from '../ui/Eyebrow'
import { SplitHeading } from '../ui/SplitHeading'
import { WordWall } from '../ui/WordWall'

export function About() {
  return (
    <section id="about" className="relative isolate overflow-x-clip bg-ink">
      <WordWall className="h-[30rem]" />
      <div className="relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          {/* Left: heading + facts */}
          <div className="md:sticky md:top-28 md:self-start">
            <SplitHeading text={about.heading} className="text-[clamp(3.75rem,11vw,9.5rem)]" />
            <p data-reveal="up" className="mt-4 font-heading text-2xl leading-tight uppercase text-bone/80 md:text-3xl">
              {person.name}
              <span className="text-ash"> — {person.title}</span>
            </p>

            <dl className="mt-10 border-t border-line">
              {about.facts.map((fact, i) => (
                <div
                  key={fact.label}
                  data-reveal="up"
                  style={{ ['--i' as string]: i }}
                  className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-4"
                >
                  <dt className="font-mono text-[0.7rem] tracking-[0.18em] text-ash uppercase">{fact.label}</dt>
                  <dd className="text-base font-semibold">
                    {fact.value ?? <span className="font-medium text-ash italic">[{fact.hint}]</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: journey */}
          <div className="flex flex-col gap-6">
            <Eyebrow accent>The engineering journey</Eyebrow>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                data-reveal="up"
                className={i === 0 ? 'text-2xl leading-snug font-semibold md:text-[1.75rem]' : 'text-lg leading-relaxed text-bone/80'}
              >
                {p}
              </p>
            ))}
            <p data-reveal="up" className="border-l-2 border-signal pl-5 text-lg leading-relaxed font-medium text-bone">
              {about.ambition}
            </p>
            <div data-reveal="up" className="mt-2">
              <ArrowLink href="#contact" variant="outline">
                Work with me
              </ArrowLink>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mt-20 md:mt-28">
          <DoubleRule />
          <div className="grid gap-6 py-10 md:grid-cols-[14rem_1fr] md:py-14">
            <Eyebrow accent className="md:pt-4">
              {about.mission.label}
            </Eyebrow>
            <blockquote data-reveal="up" className="font-heading text-[clamp(2.5rem,6.5vw,6rem)] leading-[0.92] uppercase">
              “{about.mission.statement}”
            </blockquote>
          </div>
          <DoubleRule flip />
        </div>
      </div>
    </section>
  )
}
