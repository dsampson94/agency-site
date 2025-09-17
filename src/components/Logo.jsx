import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <defs>
        <clipPath id={`${id}-circle`}>
          <circle cx="24" cy="24" r="22" />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE3831" />
          <stop offset="25%" stopColor="#002395" />
          <stop offset="50%" stopColor="#007A3D" />
          <stop offset="75%" stopColor="#FFB612" />
          <stop offset="100%" stopColor="#DE3831" />
        </linearGradient>
      </defs>
      
      {/* Outer ring with SA flag colors */}
      <circle cx="24" cy="24" r="22" fill={`url(#${id}-gradient)`} />
      
      {/* South African flag inspired Y-shaped design */}
      <g clipPath={`url(#${id}-circle)`}>
        {/* Blue triangle (top) */}
        <path
          d="M 6 6 L 42 6 L 24 24 Z"
          fill="#002395"
        />
        
        {/* Red triangle (right) */}
        <path
          d="M 42 6 L 42 42 L 24 24 Z"
          fill="#DE3831"
        />
        
        {/* Green triangle (bottom-right) */}
        <path
          d="M 42 42 L 24 42 L 24 24 Z"
          fill="#007A3D"
        />
        
        {/* Yellow triangle (bottom-left) */}
        <path
          d="M 24 42 L 6 42 L 24 24 Z"
          fill="#FFB612"
        />
        
        {/* Black triangle (left) */}
        <path
          d="M 6 42 L 6 6 L 24 24 Z"
          fill="#000000"
        />
        
        {/* White dividing lines (like SA flag) */}
        <path
          d="M 6 6 L 24 24 L 6 42"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M 24 6 L 24 24 L 42 42"
          fill="none"
          stroke="white"
          strokeWidth="1.5"
        />
      </g>
      
      {/* White inner circle for the S */}
      <circle cx="24" cy="24" r="14" fill="white" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
      
      {/* Large, bold S letter */}
      <text
        x="24"
        y="32"
        textAnchor="middle"
        className="fill-neutral-900"
        style={{
          fontSize: '28px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '900',
          letterSpacing: '-0.5px'
        }}
      >
        S
      </text>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 200 48"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="60"
        y="30"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950'
        )}
        style={{
          fontSize: '20px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '700',
          letterSpacing: '-0.5px'
        }}
      >
        SuperStack
      </text>
    </svg>
  )
}
