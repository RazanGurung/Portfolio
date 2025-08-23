"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: 'circle' | 'square' | 'triangle' | 'data'
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(50, Math.floor(canvas.width / 20))

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 4 + 2,
          opacity: Math.random() * 0.3 + 0.1,
          color: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b'][Math.floor(Math.random() * 5)],
          type: ['circle', 'square', 'triangle', 'data'][Math.floor(Math.random() * 4)] as Particle['type']
        })
      }
      
      particlesRef.current = particles
    }

    // Draw particle based on type
    const drawParticle = (particle: Particle) => {
      ctx.save()
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.strokeStyle = particle.color

      switch (particle.type) {
        case 'circle':
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          break

        case 'square':
          ctx.fillRect(
            particle.x - particle.size,
            particle.y - particle.size,
            particle.size * 2,
            particle.size * 2
          )
          break

        case 'triangle':
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y - particle.size)
          ctx.lineTo(particle.x - particle.size, particle.y + particle.size)
          ctx.lineTo(particle.x + particle.size, particle.y + particle.size)
          ctx.closePath()
          ctx.fill()
          break

        case 'data':
          // Data node visualization
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.stroke()
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2)
          ctx.fill()
          break
      }
      ctx.restore()
    }

    // Draw connections between nearby particles
    const drawConnections = () => {
      const particles = particlesRef.current
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
      ctx.lineWidth = 1

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.globalAlpha = (150 - distance) / 150 * 0.2
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1
    }

    // Draw neural network pattern
    const drawNeuralNetwork = () => {
      const centerX = canvas.width * 0.8
      const centerY = canvas.height * 0.2
      const time = Date.now() * 0.001

      ctx.strokeStyle = 'rgba(139, 92, 246, 0.15)'
      ctx.lineWidth = 1

      // Create pulsing neural network nodes
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2 + time
        const x = centerX + Math.cos(angle) * 60
        const y = centerY + Math.sin(angle) * 60
        
        ctx.beginPath()
        ctx.arc(x, y, 3 + Math.sin(time + i) * 1, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 92, 246, 0.3)'
        ctx.fill()

        // Connect to center
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      }

      // Center node
      ctx.beginPath()
      ctx.arc(centerX, centerY, 5 + Math.sin(time) * 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(139, 92, 246, 0.5)'
      ctx.fill()
    }

    // Draw data flow visualization
    const drawDataFlow = () => {
      const time = Date.now() * 0.002
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.2)'
      ctx.lineWidth = 2

      for (let i = 0; i < 3; i++) {
        const y = canvas.height * (0.3 + i * 0.2)
        const waveOffset = time + i * Math.PI * 0.5

        ctx.beginPath()
        for (let x = 0; x < canvas.width; x += 20) {
          const waveY = y + Math.sin(x * 0.01 + waveOffset) * 20
          if (x === 0) {
            ctx.moveTo(x, waveY)
          } else {
            ctx.lineTo(x, waveY)
          }
        }
        ctx.stroke()

        // Add flowing dots
        const dotX = (time * 50 + i * 100) % canvas.width
        const dotY = y + Math.sin(dotX * 0.01 + waveOffset) * 20
        
        ctx.beginPath()
        ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(16, 185, 129, 0.6)'
        ctx.fill()
      }
    }

    // Update particles
    const updateParticles = () => {
      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach(particle => {
        // Mouse interaction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const force = (100 - distance) / 100
          particle.vx -= (dx / distance) * force * 0.01
          particle.vy -= (dy / distance) * force * 0.01
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Boundary collision
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }

        // Opacity pulsing
        particle.opacity = 0.1 + Math.abs(Math.sin(Date.now() * 0.001 + particle.x * 0.01)) * 0.3
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background patterns
      drawDataFlow()
      drawNeuralNetwork()
      drawConnections()

      // Update and draw particles
      updateParticles()
      particlesRef.current.forEach(drawParticle)

      animationRef.current = requestAnimationFrame(animate)
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    }

    // Initialize and start animation
    initParticles()
    canvas.addEventListener('mousemove', handleMouseMove)
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      canvas.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  )
}