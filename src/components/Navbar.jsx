import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Database, ShieldCheck, Mail, Wallet, BarChart3, Fingerprint, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
// import logo from '../assets/beta-logo.png';
import logo from '../assets/beta.png';

const productsList = [
    {
        name: 'BNX Mail',
        path: '#bnxmail',
        desc: 'Gmail-like enterprise mail system.',
        icon: <Mail size={20} />
    },
    {
        name: 'B2Auth',
        path: '#b2auth',
        desc: 'Advanced identity & security.',
        icon: <ShieldCheck size={20} />
    },
    {
        name: 'Cliks Business',
        path: '#cliks',
        desc: 'All-in-one financial purpose app.',
        icon: <Wallet size={20} />
    }
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Resources', path: '/resources' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-[100] px-4 py-6 md:px-8">
            <header
                className={`mx-auto max-w-7xl transition-all duration-500 rounded-full border border-white/20 ${
                    scrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-2xl shadow-brand-blue/10 py-3 px-6' 
                    : 'bg-transparent py-4 px-8'
                }`}
            >
                <div className="flex justify-between items-center">
                    {/* Logo & Brand */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src={logo} alt="Beta Softnet Logo" className="h-16 w-auto transition-transform group-hover:scale-110 duration-300" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                    location.pathname === link.path 
                                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                                    : 'text-brand-text hover:bg-slate-100 hover:text-brand-blue'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Products Dropdown Trigger */}
                        <div
                            className="relative"
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                        >
                            <button className={`flex items-center gap-1.5 px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                                productsOpen ? 'bg-slate-100 text-brand-blue' : 'text-brand-text hover:bg-slate-100 hover:text-brand-blue'
                            }`}>
                                Products <ChevronDown size={14} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full right-0 mt-3 w-80 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden p-4"
                                    >
                                        <div className="grid gap-2">
                                            <div className="px-3 py-2">
                                                <span className="text-[10px] font-black uppercase tracking-widest text-brand-blue/60">Category: Base</span>
                                            </div>
                                            {productsList.map((product) => (
                                                <a href={product.path} key={product.name} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-brand-blue-light transition-colors group">
                                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                                        {product.icon}
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-sm text-brand-dark">{product.name}</h4>
                                                        <p className="text-xs text-slate-500">{product.desc}</p>
                                                    </div>
                                                </a>
                                            ))}
                                            <div className="mt-2 pt-2 border-t border-slate-50 px-3">
                                                <p className="text-[10px] text-slate-400 italic">More categories coming soon...</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/contact">
                            <button className="btn-primary py-2.5 px-6 text-sm">
                                Get Started
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`lg:hidden p-2 rounded-full transition-colors ${scrolled ? 'bg-slate-100 text-brand-dark' : 'bg-slate-100/50 text-brand-dark'}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </header>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full px-4 mt-2 lg:hidden"
                    >
                        <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-lg font-bold p-4 rounded-2xl transition-colors ${
                                        location.pathname === link.path ? 'bg-brand-blue-light text-brand-blue' : 'text-brand-dark hover:bg-slate-50'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-slate-100 my-2"></div>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <button className="btn-primary w-full py-4">
                                    Contact Us
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
