'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getEducation, type Education } from '@/lib/database';
import './education-details.css';

export default function EducationDetails() {
    const [schools, setSchools] = useState<Education[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch education from database
    useEffect(() => {
        async function fetchEducation() {
            try {
                const data = await getEducation();
                setSchools(data);
            } catch (error) {
                console.error('Error fetching education:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchEducation();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-white text-xl">Loading education...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-8">
                <Link href="/porfolio#education" className="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to Portfolio
                </Link>
            </div>

            {/* Page Header */}
            <div className="container mx-auto px-6 py-12 text-center">
                <h1 className="text-5xl md:text-6xl font-light text-white mb-4">
                    My Learning Journey
                </h1>
                <p className="text-slate-400 text-lg">
                    My complete academic journey with coursework
                </p>
            </div>

            {/* Schools Grid */}
            <div className="container mx-auto px-6 pb-20">
                <div className="space-y-16">
                    {schools.map((school, index) => (
                        <div key={school.id} className="school-detail-card">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Side - Image */}
                                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group flex items-center">
                                    <img
                                        src={school.image_url}
                                        alt={school.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        style={school.image_position ? { objectPosition: school.image_position } : {}}
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop';
                                        }}
                                    />
                                    {school.status === 'current' && (
                                        <div className="absolute top-4 right-4 px-4 py-2 bg-blue-500/90 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                                            Current
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>

                                {/* Right Side - Details */}
                                <div className="flex flex-col justify-center">
                                    <div className="school-period">{school.period}</div>
                                    <h2 className="school-name">{school.name}</h2>
                                    <p className="school-major">{school.major}</p>
                                    <p className="school-location">
                                        📍 {school.location}
                                    </p>

                                    {/* Courses */}
                                    <div className="mt-6">
                                        <h3 className="courses-title">Related Courses</h3>
                                        <div className="courses-grid">
                                            {school.courses.map((course, i) => (
                                                <div key={i} className="course-tag">
                                                    {course}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {school.project_courses && school.project_courses.length > 0 && (
                                        <div className="mt-6">
                                            <h3 className="courses-title">Project Courses</h3>
                                            <div className="courses-grid">
                                                {school.project_courses.map((project, i) => (
                                                    <div key={i} className="course-tag">
                                                        {project}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}