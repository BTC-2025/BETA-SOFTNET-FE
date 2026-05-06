import React from 'react';
import { motion } from 'framer-motion';
import { 
    BookOpen, 
    FileText, 
    Code, 
    Layout, 
    ArrowRight, 
    Search, 
    Zap, 
    Globe, 
    Shield, 
    Terminal,
    Video,
    Download,
    MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';

const Resources = () => {
    const resourceCategories = [
        {
            title: "Technical Documentation",
            desc: "Deep dive into our APIs, SDKs, and infrastructure specifications.",
            icon: <Terminal className="text-brand-blue" />,
            items: ["API Reference", "SDK Documentation", "Integration Guides", "Architecture Specs"],
            color: "blue"
        },
        {
            title: "Success Stories",
            desc: "Learn how global enterprises are scaling with Beta Softnet.",
            icon: <Globe className="text-purple-500" />,
            items: ["Enterprise Case Studies", "Startup Growth Stories", "Industry Reports", "Whitepapers"],
            color: "purple"
        },
        {
            title: "Developer Hub",
            desc: "Tools and resources to build faster on the Beta ecosystem.",
            icon: <Code className="text-emerald-500" />,
            items: ["Code Samples", "Postman Collections", "Open Source Libraries", "Changelog"],
            color: "emerald"
        },
        {
            title: "Insights & Learning",
            desc: "Stay updated with the latest in software engineering and IT strategy.",
            icon: <BookOpen className="text-amber-500" />,
            items: ["Engineering Blog", "Video Tutorials", "Webinars", "Knowledge Base"],
            color: "amber"
        }
    ];

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            <SEO 
                title="Resources | Beta Softnet" 
                description="Access our comprehensive library of technical documentation, case studies, and industry insights."
            />

            {/* Hero Section */}
            <section className="relative px-6 py-20 lg:py-32">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 blur-[120px] rounded-full"></div>
                </div>

                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-2 rounded-full bg-brand-blue/5 text-brand-blue text-sm font-bold tracking-widest uppercase mb-6 inline-block border border-brand-blue/10">
                            Knowledge Center
                        </span>
                        <h1 className="heading-1 mb-8">
                            Empowering <span className="text-gradient">Innovation</span> <br />Through Knowledge
                        </h1>
                        <p className="body-text max-w-3xl mx-auto mb-12 text-slate-500">
                            Everything you need to build, scale, and optimize your digital infrastructure. Explore our comprehensive suite of resources designed for engineers and architects.
                        </p>

                        <div className="max-w-2xl mx-auto relative">
                            <input 
                                type="text" 
                                placeholder="Search documentation, guides, and articles..." 
                                className="w-full h-16 pl-14 pr-6 rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-md focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all text-lg shadow-xl shadow-slate-200/50"
                            />
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="px-6 py-12 border-y border-slate-100 bg-slate-50/30">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { label: "API Reference", icon: <Terminal size={18} /> },
                            { label: "Get Help", icon: <MessageSquare size={18} /> },
                            { label: "System Status", icon: <Zap size={18} /> },
                            { label: "Downloads", icon: <Download size={18} /> }
                        ].map((item, i) => (
                            <a key={i} href="#" className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-blue/20 hover:-translate-y-1 transition-all group">
                                <span className="text-brand-blue group-hover:scale-110 transition-transform">{item.icon}</span>
                                <span className="font-bold text-sm text-brand-dark">{item.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="px-6 py-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {resourceCategories.map((cat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="card-modern group p-10 flex flex-col h-full"
                            >
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500`}>
                                    {cat.icon}
                                </div>
                                <h3 className="heading-3 mb-4 group-hover:text-brand-blue transition-colors">{cat.title}</h3>
                                <p className="text-slate-500 mb-8 leading-relaxed">
                                    {cat.desc}
                                </p>
                                <ul className="mt-auto space-y-4">
                                    {cat.items.map((item, i) => (
                                        <li key={i}>
                                            <a href="#" className="flex items-center justify-between group/link">
                                                <span className="text-slate-600 font-medium group-hover/link:text-brand-blue transition-colors">{item}</span>
                                                <ArrowRight size={16} className="text-slate-300 group-hover/link:text-brand-blue group-hover/link:translate-x-1 transition-all" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="px-6 py-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="bg-brand-dark rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay ahead of the curve</h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                                Get our monthly engineering digest and technical updates delivered straight to your inbox.
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-grow h-14 px-6 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-blue outline-none transition-all"
                                />
                                <button className="btn-primary h-14 whitespace-nowrap">
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;
