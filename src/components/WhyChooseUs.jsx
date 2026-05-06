import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Wallet, Rocket, Mail } from 'lucide-react';

const reasons = [
    {
        id: 1,
        title: 'Proprietary Innovation',
        desc: 'We focus 100% on building our own products like BNX Mail and B2Auth, ensuring that every feature is crafted with deep technical ownership.',
        icon: <Rocket size={28} />
    },
    {
        id: 2,
        title: 'Security-First Architecture',
        desc: 'With B2Auth at our core, we build enterprise-grade security into every product, protecting your digital life with our custom security protocols.',
        icon: <ShieldCheck size={28} />
    },
    {
        id: 3,
        title: 'The Fintech Edge',
        desc: 'Our product Cliks is redefining how businesses manage finances, offering a unified app for all your financial and banking needs.',
        icon: <Wallet size={28} />
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

const WhyChooseUs = () => {
    return (
        <section id="why-us" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[150px] -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-5 gap-16 items-center">

                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6"
                        >
                            <Sparkles size={14} className="animate-spin-slow" />
                            The Beta Softnet Advantage
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-2 mb-8"
                        >
                            Why Choose Our <span className="text-gradient">Proprietary Products?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="body-text mb-10 text-brand-text-muted"
                        >
                            As a pure product startup, we are not distracted by client projects. We dedicate our entire engineering force to perfecting the products you use every day.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <button className="btn-primary">
                                Learn About Our Stack
                            </button>
                        </motion.div>
                    </div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-3"
                    >
                        <div className="flex flex-col gap-8">
                            {reasons.map((reason) => (
                                <motion.div
                                    key={reason.id}
                                    variants={cardVariants}
                                    whileHover={{ 
                                        x: 10,
                                        transition: { duration: 0.3 }
                                    }}
                                    className="card-modern flex flex-col md:flex-row gap-8 p-10 hover:border-brand-blue/20 transition-all duration-500"
                                >
                                    <div className="shrink-0">
                                        <div className="w-16 h-16 rounded-3xl bg-brand-blue-light text-brand-blue flex items-center justify-center shadow-inner group-hover:bg-brand-blue group-hover:text-white transition-colors duration-500">
                                            {reason.icon}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="heading-3 mb-4">{reason.title}</h3>
                                        <p className="text-brand-text-muted leading-relaxed text-lg">{reason.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
