/** Technology chips. Scrolls as a marquee on small screens, wraps on desktop. */
export function StackList({ items }: { items: string[] }) {
  const chips = (hidden?: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 gap-1.5 pr-1.5 md:shrink md:flex-wrap md:pr-0 ${hidden ? 'md:hidden' : ''}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-[3px] border border-line bg-graphite px-2.5 py-1 font-mono text-[0.7rem] whitespace-nowrap text-bone/85"
        >
          {item}
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee overflow-hidden md:overflow-visible">
      <div className="marquee-track md:w-auto! md:animate-none!" style={{ ['--marquee-time' as string]: '28s' }}>
        {chips()}
        {chips(true)}
      </div>
    </div>
  )
}
