'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProjects, type Project } from '@/lib/database';
import '../app/projects.css';

export default function ProjectsCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects from database
    useEffect(() => {
        async function fetchProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
                setCurrentSlide(0); // Set to 0 after data loads
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    // Early return for loading state
    if (loading) {
        return (
            <div className="carousel-container">
                <div className="text-center text-white py-20">Loading projects...</div>
            </div>
        );
    }

    // Create simple project cards for carousel (only show first 4)
    const carouselProjects = projects.slice(0, 4).map(p => ({
        title: p.title,
        description: p.short_description,
        image: p.images[0],
        tags: [...p.languages.slice(0, 2), p.frameworks[0]]
    }));

    if (carouselProjects.length === 0) {
        return (
            <div className="carousel-container">
                <div className="text-center text-white py-20">No projects found.</div>
            </div>
        );
    }

    // Safety check - make sure currentSlide is valid
    if (!carouselProjects[currentSlide]) {
        return (
            <div className="carousel-container">
                <div className="text-center text-white py-20">Loading...</div>
            </div>
        );
    }
    const getPrevIndex = () => {
        return currentSlide === 0 ? carouselProjects.length - 1 : currentSlide - 1;
    };

    const getNextIndex = () => {
        return currentSlide === carouselProjects.length - 1 ? 0 : currentSlide + 1;
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(getNextIndex());
        setTimeout(() => setIsAnimating(false), 800);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(getPrevIndex());
        setTimeout(() => setIsAnimating(false), 800);
    };

    const goToSlide = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentSlide(index);
        setTimeout(() => setIsAnimating(false), 800);
    };

    return (
        <div className="carousel-container">
            {/* Carousel Wrapper */}
            <div className="carousel-wrapper-3d">

                {/* Previous Slide (Left, Blurred) */}
                <div className="carousel-slide-3d carousel-slide-prev" onClick={prevSlide}>
                    <div className="slide-content-3d">
                        <div className="slide-text">
                            <h2 className="slide-title">{carouselProjects[getPrevIndex()].title}</h2>
                        </div>
                        <div className="slide-image-container">
                            <img
                                src={carouselProjects[getPrevIndex()].image}
                                alt={carouselProjects[getPrevIndex()].title}
                                className="slide-image"
                            />
                            <div className="slide-image-overlay"></div>
                        </div>
                    </div>
                </div>

                {/* Current Slide (Center, Focused) */}
                <div className="carousel-slide-3d carousel-slide-current">
                    <div className="slide-content">
                        {/* Left Side - Content */}
                        <div className="slide-text">
                            <h2 className="slide-title">{carouselProjects[currentSlide].title}</h2>
                            <p className="slide-description">{carouselProjects[currentSlide].description}</p>

                            {/* Tags */}
                            <div className="slide-tags">
                                {carouselProjects[currentSlide].tags.map((tag, i) => (
                                    <span key={i} className="slide-tag">{tag}</span>
                                ))}
                            </div>

                            {/* See Details Button */}
                            <Link href="/projects" className="slide-detail-btn">
                                See All Projects
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right Side - Image */}
                        <div className="slide-image-container">
                            <img
                                src={carouselProjects[currentSlide].image}
                                alt={carouselProjects[currentSlide].title}
                                className="slide-image"
                            />
                            <div className="slide-image-overlay"></div>
                        </div>
                    </div>
                </div>

                {/* Next Slide (Right, Blurred) */}
                <div className="carousel-slide-3d carousel-slide-next" onClick={nextSlide}>
                    <div className="slide-content-3d">
                        <div className="slide-text">
                            <h2 className="slide-title">{carouselProjects[getNextIndex()].title}</h2>
                        </div>
                        <div className="slide-image-container">
                            <img
                                src={carouselProjects[getNextIndex()].image}
                                alt={carouselProjects[getNextIndex()].title}
                                className="slide-image"
                            />
                            <div className="slide-image-overlay"></div>
                        </div>
                    </div>
                </div>

                {/* Navigation Arrows */}
                <button
                    className="carousel-arrow carousel-arrow-left"
                    onClick={prevSlide}
                    aria-label="Previous slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <button
                    className="carousel-arrow carousel-arrow-right"
                    onClick={nextSlide}
                    aria-label="Next slide"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>

            {/* Navigation Dots */}
            <div className="carousel-dots">
                {carouselProjects.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}