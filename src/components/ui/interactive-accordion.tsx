"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
}

interface UniqueAccordionProps {
  items: AccordionItem[]
}

export function UniqueAccordion({ items }: UniqueAccordionProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id || null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-0">
        {items.map((item, index) => {
          const isActive = activeId === item.id
          const isHovered = hoveredId === item.id
          const isLast = index === items.length - 1

          return (
            <div key={item.id} className="relative">
              <motion.button
                onClick={() => setActiveId(isActive ? null : item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="w-full group relative"
                initial={false}
              >
                <div className="flex items-center py-6 md:py-8">
                  {/* Number with animated circle */}
                  <div className="relative mr-6 md:mr-8">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive || isHovered ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                    <span
                      className={`relative z-10 text-base md:text-lg font-bold w-12 h-12 md:w-14 md:h-14 flex items-center justify-center transition-colors duration-300 ${
                        isActive || isHovered ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <span
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-colors duration-300 ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Animated indicator */}
                  <div className="ml-auto pl-4">
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
                          isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Animated underline */}
                {!isLast && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-border/50"
                    initial={{ scaleX: 1 }}
                    animate={{ 
                      scaleX: isActive || isHovered ? 0.95 : 1,
                      opacity: isActive || isHovered ? 0.3 : 0.5
                    }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>

              {/* Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 pl-[4.5rem] md:pl-[5.5rem] text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </div>
  )
}
