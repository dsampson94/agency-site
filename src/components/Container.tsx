import clsx from 'clsx'
import { ReactNode, ElementType } from 'react'

interface ContainerProps {
  as?: ElementType
  className?: string
  children: ReactNode
}

export function Container({ as, className, children }: ContainerProps) {
  let Component = as ?? 'div'

  return (
    <Component className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}