import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck, Wallet, Sparkles } from 'lucide-react';
import bnxmailImg from '../assets/bnxmail.png';
import b2authImg from '../assets/b2auth.png';
import cliksImg from '../assets/cliks.png';

const products = [
    {
        id: 'bnxmail',
        name: 'BNX Mail',
        tagline: 'Communication Redefined',
        desc: 'Experience a lightning-fast, secure, and intuitive email ecosystem designed for the modern enterprise. BNX Mail combines the familiarity of classic mail systems with cutting-edge security and AI-driven organization.',
        features: ['End-to-End Encryption', 'AI Smart Inbox', 'Unified Workspace', 'Enterprise-Grade Search'],
        image: bnxmailImg,
        icon: <Mail className="text-brand-blue" size={24} />,
        color: 'from-blue-600 to-indigo-600'
    },
    {
        id: 'b2auth',
        name: 'B2Auth',
        tagline: 'Identity & Access Excellence',
        desc: 'The backbone of your digital security. B2Auth provides seamless Single Sign-On (SSO), multi-factor authentication, and robust identity management to protect your organization from every angle.',
        features: ['One-Click SSO', 'Adaptive MFA', 'Biometric Security', 'Real-time Threat Monitoring'],
        image: b2authImg,
        icon: <ShieldCheck className="text-brand-purple" size={24} />,
        color: 'from-purple-600 to-brand-blue',
        reverse: true
    },
    {
        id: 'cliks',
        name: 'Cliks Business',
        tagline: 'Fintech for Everyone',
        desc: 'Take control of your financial destiny with Cliks. From business expense management to personal wealth tracking, Cliks offers a unified financial ecosystem that scales with your ambitions.',
        features: ['Automated Accounting', 'Wealth Insights', 'Instant Settlements', 'Global Payouts'],
        image: cliksImg,
        icon: <Wallet className="text-brand-teal" size={24} />,
        color: 'from-brand-teal to-blue-500'
    }
];

const ProductShowcase = () => {
    return (
        <section className="py-32 bg-white overflow-hidden" id="products">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 text-brand-blue font-bold text-xs uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} />
                        Our Proprietary Ecosystem
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="heading-2"
                    >
                        Built for the <span className="text-gradient">Next Generation</span>
                    </motion.h2>
                </div>

                <div className="space-y-40">
                    {products.map((product, index) => (
                        <div 
                            key={product.id}
                            className={`flex flex-col ${product.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}
                        >
                            {/* Content */}
                            <motion.div 
                                initial={{ opacity: 0, x: product.reverse ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                                className="flex-1 space-y-8"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner">
                                        {product.icon}
                                    </div>
                                    <h3 className="font-bold text-brand-blue uppercase tracking-widest text-sm">{product.tagline}</h3>
                                </div>
                                <h4 className="heading-2 text-4xl lg:text-5xl">{product.name}</h4>
                                <p className="body-text text-brand-text-muted text-lg leading-relaxed">
                                    {product.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {product.features.map(feature => (
                                        <div key={feature} className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue"></div>
                                            <span className="font-semibold text-brand-dark text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <motion.button 
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-2 font-bold text-brand-blue hover:text-brand-dark transition-colors group"
                                >
                                    Explore {product.name} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </motion.div>

                            {/* Image Visual */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, rotate: product.reverse ? -2 : 2 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                                className="flex-1 relative"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 blur-[100px] -z-10 rounded-full transform scale-110`}></div>
                                <div className="relative z-10 card-modern p-2 bg-white/50 backdrop-blur-sm border-white/50 shadow-2xl rounded-[2.5rem] group overflow-hidden">
                                    <motion.img 
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6 }}
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-auto rounded-[2rem] shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className={`absolute -top-6 ${product.reverse ? '-left-6' : '-right-6'} w-24 h-24 bg-gradient-to-br ${product.color} opacity-10 rounded-full blur-2xl animate-pulse`}></div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
