import { expertise } from '@/content/portfolio'
import { Eyebrow } from '../ui/Eyebrow'
import { SplitHeading } from '../ui/SplitHeading'
import { WordWall } from '../ui/WordWall'

export function Expertise() {
  return (
    <section id="expertise" className="relative isolate overflow-hidden bg-charcoal">
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <SplitHeading text="Expertise" className="text-[clamp(3.75rem,11vw,9.5rem)]" />
          <p data-reveal="up" className="max-w-sm pb-2 text-sm leading-relaxed text-bone/70">
            Four disciplines, one practice. Most of what I build needs all of them working together.
          </p>
        </div>

        <ol className="mt-12 grid gap-px overflow-hidden rounded-[3px] border border-line bg-line md:grid-cols-2">
          {expertise.map((area, i) => (
            <li
              key={area.domain}
              data-reveal="up"
              style={{ ['--i' as string]: i }}
              className="group relative isolate overflow-hidden bg-charcoal p-6 transition-colors duration-500 hover:bg-ink md:p-10"
            >
              <WordWall variant="radial" className="opacity-0 transition-opacity duration-700 group-hover:opacity-[0.12]" />
              <div className="flex items-start justify-between gap-4">
                <Eyebrow>{String(i + 1).padStart(2, '0')}</Eyebrow>
                <span
                  aria-hidden="true"
                  className="inline-block size-2 rotate-45 bg-line transition-colors duration-500 group-hover:bg-signal"
                />
              </div>
              <h3 className="mt-10 font-heading text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.9] uppercase md:mt-16">
                {area.domain}
              </h3>
              <p className="mt-3 max-w-sm text-base font-medium text-bone/75">{area.line}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {area.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-[3px] border border-line px-2.5 py-1 font-mono text-[0.7rem] text-bone/80 transition-colors duration-300 group-hover:border-bone/25"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-signal transition-transform duration-700 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
