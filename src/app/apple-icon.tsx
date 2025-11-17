import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          padding: '40px',
        }}
      >
        {/* Top bar - Teal to Blue */}
        <div
          style={{
            width: '100px',
            height: '20px',
            borderRadius: '10px',
            background: 'linear-gradient(90deg, #14b8a6 0%, #0ea5e9 100%)',
            marginBottom: '10px',
          }}
        />
        {/* Middle bar - Blue to Indigo */}
        <div
          style={{
            width: '85px',
            height: '20px',
            borderRadius: '10px',
            background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
            marginBottom: '10px',
            marginLeft: '-15px',
          }}
        />
        {/* Bottom bar - Purple */}
        <div
          style={{
            width: '70px',
            height: '20px',
            borderRadius: '10px',
            background: 'linear-gradient(90deg, #8b5cf6 0%, #a855f7 100%)',
            marginLeft: '-30px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}