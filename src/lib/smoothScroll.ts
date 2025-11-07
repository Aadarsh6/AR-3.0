import { useEffect } from 'react'
import Lenis from 'lenis'

export function useSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Request animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Store lenis instance globally for manual control
    ;(window as any).lenis = lenis

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])
}

// Export for manual scroll control
export function scrollTo(target: string | number, options?: any) {
  const lenis = (window as any).lenis as Lenis | undefined
  if (lenis) {
    lenis.scrollTo(target, options)
  }
}