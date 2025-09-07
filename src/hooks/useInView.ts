import { useEffect, useRef, useState } from "react"

export function useInView(threshold = 0.2) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [inView, setInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // solo disparamos true al entrar
                    setInView(true)
                } else {
                    // opcional: reseteamos para que se pueda volver a disparar
                    setInView(false)
                }
            },
            { threshold }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [threshold])

    return { ref, inView }
}

