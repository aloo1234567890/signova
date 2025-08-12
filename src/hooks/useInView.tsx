import { useEffect, useRef, useState } from "react"

interface InViewOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

// Simple IntersectionObserver hook for scroll-reveal animations
export function useInView(options: InViewOptions = { threshold: 0.2, once: true }) {
  const { root = null, rootMargin, threshold = 0.2, once = true } = options
  const ref = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { root, rootMargin, threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [root, rootMargin, JSON.stringify(threshold), once])

  return [ref, inView] as const
}
