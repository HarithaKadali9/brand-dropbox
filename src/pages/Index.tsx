
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ContentSection from '../components/ContentSection';
import BrandGrid from '../components/BrandGrid';
import Footer from '../components/Footer';
import { useToast } from '@/hooks/use-toast';

const sections = [
  'hero',
  'content',
  'brandGrid',
  'footer'
];

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  const lastScrollTime = useRef<number>(0);
  const scrollCooldown = 800; // ms cooldown between scroll events

  useEffect(() => {
    // Set up fixed height to laptop viewport
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
    
    // Handle wheel events for section transitions
    const handleWheel = (e: WheelEvent) => {
      const now = Date.now();
      
      // Prevent rapid scrolling by implementing a cooldown
      if (isTransitioning || now - lastScrollTime.current < scrollCooldown) {
        e.preventDefault();
        return;
      }
      
      setIsTransitioning(true);
      lastScrollTime.current = now;
      
      // Determine scroll direction
      if (e.deltaY > 0 && currentSection < sections.length - 1) {
        // Scroll down
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < 0 && currentSection > 0) {
        // Scroll up
        setCurrentSection(prev => prev - 1);
      } else {
        // At the beginning or end of sections
        toast({
          title: "End of content",
          description: "No more sections in this direction",
        });
        setIsTransitioning(false);
      }
      
      // Prevent default scrolling
      e.preventDefault();
      
      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700); // Slightly longer than the transition to ensure it completes
    };

    // Add event listener for wheel events
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    // Clean up
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isTransitioning, currentSection, toast]);
  
  return (
    <div className="h-screen overflow-hidden bg-white flex flex-col">
      <Navbar />
      
      <div className="main-content flex-1 relative">
        <AnimatePresence mode="wait">
          {currentSection === 0 && (
            <motion.div 
              key="hero"
              className="absolute inset-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
            >
              <HeroSection />
            </motion.div>
          )}
          
          {currentSection === 1 && (
            <motion.div 
              key="content"
              className="absolute inset-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
            >
              <ContentSection />
            </motion.div>
          )}
          
          {currentSection === 2 && (
            <motion.div 
              key="brandGrid"
              className="absolute inset-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
            >
              <BrandGrid />
            </motion.div>
          )}
          
          {currentSection === 3 && (
            <motion.div 
              key="footer"
              className="absolute inset-0"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
            >
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Section Indicators */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSection(index);
                  setTimeout(() => setIsTransitioning(false), 700);
                }
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSection === index ? 'bg-dropbox-blue w-3 h-3' : 'bg-gray-300'
              }`}
              aria-label={`Go to section ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
