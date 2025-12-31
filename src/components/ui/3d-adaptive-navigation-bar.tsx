import React, { useState, useRef, useEffect } from 'react'
import { motion, useSpring, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  href: string
}

interface PillBaseProps {
  items: NavItem[]
  onNavigate?: (href: string) => void
}

export const PillBase: React.FC<PillBaseProps> = ({ items, onNavigate }) => {
  const [activeSection, setActiveSection] = useState(items[0]?.label || '')
  const [expanded, setExpanded] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const prevSectionRef = useRef(items[0]?.label || '')

  const pillWidth = useSpring(140, { stiffness: 220, damping: 25, mass: 1 })

  useEffect(() => {
    if (hovering) {
      setExpanded(true)
      pillWidth.set(Math.min(items.length * 120 + 60, 500))
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    } else {
      hoverTimeoutRef.current = setTimeout(() => {
        setExpanded(false)
        pillWidth.set(140)
      }, 600)
    }

    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [hovering, pillWidth, items.length])

  const handleMouseEnter = () => {
    setHovering(true)
  }

  const handleMouseLeave = () => {
    setHovering(false)
  }

  const handleSectionClick = (item: NavItem) => {
    setIsTransitioning(true)
    prevSectionRef.current = item.label
    setActiveSection(item.label)
    setHovering(false)
    
    if (onNavigate) {
      onNavigate(item.href)
    }
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 400)
  }

  const activeItem = items.find(item => item.label === activeSection)

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: pillWidth }}
      className="relative h-12 rounded-full cursor-pointer overflow-hidden bg-gradient-to-b from-white/95 via-white/90 to-white/80 dark:from-zinc-800/95 dark:via-zinc-800/90 dark:to-zinc-900/80 shadow-[0_8px_32px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_0_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_2px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.2)]"
    >
      {/* Primary top edge ridge */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px] rounded-t-full"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.95) 20%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.95) 80%, transparent 100%)',
        }}
      />
      
      {/* Top hemisphere light catch */}
      <div 
        className="absolute top-[1px] left-[10%] right-[10%] h-[6px] rounded-full opacity-60"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.8) 0%, transparent 100%)',
        }}
      />
      
      {/* Directional light - top left */}
      <div 
        className="absolute top-[2px] left-[5%] w-[30%] h-[10px] rounded-full opacity-40"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.9) 0%, transparent 70%)',
        }}
      />
      
      {/* Premium gloss reflection */}
      <div 
        className="absolute top-[3px] left-[15%] right-[15%] h-[14px] rounded-full opacity-35 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
        }}
      />
      
      {/* Secondary gloss accent - only show when expanded */}
      {expanded && (
        <div 
          className="absolute top-[8px] left-[25%] w-[15%] h-[6px] rounded-full opacity-20 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
          }}
        />
      )}
      
      {/* Left edge illumination - only show when expanded */}
      {expanded && (
        <div 
          className="absolute top-[15%] bottom-[25%] left-0 w-[2px] opacity-25 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.9) 70%, transparent 100%)',
          }}
        />
      )}
      
      {/* Right edge shadow - only show when expanded */}
      {expanded && (
        <div 
          className="absolute top-[20%] bottom-[30%] right-0 w-[2px] opacity-15 pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.3) 70%, transparent 100%)',
          }}
        />
      )}
      
      {/* Bottom curvature - deep shadow */}
      <div 
        className="absolute bottom-0 left-[5%] right-[5%] h-[8px] rounded-b-full opacity-20 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 100%)',
        }}
      />

      {/* Bottom edge contact shadow */}
      <div 
        className="absolute -bottom-[1px] left-[10%] right-[10%] h-[1px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 20%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.5) 80%, transparent 100%)',
        }}
      />

      {/* Inner diffuse glow */}
      <div 
        className="absolute inset-[4px] rounded-full opacity-8 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)',
        }}
      />
      
      {/* Micro edge definition */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 0 0.5px rgba(255,255,255,0.3), inset 0 0 0 1px rgba(0,0,0,0.03)',
        }}
      />

      {/* Navigation items container */}
      <div 
        className="relative h-full flex items-center justify-center overflow-hidden px-4"
      >
        {/* Collapsed state - show only active section */}
        {!expanded && (
          <div 
            className="flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {activeItem && (
                <motion.span
                  key={activeItem.label}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                  className="text-sm font-semibold text-foreground whitespace-nowrap"
                >
                  {activeItem.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Expanded state - show all sections with stagger */}
        {expanded && (
          <motion.div 
            className="flex items-center justify-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {items.map((item, index) => {
              const isActive = item.label === activeSection
              
              return (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  onClick={() => handleSectionClick(item)}
                  className={`relative cursor-pointer transition-all duration-200 text-sm px-3 py-2 rounded-full whitespace-nowrap ${
                    isActive 
                      ? 'font-semibold text-foreground bg-primary/10' 
                      : 'font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {item.label}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
