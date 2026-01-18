import { ReactNode, useRef, useState } from "react"
import { motion } from "framer-motion"

type GlassCardProps = {
  children: ReactNode
  className?: string
  glowColor?: "cyan" | "violet" | "pink" | "green"
  animate?: boolean
  delay?: number
}

export function GlassCard({ 
  children, 
  className = "", 
  glowColor = "cyan",
  animate = true,
  delay = 0
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const glowClass = {
    cyan: "hover:glow-cyan",
    violet: "hover:glow-violet",
    pink: "hover:glow-pink",
    green: "hover:glow-green"
  }[glowColor]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setMousePosition({ x, y })
  }

  const baseClasses = `glass p-6 rounded-lg neon-border-loop ${glowClass} transition-all duration-300 backdrop-blur-sm relative overflow-hidden ${className}`

  const content = (
    <>
      {/* Mouse spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 40%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </>
  )

  if (animate) {
    return (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, ease: "easeOut" }}
        className={`${baseClasses} group`}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {content}
      </motion.div>
    )
  }

  return (
    <div 
      ref={cardRef}
      className={`${baseClasses} group`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  )
}
