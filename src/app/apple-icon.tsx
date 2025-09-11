import { ImageResponse } from 'next/og'

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
          fontSize: 120,
          background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '20px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          boxShadow: '0 10px 40px rgba(147, 51, 234, 0.3)',
        }}
      >
        S
      </div>
    ),
    {
      width: 180,
      height: 180,
    }
  )
}
