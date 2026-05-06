import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, Wallet, ArrowRight, Sparkles } from 'lucide-react';

const products = [
    {
        id: 1,
        title: 'BNX Mail',
        desc: 'A powerful, Gmail-inspired mail system built for the modern era. Experience seamless communication with advanced security and an intuitive interface.',
        icon: <Mail size={28} />,
        tag: 'Communication'
    },
    {
        id: 2,
        title: 'B2Auth',
        desc: 'Sophisticated identity management and authentication infrastructure. Securing your business with enterprise-grade protection from day one.',
        icon: <ShieldCheck size={28} />,
        tag: 'Security'
    },
    {
        id: 3,
        title: 'Cliks',
        desc: 'The ultimate financial ecosystem for businesses and individuals. A one-stop solution for all your financial, banking, and fintech needs.',
        icon: <Wallet size={28} />,
        tag: 'Fintech'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
    }
};

const ServicesSection = () => {
    return (
        <section id="products" className="section-padding bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4"
                        >
                            Our Product Portfolio
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="heading-2"
                        >
                            Proprietary Solutions for <br /> the <span className="text-gradient">Next Generation</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="body-text max-w-md text-brand-text-muted"
                    >
                        As a product-first company, we spend every day refining our core offerings to deliver unparalleled value to our users.
                    </motion.p>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={cardVariants}
                            whileHover={{ 
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="card-modern group flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-sm">
                                    <div className="text-brand-blue group-hover:text-white transition-colors duration-500">
                                        {product.icon}
                                    </div>
                                </div>
                                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                                    {product.tag}
                                </span>
                            </div>
                            <h3 className="heading-3 mb-4 group-hover:text-brand-blue transition-colors">{product.title}</h3>
                            <p className="text-brand-text-muted leading-relaxed mb-8 flex-grow">
                                {product.desc}
                            </p>
                            <div className="pt-4 flex items-center gap-2 text-brand-blue font-bold text-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                View Product Details <ArrowRight size={16} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;
