'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  target,
  suffix = '',
  prefix = '',
  duration = 2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px' })
  const [displayValue, setDisplayValue] = useState(target)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true
      setDisplayValue(0)
      const controls = animate(0, target, {
        duration,
        ease: 'easeOut',
        onUpdate(value) {
          setDisplayValue(Math.round(value))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, target, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  )
}
