import { hero, person } from '@/content/portfolio'
import { cdn, cdnSrcSet } from '@/lib/image'
import { ArrowLink } from '../ui/ArrowLink'
import { Eyebrow } from '../ui/Eyebrow'
import { WordWall } from '../ui/WordWall'

export function Hero() {
  let letter = 0
  return (
    <section id="top" className="relative isolate overflow-hidden pt-16 md:pt-[4.5rem]">
      <WordWall />
      <div aria-hidden="true" className="absolute inset-x-0 top-16 md:top-[4.5rem]">
        <div className="mx-auto max-w-8xl px-4 md:px-6">
          <div className="double-rule intro-nav text-bone/70" style={{ ['--i' as string]: 6 }} />
        </div>
      </div>

      <div className="relative mx-auto grid min-h-[max(38rem,min(calc(100svh-4.5rem),58rem))] max-w-8xl items-center gap-10 px-4 pt-12 pb-16 md:grid-cols-[1.15fr_1fr] md:gap-6 md:px-6 md:pt-8 md:pb-10">
        <div className="flex flex-col gap-6 md:pl-[4%]">
          <div className="intro-rise" style={{ ['--i' as string]: -4 }}>
            <Eyebrow accent>{hero.eyebrow}</Eyebrow>
          </div>

          <h1
            aria-label={hero.headline.join(' ')}
            className="font-heading text-[min(21vw,7.5rem)] leading-[0.86] uppercase md:text-[min(10vw,10rem)]"
          >
            <span aria-hidden="true">
              {hero.headline.map((line, li) => (
                <span key={li} className="block overflow-hidden pb-[0.05em]">
                  {line.split('').map((ch, ci) => (
                    <span
                      key={ci}
                      className={`intro-letter ${li === hero.headline.length - 1 ? 'text-outline' : ''}`}
                      style={{ ['--i' as string]: letter++ }}
                    >
                      {ch === ' ' ? ' ' : ch}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <p className="intro-rise max-w-md text-base leading-relaxed font-medium text-bone/85 md:text-lg" style={{ ['--i' as string]: 0 }}>
            {hero.intro}
          </p>
          <div className="intro-rise flex flex-wrap gap-3" style={{ ['--i' as string]: 1 }}>
            <ArrowLink href={hero.primaryCta.href}>{hero.primaryCta.label}</ArrowLink>
            <ArrowLink href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </ArrowLink>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-[34rem] place-items-center">
          {/* Rotating ring of text */}
          <svg aria-hidden="true" viewBox="0 0 200 200" className="spin-slow absolute inset-0 size-full text-ash">
            <defs>
              <path id="ring" d="M100,100 m-92,0 a92,92 0 1,1 184,0 a92,92 0 1,1 -184,0" />
            </defs>
            <text fill="currentColor" className="font-mono" fontSize="6.2" letterSpacing="2.4">
              <textPath href="#ring">{hero.ringText.repeat(2).toUpperCase()}</textPath>
            </text>
          </svg>
          <div className="intro-circle relative m-[9%] aspect-square w-[82%] overflow-hidden rounded-full border-[6px] border-bone bg-ink">
            <img
              src={cdn('/img/hero.png', 800)}
              srcSet={cdnSrcSet('/img/hero.png', [480, 800, 1024])}
              sizes="(min-width: 48rem) 30rem, 80vw"
              alt={`Engraved illustration of a robotic hand reaching for a glowing microchip — the ${person.company} emblem`}
              width={1024}
              height={1024}
              fetchPriority="high"
              className="size-full scale-[1.12] object-cover object-[50%_35%]"
            />
          </div>
          <span
            aria-hidden="true"
            className="intro-rise absolute right-[6%] bottom-[10%] rounded-full bg-signal px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.2em] text-ink uppercase"
            style={{ ['--i' as string]: 2 }}
          >
            Robotics × AI × IoT
          </span>
        </div>
      </div>

      <a
        href="#numbers"
        className="intro-rise absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em] text-ash uppercase md:flex"
        style={{ ['--i' as string]: 3 }}
      >
        Scroll
        <span aria-hidden="true" className="block h-8 w-px animate-pulse bg-ash" />
      </a>
    </section>
  )
}
