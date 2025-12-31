"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
  duration?: string
  image?: string
}

interface UniqueAccordionProps {
  items: AccordionItem[]
}

export function UniqueAccordion({ items }: UniqueAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-1">
        {items.map((item, index) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id
          const isLast = index === items.length - 1

          return (
            <motion.div 
              key={item.id} 
              className="relative rounded-xl transition-all duration-300"
              animate={{
                boxShadow: isActive 
                  ? "0 0 30px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.1)" 
                  : isHovered 
                    ? "0 0 20px hsl(var(--primary) / 0.2), 0 0 40px hsl(var(--primary) / 0.05)" 
                    : "0 0 0px hsl(var(--primary) / 0)",
                backgroundColor: isActive 
                  ? "hsl(var(--primary) / 0.05)" 
                  : isHovered 
                    ? "hsl(var(--primary) / 0.02)" 
                    : "transparent",
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full group relative"
                initial={false}
              >
                <motion.div 
                  className="flex items-center gap-6 py-6 px-4"
                  animate={{
                    x: isHovered && !isActive ? 8 : 0,
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  {/* Number with animated circle */}
                  <div className="relative">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary/20"
                      initial={false}
                      animate={{
                        scale: isActive ? 1.2 : isHovered ? 1.1 : 1,
                        opacity: isActive ? 1 : isHovered ? 0.7 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <span
                      className={`relative z-10 text-lg font-medium transition-colors duration-200 ${
                        isActive ? "text-primary" : "text-muted-foreground"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <span
                    className={`text-2xl md:text-3xl font-bold transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-foreground group-hover:text-primary/80"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Duration badge */}
                  {item.duration && (
                    <span className={`ml-auto text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200 ${
                      isActive ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {item.duration}
                    </span>
                  )}

                  {/* Animated indicator */}
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-border"
                  initial={false}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-primary"
                  initial={false}
                  animate={{ width: isActive ? "100%" : isHovered ? "50%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                  <div className="px-4 pb-6 pt-2 pl-16 flex flex-col md:flex-row gap-6">
                    <p className="text-muted-foreground text-lg leading-relaxed flex-1">
                      {item.content}
                    </p>
                    {item.image && (
                      <motion.div 
                        className="w-full md:w-64 h-40 rounded-lg overflow-hidden flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    )}
                  </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
