import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
// import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsSection from '../components/StatsSection';
import logo from '../assets/beta.png';

const CallToAction = () => (
    <section className="py-32 bg-brand-dark relative overflow-hidden">
        {/* Background mesh */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 flex flex-col items-center text-center bg-white/5 border-white/10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-2"
                >
                    <img src={logo} alt="Beta Softnet" className="h-24 w-auto" />
                </motion.div>
                
                <h2 className="heading-2 text-white mb-8">Ready to <span className="text-gradient">Scale Your Vision?</span></h2>
                <p className="body-text text-slate-400 mb-12 max-w-2xl">
                    Whether you're a high-growth startup or an established enterprise, our elite engineering teams are ready to help you build the future.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="btn-primary flex items-center gap-2 group">
                        Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="btn-outline">
                        Book Strategy Session
                    </button>
                </div>
{/* 
                <div className="mt-16 flex items-center gap-3 text-slate-500 font-bold text-xs uppercase tracking-widest">
                    <Sparkles size={14} className="text-brand-blue" />
                    Trusted by 200+ global brands
                </div> */}
            </div>
        </div>
    </section>
);

const Home = () => {
    return (
        <div className="overflow-x-hidden">
            <SEO title="Home" />
            <HeroSection />
            <ProductShowcase />
            <StatsSection />
            <WhyChooseUs />
            <CallToAction />
        </div>
    );
};

export default Home;
