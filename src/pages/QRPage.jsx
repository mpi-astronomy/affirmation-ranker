import { useMemo, useEffect } from 'react'
import { Box } from '@mui/material'
import qrCode from '../assets/qrCode.svg'

import boat1 from '../assets/boat-sailboat-sailing-svgrepo-com.svg'
import boat2 from '../assets/boat-toy-boat-svgrepo-com.svg'
import cloud from '../assets/cloud-svgrepo-com.svg'
import fish0 from '../assets/fish-svgrepo-com.svg'
import fish1 from '../assets/fish-svgrepo-com (1).svg'
import fish2 from '../assets/fish-svgrepo-com (2).svg'
import fish3 from '../assets/fish-svgrepo-com (3).svg'
import fish4 from '../assets/fish-svgrepo-com (4).svg'
import fish5 from '../assets/fish-svgrepo-com (5).svg'
import fishSchool from '../assets/fishes-fish-svgrepo-com.svg'
import octopus from '../assets/octopus-svgrepo-com.svg'
import shark from '../assets/shark-svgrepo-com.svg'
import anglerFish from '../assets/angler-fish-svgrepo-com (1).svg'
import squid from '../assets/squid-svgrepo-com.svg'

const SURFACE_PCT = 14
const CREATURE_ASSETS = [fish0, fish1, fish2, fish3, fish4, fish5, fishSchool, octopus, squid]
const BOAT_ASSETS = [boat1, boat2]

function rand(min, max) { return min + Math.random() * (max - min) }

function QRPage() {
  useEffect(() => {
    document.body.style.background = 'transparent'
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.background = ''
      document.body.style.overflow = ''
    }
  }, [])

  const creatures = useMemo(() =>
    Array.from({ length: 12 }, () => ({
      src: CREATURE_ASSETS[Math.floor(Math.random() * CREATURE_ASSETS.length)],
      x: rand(2, 90),
      y: rand(SURFACE_PCT + 4, 92),
      size: rand(28, 80),
      flip: Math.random() > 0.5,
      opacity: rand(0.5, 0.95),
    }))
  , [])

  const boats = useMemo(() =>
    Array.from({ length: 4 }, () => ({
      src: BOAT_ASSETS[Math.floor(Math.random() * 2)],
      x: rand(3, 85),
      size: rand(45, 80),
    }))
  , [])

  const clouds = useMemo(() =>
    Array.from({ length: 4 }, () => ({
      x: rand(2, 85),
      y: rand(0.5, 4),
      size: rand(40, 65),
    }))
  , [])

  return (
    <>
      {/* Ocean background */}
      <Box sx={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        zIndex: -1, overflow: 'hidden',
        background: `linear-gradient(to bottom,
          #dde8f2 0%,
          #c2d6e8 ${SURFACE_PCT - 2}%,
          #5a8898 ${SURFACE_PCT}%,
          #3d6878 ${SURFACE_PCT + 6}%,
          #274858 45%,
          #162530 100%)`,
      }}>
        <Box sx={{
          position: 'absolute', left: 0, right: 0,
          top: `${SURFACE_PCT}%`, height: 3,
          background: 'rgba(255,255,255,0.55)',
        }} />

        {clouds.map((c, i) => (
          <img key={`c${i}`} src={cloud} alt="" style={{
            position: 'absolute',
            left: `${c.x}%`, top: `${c.y}%`,
            width: c.size, opacity: 0.8,
            pointerEvents: 'none',
          }} />
        ))}

        {boats.map((b, i) => (
          <img key={`b${i}`} src={b.src} alt="" style={{
            position: 'absolute',
            left: `${b.x}%`,
            top: `${SURFACE_PCT}%`,
            transform: 'translateY(-88%)',
            width: b.size,
            pointerEvents: 'none',
          }} />
        ))}

        {creatures.map((c, i) => (
          <img key={`f${i}`} src={c.src} alt="" style={{
            position: 'absolute',
            left: `${c.x}%`, top: `${c.y}%`,
            width: c.size, opacity: c.opacity,
            transform: c.flip ? 'scaleX(-1)' : 'none',
            pointerEvents: 'none',
          }} />
        ))}

        <img src={shark} alt="" style={{
          position: 'absolute',
          right: '1%', bottom: 0,
          width: 220, opacity: 0.9,
          transform: 'translateY(40%)',
          pointerEvents: 'none',
        }} />

        <img src={anglerFish} alt="" style={{
          position: 'absolute',
          left: '30%', bottom: 0,
          width: 220, opacity: 0.9,
          transform: 'translateY(25%)',
          pointerEvents: 'none',
        }} />
      </Box>

      {/* QR code centered on screen */}
      <Box sx={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10,
      }}>
        <Box sx={{
          bgcolor: 'white',
          borderRadius: 4,
          p: 3,
          boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
        }}>
          <img src={qrCode} alt="QR Code" style={{ display: 'block', width: 'min(70vw, 70vh)', height: 'auto' }} />
        </Box>
      </Box>
    </>
  )
}

export default QRPage
