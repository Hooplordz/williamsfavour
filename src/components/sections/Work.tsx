import { projects } from '@/content/portfolio'
import { DoubleRule } from '../ui/DoubleRule'
import { Eyebrow } from '../ui/Eyebrow'
import { SplitHeading } from '../ui/SplitHeading'
import { WordWall } from '../ui/WordWall'
import { ProjectRow } from './ProjectRow'

export function Work() {
  return (
    <section id="work" className="relative isolate overflow-hidden bg-ink">
      <WordWall className="h-[28rem]" />
      <div className="relative mx-auto max-w-8xl px-4 py-16 md:px-6 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SplitHeading text="Selected work" className="text-[clamp(3.75rem,11vw,9.5rem)]" />
          <div data-reveal="up" className="max-w-sm pb-2">
            <Eyebrow accent>Robotics · AI · IoT · Software</Eyebrow>
            <p className="mt-3 text-sm leading-relaxed text-bone/70">
              The areas I build in. Entries marked “Sample placeholder” are templates waiting for real project details,
              links and evidence.
            </p>
          </div>
        </div>
        <ul className="mt-12">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i} total={projects.length} />
          ))}
        </ul>
        <DoubleRule />
      </div>
    </section>
  )
}
