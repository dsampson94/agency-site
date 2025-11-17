import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
      <defs>
        {/* Horizontal gradient for the stacked bars - matching the image exactly */}
        <linearGradient id={`${id}-gradient-top`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d9ff" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id={`${id}-gradient-middle`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id={`${id}-gradient-bottom`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      
      {/* Rounded square background - dark navy blue */}
      <rect 
        x="2" 
        y="2" 
        width="44" 
        height="44" 
        rx="12"
        fill="#1a2332"
        className="transition-all duration-300"
      />
      
      {/* Three centered pill-shaped bars with vibrant gradients */}
      <g className="transition-all duration-300">
        {/* Top bar - Cyan to Blue gradient - longest */}
        <rect 
          x="11" 
          y="13" 
          width="26" 
          height="5.5" 
          rx="2.75"
          fill={`url(#${id}-gradient-top)`}
          className="transition-all duration-300"
        />
        
        {/* Middle bar - Blue to Purple gradient - medium */}
        <rect 
          x="11" 
          y="21.25" 
          width="22" 
          height="5.5" 
          rx="2.75"
          fill={`url(#${id}-gradient-middle)`}
          className="transition-all duration-300"
        />
        
        {/* Bottom bar - Purple to Pink gradient - shortest */}
        <rect 
          x="11" 
          y="29.5" 
          width="18" 
          height="5.5" 
          rx="2.75"
          fill={`url(#${id}-gradient-bottom)`}
          className="transition-all duration-300"
        />
      </g>
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
      viewBox="0 0 280 48"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      
      {/* SuperStack text - darker, bold */}
      <text
        x="60"
        y="28"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-gray-900'
        )}
        style={{
          fontSize: '24px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '700',
          letterSpacing: '-0.5px',
        }}
      >
        SuperStack
      </text>
      
      {/* Subtitle text - "Development Studio" in gray */}
      <text
        x="60"
        y="40"
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white/80' : 'fill-gray-500'
        )}
        style={{
          fontSize: '11px',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '500',
          letterSpacing: '0.5px',
        }}
      >
        Development Studio
      </text>
    </svg>
  )
}
