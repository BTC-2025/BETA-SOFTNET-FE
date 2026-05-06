import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useMotionValueEvent, animate } from 'framer-motion';

const Counter = ({ value, duration = 2 }) => {
    const count = useMotionValue(0);
    const [displayCount, setDisplayCount] = useState(0);
    
    // Check if value is a number or contains a suffix
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');

    useMotionValueEvent(count, "change", (latest) => {
        setDisplayCount(Math.round(latest));
    });

    useEffect(() => {
        const controls = animate(count, numericValue, { duration, ease: "easeOut" });
        return controls.stop;
    }, [numericValue, duration]);

    return (
        <span>
            {displayCount}
            {suffix}
        </span>
    );
};

const stats = [
    { label: 'BNX Mail Users', value: '50k+' },
    { label: 'B2Auth Requests/Day', value: '2M+' },
    { label: 'Cliks Transactions', value: '10M+' },
    { label: 'Platform Uptime', value: '99.9%' }
];

const StatsSection = () => {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden bg-brand-dark">
            {/* Background mesh with movement */}
            <motion.div 
                animate={{ 
                    rotate: [180, 200, 180],
                    scale: [1, 1.1, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-mesh opacity-30"
            ></motion.div>
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="text-center group"
                        >
                            <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter group-hover:text-brand-blue transition-colors duration-500">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs text-balance">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
