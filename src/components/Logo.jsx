import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <defs>
        <clipPath id={`${id}-shield`}>
          <path d="M 24 4 C 18 4 12 6 8 10 C 8 20 12 32 24 44 C 36 32 40 20 40 10 C 36 6 30 4 24 4 Z" />
        </clipPath>
        <linearGradient id={`${id}-gradient`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE3831" />
          <stop offset="25%" stopColor="#002395" />
          <stop offset="50%" stopColor="#007A3D" />
          <stop offset="75%" stopColor="#FFB612" />
          <stop offset="100%" stopColor="#DE3831" />
        </linearGradient>
        <linearGradient id={`${id}-shield-bg`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      
      {/* Superman-style shield shape with SA colors */}
      <path 
        d="M 24 4 C 18 4 12 6 8 10 C 8 20 12 32 24 44 C 36 32 40 20 40 10 C 36 6 30 4 24 4 Z" 
        fill={`url(#${id}-shield-bg)`}
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      
      {/* South African flag inspired pattern within shield */}
      <g clipPath={`url(#${id}-shield)`}>
        {/* Blue section (top) */}
        <path
          d="M 8 10 L 40 10 L 24 20 Z"
          fill="#002395"
          opacity="0.8"
        />
        
        {/* Red section (right) */}
        <path
          d="M 40 10 L 40 28 L 24 20 Z"
          fill="#DE3831"
          opacity="0.8"
        />
        
        {/* Green section (bottom-right) */}
        <path
          d="M 40 28 L 24 36 L 24 20 Z"
          fill="#007A3D"
          opacity="0.8"
        />
        
        {/* Yellow section (bottom-left) */}
        <path
          d="M 24 36 L 8 28 L 24 20 Z"
          fill="#FFB612"
          opacity="0.8"
        />
        
        {/* Black section (left) */}
        <path
          d="M 8 28 L 8 10 L 24 20 Z"
          fill="#000000"
          opacity="0.7"
        />
        
        {/* White dividing lines */}
        <path
          d="M 8 10 L 24 20 L 8 28"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
        />
        <path
          d="M 24 10 L 24 20 L 40 28"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.6"
        />
      </g>
      
      {/* Superman-style diamond/shield background for S */}
      <path
        d="M 24 12 L 32 18 L 32 26 L 24 32 L 16 26 L 16 18 Z"
        fill="white"
        stroke="rgba(0,0,0,0.1)"
        strokeWidth="0.5"
        opacity="0.95"
      />
      
      {/* Stylized Superman-inspired S */}
      <path
        d="M 28 17 C 28 16 27 15 26 15 L 20 15 C 19 15 18 16 18 17 C 18 18 19 19 20 19 L 24 19 C 25 19 26 20 26 21 C 26 22 25 23 24 23 L 22 23 C 21 23 20 24 20 25 C 20 26 21 27 22 27 L 28 27 C 29 27 30 26 30 25 C 30 24 29 23 28 23 L 24 23 C 23 23 22 22 22 21 C 22 20 23 19 24 19 L 26 19 C 27 19 28 18 28 17 Z"
        className="fill-neutral-900"
        style={{
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
        }}
      />
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
      viewBox="0 0 220 48"
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
        y="32"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950'
        )}
        style={{
          fontSize: '22px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '800',
          letterSpacing: '-0.8px',
          filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.1))'
        }}
      >
        SuperStack
      </text>
      
      {/* Subtle superhero-style underline accent */}
      <path
        d="M 60 36 Q 140 34 160 36"
        fill="none"
        stroke={invert ? "rgba(255,255,255,0.3)" : "rgba(59,130,246,0.4)"}
        strokeWidth="2"
        strokeLinecap="round"
        className="transition-all duration-300"
      />
    </svg>
  )
}
