import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap, Globe, Sparkles } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
    const titleText = "Innovating the Future with Premium Software Products.";

    return (
        <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-40 overflow-hidden bg-white">
            {/* Mesh Background */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
            
            {/* Animated Decorative Blobs */}
            <motion.div 
                animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 45, 0],
                    x: [0, 30, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>
            <motion.div 
                animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -30, 0],
                    y: [0, 50, 0]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <motion.div 
                className="container mx-auto px-6 md:px-12 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-bold text-sm mb-8 shadow-sm backdrop-blur-sm"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        Celebrating 1 Year of Innovation
                    </motion.div>

                    <motion.h1 
                        variants={titleVariants}
                        className="heading-1 mb-8 max-w-5xl mx-auto"
                    >
                        {titleText.split(" ").map((word, i) => (
                            <motion.span 
                                key={i} 
                                variants={wordVariants}
                                className={`inline-block mr-3 ${word === "Software" || word === "Products." ? "text-gradient" : ""}`}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p 
                        variants={itemVariants}
                        className="body-text mb-12 max-w-3xl mx-auto text-brand-text-muted"
                    >
                        Born as a dedicated product startup, <span className="font-bold text-brand-dark">beta-softnet</span> focuses on building world-class proprietary solutions. From communication to fintech, we are crafting the digital tools of tomorrow.
                    </motion.p>

                    <motion.div 
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <button className="btn-primary flex items-center gap-2 group">
                            Explore Our Products
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="btn-secondary">
                            Our Journey
                        </button>
                    </motion.div>
                </div>

                {/* Main Visual Component - Dashboard UI */}
                <motion.div
                    variants={itemVariants}
                    className="relative max-w-6xl mx-auto mt-12"
                >
                    <div className="glass-card p-4 md:p-8 shadow-2xl border-white/50 overflow-hidden relative group hover:border-brand-blue/20 transition-all duration-700">
                        {/* Fake Dashboard Layout */}
                        <div className="grid lg:grid-cols-12 gap-8 h-[500px]">
                            {/* Sidebar UI */}
                            <div className="hidden lg:col-span-3 lg:flex flex-col gap-6 border-r border-slate-100 pr-8">
                                <div className="h-8 w-32 bg-slate-100 rounded-full animate-pulse"></div>
                                <div className="space-y-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className={`h-10 rounded-xl ${i === 1 ? 'bg-brand-blue/5' : 'bg-transparent border border-slate-50'}`}></div>
                                    ))}
                                </div>
                                <div className="mt-auto h-32 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl opacity-80 relative overflow-hidden group-hover:opacity-100 transition-opacity">
                                    <motion.div 
                                        animate={{ x: ["-100%", "100%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-white/20 -skew-x-12"
                                    />
                                </div>
                            </div>
                            
                            {/* Main Dashboard UI */}
                            <div className="lg:col-span-9 flex flex-col gap-8">
                                <div className="flex justify-between items-center">
                                    <div className="h-6 w-48 bg-slate-100 rounded-full"></div>
                                    <div className="flex gap-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-50"></div>
                                        <div className="w-8 h-8 rounded-full bg-slate-50"></div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-cols-3 gap-6">
                                    {[1, 2, 3].map(i => (
                                        <motion.div 
                                            key={i} 
                                            whileHover={{ y: -5 }}
                                            className="h-32 bg-white rounded-3xl border border-slate-50 shadow-sm p-6 flex flex-col justify-between"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-slate-50"></div>
                                            <div className="h-3 w-16 bg-slate-100 rounded-full"></div>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="flex-1 bg-white rounded-3xl border border-slate-50 shadow-sm p-8 flex flex-col justify-end gap-4 relative overflow-hidden">
                                    <div className="absolute top-8 left-8 h-4 w-32 bg-slate-100 rounded-full"></div>
                                    <div className="flex items-end gap-4 h-48">
                                        {[40, 70, 50, 90, 60, 100, 80, 110, 75, 95].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                                                className="flex-1 bg-gradient-to-t from-brand-blue to-brand-teal rounded-t-xl opacity-90 hover:opacity-100 transition-opacity"
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div 
                            animate={{ 
                                y: [0, -20, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-12 -right-12 w-48 h-48 bg-brand-purple/10 rounded-full blur-3xl"
                        ></motion.div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-12 mt-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        {['ZOHO', 'MICROSOFT', 'GOOGLE', 'AWS', 'SALESFORCE'].map(brand => (
                            <span key={brand} className="text-2xl font-black tracking-widest text-slate-400 hover:text-brand-blue cursor-default transition-colors">{brand}</span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
