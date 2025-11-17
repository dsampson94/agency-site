import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '6px',
        }}
      >
        {/* Top bar - Teal to Blue */}
        <div
          style={{
            width: '20px',
            height: '4px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #14b8a6 0%, #0ea5e9 100%)',
            marginBottom: '2px',
          }}
        />
        {/* Middle bar - Blue to Indigo */}
        <div
          style={{
            width: '17px',
            height: '4px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            marginBottom: '2px',
            marginLeft: '-3px',
          }}
        />
        {/* Bottom bar - Purple */}
        <div
          style={{
            width: '14px',
            height: '4px',
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',
            marginLeft: '-6px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}