'use client'
import '../app/intro.css';
import { useEffect, useRef, useState } from 'react'

type IntroCircleProps = {
    name?: string
    onClick?: () => void
}

export default function IntroCircle({ name = 'Marcus Ha', onClick }: IntroCircleProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const angleRef = useRef(0);
    const animationRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // Animation loop for the glow
        const animate = () => {
            // Update angle (clockwise rotation)
            angleRef.current = (angleRef.current + 2) % 360;

            // Update CSS custom property for the glow position
            container.style.setProperty('--glow-angle', `${angleRef.current}deg`);

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [])

    const handleClick = () => {
        setIsExiting(true);
        // Wait for animation to complete before navigating
        setTimeout(() => {
            if (onClick) onClick();
        }, 1000);
    };

    return (
        <div className={`min-h-screen max-h-screen flex items-center justify-center bg-gradient-to-br from-[#000a1e] to-[#001432] overflow-hidden ${isExiting ? 'exit-animation' : ''}`}>
            <div
                className={`relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] cursor-pointer transition-all duration-300 ease-out ${
                    isExiting ? 'exiting' : isHovered ? 'scale-110' : 'scale-100'
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleClick}
            >
                {/* Container for the animation */}
                <div
                    ref={containerRef}
                    className="circle-container"
                >
                    {/* Circle border */}
                    <div className="circle-border"></div>

                    {/* Glow effect that rotates around */}
                    <div className="circle-glow"></div>
                </div>

                {/* Name text in center */}
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-extralight text-[#c8e6ff] tracking-[5px] text-center z-10">
                    {name}
                </h1>
            </div>
        </div>
    );
}
