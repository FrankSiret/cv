import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let w, h

    function resize() {
      w = canvas.width  = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // ── particle factory ──────────────────────────────────────────
    function mkWaterDrop() {
      return {
        kind: 'drop',
        x:    Math.random() * w,
        y:    Math.random() * h,
        r:    Math.random() * 2.2 + 0.4,
        vx:   (Math.random() - 0.5) * 0.35,
        vy:   -(Math.random() * 0.55 + 0.12),
        wave: Math.random() * Math.PI * 2,
        wAmp: Math.random() * 0.35 + 0.1,
        wSpd: Math.random() * 0.018 + 0.008,
        a:    Math.random() * 0.38 + 0.06,
      }
    }

    function mkWindStreak() {
      return {
        kind:   'wind',
        x:      -60,
        y:      Math.random() * h,
        len:    Math.random() * 55 + 18,
        tilt:   (Math.random() - 0.5) * 0.18,
        vx:     Math.random() * 2.2 + 0.8,
        vy:     (Math.random() - 0.5) * 0.25,
        wave:   Math.random() * Math.PI * 2,
        wAmp:   Math.random() * 0.4 + 0.08,
        wSpd:   Math.random() * 0.025 + 0.012,
        a:      Math.random() * 0.28 + 0.04,
      }
    }

    function mkBubble() {
      return {
        kind: 'bubble',
        x:    Math.random() * w,
        y:    h + 20,
        r:    Math.random() * 5 + 2,
        vx:   (Math.random() - 0.5) * 0.5,
        vy:   -(Math.random() * 0.4 + 0.1),
        wave: Math.random() * Math.PI * 2,
        wAmp: Math.random() * 0.8 + 0.3,
        wSpd: Math.random() * 0.015 + 0.007,
        a:    Math.random() * 0.18 + 0.04,
      }
    }

    const count   = Math.min(Math.floor(w / 14), 80)
    const wCount  = Math.floor(count * 0.3)
    const bCount  = Math.floor(count * 0.12)
    const dCount  = count - wCount - bCount

    const particles = [
      ...Array.from({ length: dCount }, mkWaterDrop),
      ...Array.from({ length: wCount }, mkWindStreak),
      ...Array.from({ length: bCount }, mkBubble),
    ]

    // ── draw loop ─────────────────────────────────────────────────
    function draw() {
      ctx.clearRect(0, 0, w, h)

      particles.forEach(p => {
        p.wave += p.wSpd
        ctx.save()
        ctx.globalAlpha = p.a

        if (p.kind === 'drop') {
          p.x += p.vx + Math.sin(p.wave) * p.wAmp
          p.y += p.vy
          if (p.y < -10)            { Object.assign(p, mkWaterDrop()); p.y = h + 10 }
          if (p.x < -20 || p.x > w + 20) { Object.assign(p, mkWaterDrop()); p.x = Math.random() * w }

          const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 2.5)
          g.addColorStop(0,   'rgba(120, 235, 255, 1)')
          g.addColorStop(0.4, 'rgba(0,  185, 225, 0.7)')
          g.addColorStop(1,   'rgba(0,  130, 190, 0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2)
          ctx.fillStyle = g
          ctx.fill()

        } else if (p.kind === 'wind') {
          p.x  += p.vx
          p.y  += p.vy + Math.sin(p.wave) * p.wAmp
          if (p.x > w + 80) { Object.assign(p, mkWindStreak()); p.x = -60 }

          ctx.strokeStyle = 'rgba(180, 230, 255, 1)'
          ctx.lineWidth   = 0.9
          ctx.lineCap     = 'round'
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(p.x - Math.cos(p.tilt) * p.len, p.y - Math.sin(p.tilt) * p.len * 0.25)
          ctx.stroke()

        } else {
          // bubble
          p.x  += p.vx + Math.sin(p.wave) * p.wAmp
          p.y  += p.vy
          if (p.y < -20) { Object.assign(p, mkBubble()); p.y = h + 20 }

          ctx.strokeStyle = 'rgba(140, 215, 255, 1)'
          ctx.lineWidth   = 0.8
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
          ctx.stroke()
        }

        ctx.restore()
      })

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
