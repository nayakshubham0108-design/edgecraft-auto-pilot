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
    <div className="w-full max-w-2xl">
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
                  <div className="relative mr-4 md:mr-6">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: isActive || isHovered ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span
                      className={`relative z-10 text-sm font-medium w-10 h-10 flex items-center justify-center transition-colors duration-200 ${
                        isActive || isHovered ? "text-primary-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <span
                    className={`text-xl md:text-2xl font-semibold transition-colors duration-200 ${
                      isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </span>

                  {/* Animated indicator */}
                  <div className="ml-auto">
                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-6 h-6 flex items-center justify-center"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-5 h-5 transition-colors duration-200 ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-border"
                  style={{ display: isLast ? "none" : "block" }}
                />
              </motion.button>

              {/* Content */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 pl-14 md:pl-16 text-muted-foreground max-w-lg">
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
