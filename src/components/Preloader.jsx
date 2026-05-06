import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/beta.png';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-brand-dark flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Animated background rings */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 4, opacity: [0, 1, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 1,
                            ease: "easeOut"
                        }}
                        className="absolute border border-white rounded-full w-64 h-64"
                    />
                ))}
            </div>

            <div className="relative">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center gap-6"
                >
                    <div className="relative">
                        <img src={logo} alt="Beta Softnet" className="h-32 w-auto relative z-10" />
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-t-2 border-brand-blue rounded-full opacity-50"
                        />
                    </div>
                    
                    <div className="flex flex-col items-center gap-2">
                        <motion.span 
                            className="text-white font-black text-2xl tracking-[0.2em] uppercase"
                            initial={{ letterSpacing: "0.5em", opacity: 0 }}
                            animate={{ letterSpacing: "0.2em", opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Beta Softnet
                        </motion.span>
                        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "100%" }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-brand-blue"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
