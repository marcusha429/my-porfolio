import GlassSearchBar from '@/components/GlassSearchBar';
import Link from 'next/link';
import '../education.css';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import '../contact.css';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050505] via-slate-850 to-[#151515] via-slate-950 relative overflow-hidden">
            {/* Abstract Background Effect */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-100 right-100 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
            </div>

            {/* Glass Search Bar */}
            <GlassSearchBar />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center pt-20 relative z-10">
                <div className="w-full flex flex-col md:flex-row items-center">
                    {/* Left Side - Image with Gradient Blend */}

                    <div className="relative w-full md:w-[45%] lg:w-[40%] h-[600px] md:h-screen">
                        <img
                            src="/I.png"
                            alt="Marcus Ha"
                            className="w-full h-full object-cover"
                        />
                        {/* Gradient overlay to blend with background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/80"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>

                    {/* Right Side - Text and Buttons */}
                    <div className="w-full md:w-[55%] lg:w-[60%] px-8 md:px-16 lg:px-24 py-12">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
                            Hi, I'm <span className="text-blue-400">Marcus</span>
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-10">
                            A Passionate Software Engineer
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#projects" className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition text-center text-lg">
                                View Resume
                            </a>
                            <a href="#contact" className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition text-center text-lg">
                                Contact Me
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other sections */}
            <section id="education" className="min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
                <div className="max-w-5xl w-full">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
                            Educational Journey
                        </h2>
                        <p className="text-slate-400 text-lg mb-6">
                            My academic path in computer science
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 hidden md:block"></div>
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-blue-400 to-blue-500 md:hidden"></div>

                        {/* Education Items */}
                        <div className="space-y-12 mb-12">

                            {/* Item 1 - Saigon University */}
                            <div className="education-timeline-item" data-side="left">
                                <div className="education-card active">
                                    <div className="education-year">2018 - 2019</div>
                                    <h3 className="education-title">Saigon University</h3>
                                    <p className="education-major">Applied Mathematics</p>
                                    <p className="education-location">Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>

                            {/* Item 2 - Community Colleges */}
                            <div className="education-timeline-item" data-side="right">
                                <div className="education-card active">
                                    <div className="education-year">2020 - 2023</div>
                                    <h3 className="education-title">San Jose City College</h3>
                                    <h3 className="education-title">Evergreen Valley College</h3>
                                    <p className="education-major">Computer Science</p>
                                    <p className="education-degree">Dean List</p>
                                    <p className="education-location">San Jose, California</p>
                                </div>
                            </div>

                            {/* Item 3 - UC Irvine */}
                            <div className="education-timeline-item" data-side="left">
                                <div className="education-card active">
                                    <div className="education-year">2023 - 2025</div>
                                    <div className="current-badge">Current</div>
                                    <h3 className="education-title">University of California, Irvine</h3>
                                    <p className="education-major">Computer Science</p>
                                    <p className="education-degree">Bachelor of Science in Computer Science - Specialization: Intelligence System</p>
                                    <p className="education-location">Irvine, California</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* See Detail */}
                    <div className="text-center mb-16">
                        <Link href="/education" className="section-detail-btn">
                            See Details
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="projects" className="min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
                <div className="max-w-7xl w-full">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-slate-400 text-lg">
                            Showcasing my best work and creative solutions
                        </p>
                    </div>

                    <ProjectsCarousel />
                </div>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
                <div className="max-w-4xl w-full">
                    {/* Section Title */}
                    <h2 className="text-5xl md:text-6xl font-light text-white mb-4 text-center">
                        Get In Touch
                    </h2>
                    <p className="text-slate-400 text-lg text-center mb-16">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>

                    {/* Contact Information Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        {/* Email */}
                        <div className="contact-card group">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="contact-label">Personal Email</h3>
                                <a href="mailto:marcusha429@gmail.com" className="contact-value">
                                    marcusha429@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Education Email */}
                        <div className="contact-card group">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="contact-label">Education Email</h3>
                                <a href="mailto:your.edu@university.edu" className="contact-value">
                                    nguyeh3@uci.edu
                                </a>
                            </div>
                        </div>

                        {/* LinkedIn */}
                        <div className="contact-card group">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="contact-label">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/marcus-ha-b73aa61a1/" target="_blank" rel="noopener noreferrer" className="contact-value">
                                    https://www.linkedin.com/marcusha429
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="contact-card group">
                            <div className="contact-icon-wrapper">
                                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="contact-label">Location</h3>
                                <p className="contact-value">San Jose, CA</p>
                            </div>
                        </div>
                    </div>

                    {/* Connect With Me Section */}
                    <div className="text-center">
                        <h3 className="text-2xl font-light text-white mb-8">Connect With Me</h3>
                        <div className="flex justify-center gap-6">
                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/marcus-ha-b73aa61a1/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-connect-btn"
                                aria-label="LinkedIn"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/marcusha429"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-connect-btn"
                                aria-label="GitHub"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/marcusha99/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-connect-btn"
                                aria-label="Facebook"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669c1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/marcfortonight/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-connect-btn"
                                aria-label="Instagram"
                            >
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}