'use client';

import { useState } from 'react';
import Link from 'next/link';
import '../app/projects.css';

export default function ProjectsCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard. Built with modern web technologies to deliver a seamless shopping experience.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
            tags: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        {
            title: "AI Task Manager",
            description: "An intelligent task management application powered by machine learning that predicts task priority, suggests optimal scheduling, and automates routine workflow decisions.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&h=800&fit=crop",
            tags: ["Python", "TensorFlow", "FastAPI", "React"]
        },
        {
            title: "Real-Time Chat Application",
            description: "A modern messaging platform with end-to-end encryption, group chats, file sharing, and real-time notifications. Features a responsive design that works seamlessly across all devices.",
            image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1200&h=800&fit=crop",
            tags: ["WebSocket", "Node.js", "React", "Redis"]
        },
        {
            title: "Portfolio Analytics Dashboard",
            description: "A comprehensive analytics platform that visualizes website traffic, user behavior, and conversion metrics with interactive charts and real-time data processing.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            tags: ["Next.js", "D3.js", "PostgreSQL", "GraphQL"]
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const getPrevIndex = () => (currentSlide - 1 + projects.length) % projects.length;
    const getNextIndex = () => (currentSlide + 1) % projects.length;

    return (
        <div className="carousel-container">
            {/* Carousel Wrapper */}
            <div className="carousel-wrapper-3d">

                {/* Previous Slide (Left, Blurred) */}
                <div className="carousel-slide-3d carousel-slide-prev" onClick={prevSlide}>
                    <div className="slide-content-3d">
                        <div className="slide-text">
                            <h2 className="slide-title">{projects[getPrevIndex()].title}</h2>
                        </div>
                        <div className="slide-image-container">
                            <img
                                src={projects[getPrevIndex()].image}
                                alt={projects[getPrevIndex()].title}
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
                            <h2 className="slide-title">{projects[currentSlide].title}</h2>
                            <p className="slide-description">{projects[currentSlide].description}</p>

                            {/* Tags */}
                            <div className="slide-tags">
                                {projects[currentSlide].tags.map((tag, i) => (
                                    <span key={i} className="slide-tag">{tag}</span>
                                ))}
                            </div>

                            {/* See Details Button */}
                            <Link href="/projects" className="slide-detail-btn">
                                See Details
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </Link>
                        </div>

                        {/* Right Side - Image */}
                        <div className="slide-image-container">
                            <img
                                src={projects[currentSlide].image}
                                alt={projects[currentSlide].title}
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
                            <h2 className="slide-title">{projects[getNextIndex()].title}</h2>
                        </div>
                        <div className="slide-image-container">
                            <img
                                src={projects[getNextIndex()].image}
                                alt={projects[getNextIndex()].title}
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
                {projects.map((_, index) => (
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