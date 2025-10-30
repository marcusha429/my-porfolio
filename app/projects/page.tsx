'use client';

import Link from 'next/link';
import { useState } from 'react';
import './projects-details.css';

export default function ProjectsDetails() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects = [
        {
            title: "E-Commerce Platform",
            date: "Apr 2024 - July 2024",
            shortDescription: "A full-stack e-commerce platform with real-time inventory management and secure payment processing.",
            fullDescription: "A comprehensive e-commerce solution built with modern web technologies. Features include real-time inventory tracking, secure payment gateway integration with Stripe, user authentication, shopping cart management, order history, and an intuitive admin dashboard for managing products and orders.",
            responsibilities: [
                "Designed and implemented the full-stack architecture",
                "Developed RESTful APIs for product and order management",
                "Integrated Stripe payment gateway for secure transactions",
                "Built responsive UI with React and Tailwind CSS",
                "Implemented user authentication and authorization"
            ],
            languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
            frameworks: ["React", "Node.js", "Express", "MongoDB"],
            deployment: "Deployed on Vercel (Frontend) and Railway (Backend)",
            images: [
                "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
            ],
            videoUrl: "",
            reportUrl: "/reports/ecommerce-report.pdf",
            githubUrl: "https://github.com/yourusername/ecommerce-platform"
        },
        {
            title: "AI Task Manager",
            date: "Jan 2024 - Mar 2024",
            shortDescription: "An intelligent task management application powered by machine learning.",
            fullDescription: "A smart task management system that uses machine learning to predict task priority, suggest optimal scheduling, and automate routine workflow decisions. The AI learns from user behavior and provides personalized recommendations.",
            responsibilities: [
                "Developed ML model for task priority prediction",
                "Built FastAPI backend for ML model inference",
                "Created React frontend with real-time updates",
                "Implemented natural language processing for task input",
                "Designed database schema for user preferences and task history"
            ],
            languages: ["Python", "JavaScript", "TypeScript"],
            frameworks: ["TensorFlow", "FastAPI", "React", "PostgreSQL"],
            deployment: "Docker containers on AWS EC2 with RDS database",
            images: [
                "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
            ],
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            reportUrl: "/reports/ai-task-manager-report.pdf",
            githubUrl: "https://github.com/yourusername/ai-task-manager"
        },
        {
            title: "Real-Time Chat Application",
            date: "Sep 2023 - Dec 2023",
            shortDescription: "A modern messaging platform with end-to-end encryption and real-time notifications.",
            fullDescription: "A secure, real-time messaging application featuring end-to-end encryption, group chats, file sharing, typing indicators, read receipts, and push notifications. Built with WebSocket for instant message delivery.",
            responsibilities: [
                "Implemented WebSocket server for real-time communication",
                "Developed end-to-end encryption using Web Crypto API",
                "Built chat UI with message history and media support",
                "Created notification system with service workers",
                "Optimized performance for 1000+ concurrent users"
            ],
            languages: ["JavaScript", "TypeScript"],
            frameworks: ["Socket.io", "Node.js", "React", "Redis", "MongoDB"],
            deployment: "Deployed on Heroku with Redis Cloud",
            images: [
                "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop"
            ],
            videoUrl: "",
            reportUrl: "",
            githubUrl: "https://github.com/yourusername/chat-app"
        },
        {
            title: "Portfolio Analytics Dashboard",
            date: "Jun 2023 - Aug 2023",
            shortDescription: "A comprehensive analytics platform with interactive visualizations.",
            fullDescription: "An advanced analytics dashboard that visualizes website traffic, user behavior patterns, conversion funnels, and performance metrics. Features real-time data processing, customizable charts, and export functionality.",
            responsibilities: [
                "Designed data visualization architecture with D3.js",
                "Built GraphQL API for efficient data queries",
                "Implemented real-time data streaming with WebSockets",
                "Created responsive dashboard with customizable widgets",
                "Optimized database queries for large datasets"
            ],
            languages: ["TypeScript", "JavaScript", "SQL"],
            frameworks: ["Next.js", "D3.js", "GraphQL", "PostgreSQL", "Prisma"],
            deployment: "Vercel with Supabase database",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
            ],
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            reportUrl: "/reports/analytics-dashboard-report.pdf",
            githubUrl: "https://github.com/yourusername/analytics-dashboard"
        }
    ];

    const toggleExpand = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-8">
                <Link href="/portfolio#projects" className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Portfolio
                </Link>
            </div>

            {/* Page Header */}
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
                    My Projects
                </h1>
                <p className="text-slate-400 text-lg">
                    Detailed overview of my technical projects and contributions
                </p>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-6 pb-20">
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card ${expandedProject === index ? 'expanded' : ''}`}>

                            {/* Card Header - Always Visible */}
                            <div className="project-card-header">
                                <div className="project-header-content">
                                    <div className="project-title-row">
                                        <h2 className="project-card-title">{project.title}</h2>
                                        <span className="project-date">{project.date}</span>
                                    </div>
                                    <p className="project-short-desc">{project.shortDescription}</p>

                                    {/* Quick Info */}
                                    <div className="project-quick-info">
                                        <span className="quick-info-badge">
                                            {project.languages.slice(0, 2).join(', ')}
                                        </span>
                                        <span className="quick-info-badge">
                                            {project.frameworks[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Thumbnail Image */}
                                <div className="project-thumbnail">
                                    <img src={project.images[0]} alt={project.title} />
                                </div>
                            </div>

                            {/* Expand/Collapse Button */}
                            <button
                                className="expand-btn"
                                onClick={() => toggleExpand(index)}
                            >
                                {expandedProject === index ? 'See Less' : 'See More'}
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className={expandedProject === index ? 'rotate-180' : ''}
                                >
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>

                            {/* Expanded Content */}
                            {expandedProject === index && (
                                <div className="project-expanded-content">

                                    {/* Full Description */}
                                    <div className="project-section">
                                        <h3 className="section-heading">Description</h3>
                                        <p className="section-text">{project.fullDescription}</p>
                                    </div>

                                    {/* Responsibilities */}
                                    <div className="project-section">
                                        <h3 className="section-heading">My Responsibilities</h3>
                                        <ul className="responsibility-list">
                                            {project.responsibilities.map((resp, i) => (
                                                <li key={i}>{resp}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technical Stack */}
                                    <div className="project-section">
                                        <div className="tech-grid">
                                            <div>
                                                <h4 className="tech-label">Languages</h4>
                                                <div className="tech-tags">
                                                    {project.languages.map((lang, i) => (
                                                        <span key={i} className="tech-tag">{lang}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="tech-label">Frameworks & Tools</h4>
                                                <div className="tech-tags">
                                                    {project.frameworks.map((fw, i) => (
                                                        <span key={i} className="tech-tag">{fw}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Deployment */}
                                    <div className="project-section">
                                        <h3 className="section-heading">Deployment</h3>
                                        <p className="deployment-text">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {project.deployment}
                                        </p>
                                    </div>

                                    {/* Images Gallery */}
                                    <div className="project-section">
                                        <h3 className="section-heading">Project Screenshots</h3>
                                        <div className={`image-gallery grid-${project.images.length}`}>
                                            {project.images.map((img, i) => (
                                                <div key={i} className="gallery-image">
                                                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Demo Video */}
                                    {project.videoUrl && (
                                        <div className="project-section">
                                            <h3 className="section-heading">Demo Video</h3>
                                            <div className="video-container">
                                                <iframe
                                                    src={project.videoUrl}
                                                    title={`${project.title} Demo`}
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="project-actions">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="action-btn btn-github"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                            </svg>
                                            View on GitHub
                                        </a>

                                        {project.reportUrl && (
                                            <a
                                                href={project.reportUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="action-btn btn-report"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                                    <polyline points="14 2 14 8 20 8" />
                                                    <line x1="16" y1="13" x2="8" y2="13" />
                                                    <line x1="16" y1="17" x2="8" y2="17" />
                                                    <polyline points="10 9 9 9 8 9" />
                                                </svg>
                                                Download Report
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}