'use client'
import { clear } from 'console'
import '../app/intro.css';
import { useEffect, useRef, useState } from 'react'

type IntroCircleProps = {
    name?: string
    onClick?: () => void
}

export default function IntroCircle({ name = 'Marcus Ha', onClick }: IntroCircleProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // This runs after component appears on screen
        const container = containerRef.current
        if (!container) return

        const totalSegments = 60
        const segments: HTMLDivElement[] = []

        // Create 60 segments around the circle
        for (let i = 0; i < totalSegments; i++) {
            const segment = document.createElement('div')
            segment.className = 'segment'
            segment.style.transform = `rotate(${i * (360 / totalSegments)}deg)`;
            container.appendChild(segment)
            segments.push(segment)
        }

        // Animate segments lighting up
        let currentSegment = 0
        const interval = setInterval(() => {
            segments[currentSegment].classList.add('active')
            const fadeOutIndex = (currentSegment - 15 + totalSegments) % totalSegments;
            segments[fadeOutIndex].classList.remove('active');
            currentSegment = (currentSegment + 1) % totalSegments
        }, 50)

        // Clean up segments
        return () => {
            clearInterval(interval)
            container.innerHTML = ''
        }
    }, []) // [] means run once when component mounts

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000a1e] to-[#001432]">
            <div className={`relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] cursor-pointer transtion-transform duration-300 easy-out ${isHovered ? 'scale-110' : 'scale-100'}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={onClick}
            >
                <div
                    ref={containerRef}
                    className="absolute w-full h-full rounded-full"
                />
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-extralight text-[#c8e6ff] tracking-[5px] text-center">
                    {name}
                </h1>
            </div>
        </div>
    );
}