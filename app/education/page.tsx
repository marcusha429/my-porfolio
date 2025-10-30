'use client';

import Link from 'next/link';
import './education-details.css';

export default function EducationDetails() {
    const schools = [
        {
            name: "Saigon University",
            period: "2018 - 2019",
            location: "Ho Chi Minh City, Vietnam",
            major: "Applied Mathematics",
            degree: "",
            image: "/SGU.jpeg",
            courses: [
                "Calculus I & II",
                "Linear Algebra",
                "Probability & Statistics",
                "Intro to C Programming",
                "MATLAB"
            ]
        },
        {
            name: "San Jose City College / Evergreen Valley College",
            period: "2020 - 2023",
            location: "San Jose, California",
            major: "Computer Science",
            degree: "",
            image: "/SJCC.jpeg",
            courses: [
                "Multivariable Calculus",
                "Differential Equations",
                "Discrete Mathematics",
                "C/C++ Programming",
                "Data Structures",
                "Java Programming",
                "Object-Oriented Programming",
            ]
        },
        {
            name: "University of California, Irvine",
            period: "2023 - 2025",
            location: "Irvine, California",
            major: "Computer Science",
            degree: "Bachelor of Science in Computer Science - Specialization in Artificial Intelligence",
            image: "/UCI.jpg",
            current: true,
            courses: [
                "Intro to Software Emgineering",
                "Human-Computer Interaction",
                "Requirements Analysis and Engineering",

                "Advanced Data Structures Implementation and Analysis",
                "Algorithms Design and Analysis",

                "Intro to Database Management",

                "Intro to Computer Organization",
                "Principles in Systems Design",
                "Computer Networks",

                "Statistics",

                "Machine Learning/Data Mining",
                "Intro to Artificial Intelligence",
            ],
            project_courses: [
                "Information Retrieval",
                "Next Generation Search Systems",
                "Project in AI",
                "Project in Systems Design",
            ],
        }
    ];

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
                    Education Details
                </h1>
                <p className="text-slate-400 text-lg">
                    My complete academic journey with coursework
                </p>
            </div>

            {/* Schools Grid */}
            <div className="container mx-auto px-6 pb-20">
                <div className="space-y-16">
                    {schools.map((school, index) => (
                        <div key={index} className="school-detail-card">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left Side - Image */}
                                <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group flex items-center">
                                    <img
                                        src={school.image}
                                        alt={school.name}
                                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${school.name.includes('San Jose') ? 'object-[center_25%]' : 'object-center'
                                            }`}
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop';
                                        }}
                                    />
                                    {school.current && (
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
                                    {school.degree && (
                                        <p className="school-degree">{school.degree}</p>
                                    )}
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