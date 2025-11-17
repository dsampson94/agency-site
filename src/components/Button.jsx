import Link from 'next/link'
import clsx from 'clsx'

export function Button({ invert = false, className, children, onClick, ...props }) {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition',
    invert
      ? 'bg-white text-gray-900 hover:bg-gray-100'
      : 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600',
  )

  let inner = <span className="relative top-px">{children}</span>

  
  if (typeof props.href === 'undefined') {
    return (
      <button className={className} onClick={onClick} {...props}>
        {inner}
      </button>
    )
  }

  // For external links with onClick handlers, use regular anchor tag
  if (props.target === '_blank' && onClick) {
    return (
      <a className={className} onClick={onClick} {...props}>
        {inner}
      </a>
    )
  }

  return (
    <Link className={className} {...props}>
      {inner}
    </Link>
  )
}
