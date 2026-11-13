import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/sections/Hero'
import { Numbers } from '@/components/sections/Numbers'
import { TickerStrip } from '@/components/sections/TickerStrip'
import { Work } from '@/components/sections/Work'
import { Expertise } from '@/components/sections/Expertise'
import { About } from '@/components/sections/About'
import { Collaborate } from '@/components/sections/Collaborate'
import { Contact } from '@/components/sections/Contact'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { site } from '@/lib/site'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [{ title: `${site.name} | Robotics, AI, IoT & Software Engineering` }],
  }),
  component: HomePage,
})

function HomePage() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <Numbers />
      <TickerStrip />
      <Work />
      <Expertise />
      <About />
      <Collaborate />
      <Contact />
    </>
  )
}
