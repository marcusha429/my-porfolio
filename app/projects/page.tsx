'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getProjects, type Project, type ProjectCategory } from '@/lib/database';
import './projects-details.css';

export default function ProjectsDetails() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch projects from database
    useEffect(() => {
        async function fetchProjects() {
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProjects();
    }, []);

    const categories = [
        { id: 'all' as const, label: 'All Projects', icon: '📁' },
        { id: 'webapp' as const, label: 'Web Apps', icon: '🌐' },
        { id: 'mobile' as const, label: 'Mobile Apps', icon: '📱' },
        { id: 'ai' as const, label: 'AI/ML', icon: '🤖' },
        { id: 'uiux' as const, label: 'UI/UX', icon: '🎨' }
    ];

    const toggleExpand = (index: number) => {
        setExpandedProject(expandedProject === index ? null : index);
    };

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    const getProjectGlobalIndex = (filteredIndex: number) => {
        return projects.indexOf(filteredProjects[filteredIndex]);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading projects...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-8">
                <Link href="/porfolio#projects" className="back-btn">
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
                <p className="text-slate-400 text-lg mb-8">
                    Detailed overview of my technical projects and contributions
                </p>

                {/* Category Filter */}
                <div className="category-filters">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className={`category-filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span className="category-label">{category.label}</span>
                            <span className="category-count">
                                {category.id === 'all'
                                    ? projects.length
                                    : projects.filter(p => p.category === category.id).length
                                }
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-6 pb-20">
                <div className="space-y-8">
                    {filteredProjects.map((project, filteredIndex) => {
                        const globalIndex = getProjectGlobalIndex(filteredIndex);
                        return (
                            <div key={project.id} className={`project-card ${expandedProject === globalIndex ? 'expanded' : ''}`}>

                                {/* Card Header - Always Visible */}
                                <div className="project-card-header">
                                    <div className="project-header-content">
                                        <div className="project-title-row">
                                            <h2 className="project-card-title">{project.title}</h2>
                                            <span className="project-date">{project.date}</span>
                                        </div>
                                        <p className="project-short-desc">{project.short_description}</p>

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
                                    onClick={() => toggleExpand(globalIndex)}
                                >
                                    {expandedProject === globalIndex ? 'See Less' : 'See More'}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className={expandedProject === globalIndex ? 'rotate-180' : ''}
                                    >
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </button>

                                {/* Expanded Content */}
                                {expandedProject === globalIndex && (
                                    <div className="project-expanded-content">

                                        {/* Full Description */}
                                        <div className="project-section">
                                            <h3 className="section-heading">Description</h3>
                                            <p className="section-text">{project.full_description}</p>
                                        </div>

                                        {/* Collaborators */}
                                        {project.collaborators && project.collaborators.length > 0 && (
                                            <div className="project-section">
                                                <h3 className="section-heading">Team Collaboration</h3>
                                                <div className="collaborators-container">
                                                    <span className="collab-intro">Worked alongside:</span>
                                                    <div className="collaborators-list">
                                                        {project.collaborators.map((collab, i) => (
                                                            <div key={i} className="collaborator-badge">
                                                                <div className="collaborator-avatar">
                                                                    {collab.split(' ').map(n => n[0]).join('')}
                                                                </div>
                                                                <span className="collaborator-name">{collab}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

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
                                        {project.video_url && (
                                            <div className="project-section">
                                                <h3 className="section-heading">Demo Video</h3>
                                                <div className="video-container">
                                                    <iframe
                                                        src={project.video_url}
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
                                            {project.website_url && (
                                                <a
                                                    href={project.website_url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="action-btn btn-website"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <circle cx="12" cy="12" r="10" />
                                                        <line x1="2" y1="12" x2="22" y2="12" />
                                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                                    </svg>
                                                    View Website
                                                </a>
                                            )}

                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="action-btn btn-github"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                                </svg>
                                                View on GitHub
                                            </a>

                                            {project.report_url && (
                                                <a
                                                    href={project.report_url}
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
                        )
                    })}
                </div>
            </div>
        </div>
    );
}