import { useLayoutEffect, useState } from 'react'

export const MOBILE_BREAKPOINT = 1200
export const MD_BREAKPOINT = 768;

export function useWindowSize() {
    const [width, setWidth] = useState(0)
    useLayoutEffect(() => {
        function updateWidth() {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', updateWidth)
        updateWidth()
        return () => window.removeEventListener('resize', updateWidth)
    }, [])
    return { width, md: window.innerWidth < MD_BREAKPOINT, isMobile: window.innerWidth < MOBILE_BREAKPOINT }
}

