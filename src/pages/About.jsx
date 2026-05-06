import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ArrowRight, Sparkles, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="pt-40 lg:pt-52 pb-20 min-h-[80vh] bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            
            <SEO title="About Us" description="Learn about Beta Softnet's Product Journey" url="/about" />
            
            {/* Header Section */}
            <section className="container mx-auto px-6 md:px-12 mb-32 text-center max-w-5xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-brand-blue font-bold text-xs uppercase tracking-widest mb-8">
                        <Sparkles size={14} />
                        Our 1st Year Journey
                    </div>
                    <h1 className="heading-1 mb-8">
                        Crafting the Future of <br className="hidden md:block" />
                        <span className="text-gradient">Software Products</span>
                    </h1>
                    <p className="body-text max-w-3xl mx-auto text-brand-text-muted">
                        Founded one year ago, <span className="font-bold text-brand-dark">beta-softnet</span> was born with a clear mission: to build world-class proprietary software products. We are a pure product-based startup, dedicated to innovating in communication, security, and fintech.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision grid */}
            <section className="bg-slate-50 py-32 relative">
                <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
                
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-square md:aspect-[4/3] rounded-[3rem] bg-gradient-to-br from-brand-blue to-brand-teal p-12 flex flex-col justify-end overflow-hidden shadow-2xl shadow-brand-blue/20 group">
                                <div className="absolute inset-0 bg-black/10 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"></div>
                                <h3 className="heading-2 text-white mb-6 relative z-10">Our Philosophy</h3>
                                <p className="text-blue-50 text-xl relative z-10 leading-relaxed font-medium">
                                    We believe in the power of ownership. By focusing exclusively on our own products like BNX Mail and B2Auth, we ensure every line of code is written with long-term excellence and user-centricity in mind.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="flex gap-8">
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-brand-blue/5 border border-slate-100 flex items-center justify-center shrink-0">
                                    <Target size={32} className="text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="heading-3 mb-3">Product-First Mentality</h4>
                                    <p className="text-brand-text-muted leading-relaxed text-lg">We don't take on client projects. Instead, we invest 100% of our energy into refining our own ecosystem, ensuring B2Auth and BNX Mail are second to none.</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="w-20 h-20 rounded-3xl bg-white shadow-xl shadow-brand-blue/5 border border-slate-100 flex items-center justify-center shrink-0">
                                    <Wallet size={32} className="text-brand-purple" />
                                </div>
                                <div>
                                    <h4 className="heading-3 mb-3">Fintech Revolution with Cliks</h4>
                                    <p className="text-brand-text-muted leading-relaxed text-lg">Our newest endeavor, Cliks, aims to simplify financial management for everyone, merging all your financial needs into one elegant, high-performance app.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center container mx-auto px-6 max-w-4xl">
                <h2 className="heading-2 mb-10">Ready to build <span className="text-gradient">something great?</span></h2>
                <Link to="/contact">
                    <button className="btn-primary flex items-center gap-2 mx-auto group">
                        Let's Talk <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default About;
