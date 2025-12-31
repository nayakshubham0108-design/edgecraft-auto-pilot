"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search, Rocket, TrendingUp, Settings, BarChart } from "lucide-react"

interface Card {
  id: number
  contentType: 1 | 2 | 3 | 4 | 5
}

const cardData = {
  1: {
    title: "Audit",
    description: "Capture baseline metrics and identify opportunities",
    icon: Search,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  2: {
    title: "Pilot",
    description: "Run focused pilots and measure KPIs in real-time",
    icon: Rocket,
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  3: {
    title: "Scale",
    description: "Broaden coverage and optimize continuously",
    icon: TrendingUp,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  4: {
    title: "Optimize",
    description: "Fine-tune automations and harden SLAs",
    icon: Settings,
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  5: {
    title: "Analyze",
    description: "Track performance data and iterate strategies",
    icon: BarChart,
    gradient: "from-rose-500/20 to-red-500/20",
  },
}

const initialCards: Card[] = [
  { id: 1, contentType: 1 },
  { id: 2, contentType: 2 },
  { id: 3, contentType: 3 },
]

const positionStyles = [
  { scale: 1, y: 12 },
  { scale: 0.95, y: -16 },
  { scale: 0.9, y: -44 },
]

const exitAnimation = {
  y: 340,
  scale: 1,
  zIndex: 10,
}

const enterAnimation = {
  y: -16,
  scale: 0.9,
}

function CardContent({ contentType }: { contentType: 1 | 2 | 3 | 4 | 5 }) {
  const data = cardData[contentType]
  const Icon = data.icon

  return (
    <div className="flex flex-col gap-4 p-6 h-full">
      <div className={`h-32 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center`}>
        <Icon className="w-16 h-16 text-primary" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-foreground">{data.title}</span>
          <span className="text-sm text-muted-foreground">{data.description}</span>
        </div>
        <button className="flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors">
          Learn
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function AnimatedCard({
  card,
  index,
  isAnimating,
}: {
  card: Card
  index: number
  isAnimating: boolean
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      layout
      initial={initialAnim}
      animate={{ scale, y, zIndex }}
      exit={exitAnim}
      transition={{ type: "spring", stiffness: 200, damping: 25 }}
      className="absolute inset-0 rounded-2xl bg-card border border-border/50 shadow-xl overflow-hidden"
    >
      <CardContent contentType={card.contentType} />
    </motion.div>
  )
}

export default function AnimatedCardStack() {
  const [cards, setCards] = useState<Card[]>(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)

  const handleAnimate = () => {
    setIsAnimating(true)

    const nextContentType = ((cards[2].contentType % 5) + 1) as 1 | 2 | 3 | 4 | 5

    setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
    setNextId((prev) => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="relative h-[280px] w-full max-w-[320px]">
        <AnimatePresence mode="popLayout">
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard
              key={card.id}
              card={card}
              index={index}
              isAnimating={isAnimating}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleAnimate}
          className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
        >
          Next Phase
        </button>
      </div>
    </div>
  )
}
