import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import RefundPolicy from './pages/RefundPolicy';
import WhyUs from './pages/WhyUs';

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-white min-h-screen text-brand-text font-sans selection:bg-brand-blue selection:text-white flex flex-col">
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
