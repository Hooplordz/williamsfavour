import type { Project } from '@/content/portfolio'
import { cdn, cdnSrcSet } from '@/lib/image'
import { cn } from '@/lib/utils'
import { ArrowLink } from '../ui/ArrowLink'
import { DoubleRule } from '../ui/DoubleRule'
import { StackList } from '../ui/StackList'

const statusLabel: Record<Project['status'], string> = {
  sample: 'Project',
  'in-progress': 'In development',
  completed: 'Completed',
}

type Props = { project: Project; index: number; total: number }

export function ProjectRow({ project, index, total }: Props) {
  const flipped = index % 2 === 1
  const num = (n: number) => String(n).padStart(2, '0')

  return (
    <li>
      <DoubleRule />
      <article
        aria-labelledby={`${project.slug}-title`}
        className="grid items-center gap-8 py-10 md:grid-cols-2 md:gap-14 md:py-16"
      >
        <div className={cn('flex min-w-0 flex-col items-start gap-4', flipped && 'md:order-2')}>
          <div data-reveal="up" className="flex w-full flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[0.72rem] tracking-[0.18em] text-ash uppercase">
              <span className="text-bone">{num(index + 1)}</span> / {num(total)} — {project.category}
            </p>
            <span
              className={cn(
                'rounded-full border px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.16em] uppercase',
                project.status === 'completed' ? 'border-bone/50 text-bone' : 'border-signal/60 text-signal',
              )}
            >
              {statusLabel[project.status]}
            </span>
          </div>

          <h3
            id={`${project.slug}-title`}
            data-reveal="up"
            style={{ ['--i' as string]: 1 }}
            className="font-heading text-[clamp(3rem,7vw,6.25rem)] leading-[0.88] uppercase"
          >
            {project.name}
          </h3>

          <p data-reveal="up" style={{ ['--i' as string]: 2 }} className="text-sm font-semibold text-bone/70">
            <span className="text-ash">Role:</span> {project.role}
          </p>

          <p data-reveal="up" style={{ ['--i' as string]: 3 }} className="max-w-xl text-lg leading-snug font-medium md:text-xl">
            {project.description}
          </p>

          <div data-reveal="up" style={{ ['--i' as string]: 4 }} className="w-full max-w-xl">
            <p className="mb-2 font-heading text-sm tracking-[0.2em] text-ash uppercase">Stack</p>
            <StackList items={project.stack} />
          </div>

          <div data-reveal="up" style={{ ['--i' as string]: 5 }} className="mt-2 flex flex-wrap gap-3">
            <ArrowLink href={project.liveUrl} external disabledLabel="Live link · coming soon">
              Live project
            </ArrowLink>
            <ArrowLink href={project.caseStudyUrl} variant="outline" disabledLabel="Case study · coming soon">
              Case study
            </ArrowLink>
          </div>
        </div>

        <figure data-reveal="wipe" className={cn('media-zoom relative', flipped && 'md:order-1')}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[3px] border border-line bg-graphite">
            <img
              src={cdn(project.image, 900)}
              srcSet={cdnSrcSet(project.image, [600, 900, 1200])}
              sizes="(min-width: 48rem) 45vw, 92vw"
              alt={project.imageAlt}
              width={1200}
              height={896}
              loading="lazy"
              decoding="async"
              className="size-full object-cover"
            />
            <span className="absolute top-3 left-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.18em] text-bone/80 uppercase backdrop-blur">
              Concept visual
            </span>
          </div>
        </figure>
      </article>
    </li>
  )
}
