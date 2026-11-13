import { Fragment, type ElementType } from 'react'
import { cn } from '@/lib/utils'

type Props = {
  text: string
  as?: ElementType
  className?: string
  id?: string
}

/** Large heading whose letters rise into place when scrolled into view. */
export function SplitHeading({ text, as: Tag = 'h2', className, id }: Props) {
  let l = 0
  return (
    <Tag id={id} aria-label={text} data-reveal="letters" className={cn('font-heading uppercase leading-[0.9]', className)}>
      <span aria-hidden="true">
        {text.split(' ').map((word, wi) => (
          <Fragment key={wi}>
            <span className="inline-block overflow-hidden whitespace-nowrap pb-[0.04em] align-bottom">
              {word.split('').map((ch, ci) => (
                <span key={ci} className="letter" style={{ ['--l' as string]: l++ }}>
                  {ch}
                </span>
              ))}
            </span>{' '}
          </Fragment>
        ))}
      </span>
    </Tag>
  )
}
