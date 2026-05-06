import React from 'react';
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone, ExternalLink, ArrowRight } from 'lucide-react';
import logo from '../assets/beta-logo.png';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-24 pb-12 overflow-hidden relative">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Section */}
                    <div className="col-span-2 lg:col-span-4 pr-0 lg:pr-16">
                        <a href="#" className="flex items-center gap-3 group mb-8">
                            <img src={logo} alt="Beta Softnet Logo" className="h-10 w-auto" />
                            <span className="font-black text-2xl tracking-tighter">Beta
                                {/* beta<span className="text-brand-blue">-softnet</span> */}
                            </span>
                        </a>
                        <p className="text-slate-400 mb-8 leading-relaxed text-lg">
                            Architecting the digital foundations of tomorrow. We deliver elite software engineering and strategic IT consulting for global enterprises.
                        </p>
                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {/* Products Column */}
                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-lg">Our Products</h4>
                        <div className="mb-4">
                            <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue/80 mb-4 block">Category: Base</span>
                            <ul className="flex flex-col gap-4 text-slate-400">
                                {['BNX Mail', 'B2Auth', 'Cliks Business'].map(item => (
                                    <li key={item}><a href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-brand-blue transition-colors flex items-center gap-2 group">{item} <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" /></a></li>
                                ))}
                            </ul>
                        </div>
                        <p className="text-[10px] text-slate-500 italic mt-6">More categories planned for future release.</p>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-lg">Solutions</h4>
                        <ul className="flex flex-col gap-4 text-slate-400">
                            {['For Startups', 'For Enterprise', 'Financial Services', 'E-commerce'].map(item => (
                                <li key={item}><a href="#" className="hover:text-brand-blue transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-lg">Resources</h4>
                        <ul className="flex flex-col gap-4 text-slate-400">
                            <li><a href="/resources" className="hover:text-brand-blue transition-colors">Resource Hub</a></li>
                            {['Documentation', 'API Reference', 'Case Studies', 'Blog'].map(item => (
                                <li key={item}><a href="#" className="hover:text-brand-blue transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2">
                        <h4 className="font-bold text-white mb-8 text-lg">Company</h4>
                        <ul className="flex flex-col gap-4 text-slate-400">
                            <li><a href="/about" className="hover:text-brand-blue transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-blue transition-colors">Legal</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 font-medium">
                    <div className="flex items-center gap-8">
                        <p>© {new Date().getFullYear()} Beta Softnet. All rights reserved.</p>
                        <div className="hidden md:flex gap-6">
                            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                            <a href="/refund-policy" className="hover:text-white transition-colors">Refunds</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            All systems operational
                        </div>
                        <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl transition-colors border border-white/5">
                            English <ExternalLink size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
