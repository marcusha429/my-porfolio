import GlassSearchBar from '@/components/GlassSearchBar';

export default function Portfolio() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
            {/* Abstract Background Effect */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"></div>
            </div>

            {/* Glass Search Bar */}
            <GlassSearchBar />

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10">
                <div className="text-center">
                    <h1 className="text-6xl font-light text-white mb-4">
                        Hi, I'm <span className="text-blue-400">Marcus Ha</span>
                    </h1>
                    <p className="text-2xl text-slate-300 mb-8">
                        Web Developer & Creative Designer
                    </p>
                    <div className="flex gap-4 justify-center">
                        <a href="#projects" className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition">
                            Contact Me
                        </a>
                    </div>
                </div>
            </section>

            {/* Other sections */}
            <section id="about" className="min-h-screen flex items-center justify-center relative z-10">
                <div className="text-center text-white">
                    <h2 className="text-4xl mb-4">About Section</h2>
                    <p className="text-slate-400">Coming soon...</p>
                </div>
            </section>

            <section id="projects" className="min-h-screen flex items-center justify-center relative z-10">
                <div className="text-center text-white">
                    <h2 className="text-4xl mb-4">Projects Section</h2>
                    <p className="text-slate-400">Coming soon...</p>
                </div>
            </section>

            <section id="contact" className="min-h-screen flex items-center justify-center relative z-10">
                <div className="text-center text-white">
                    <h2 className="text-4xl mb-4">Contact Section</h2>
                    <p className="text-slate-400">Coming soon...</p>
                </div>
            </section>
        </div>
    );
}