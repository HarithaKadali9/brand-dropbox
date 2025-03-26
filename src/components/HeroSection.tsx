
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center bg-white h-full px-4">
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <motion.h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-dropbox-blue mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          At Dropbox, our Brand Guidelines help us infuse everything we make with identity.
        </motion.h1>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-left">
            <h3 className="font-semibold text-xl mb-2">Brand Identity</h3>
            <p className="text-gray-600 mb-4">Our distinct visual elements that make Dropbox recognizable.</p>
            <a href="#" className="text-dropbox-blue inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="text-left">
            <h3 className="font-semibold text-xl mb-2">Design Principles</h3>
            <p className="text-gray-600 mb-4">The core standards that guide all of our design decisions.</p>
            <a href="#" className="text-dropbox-blue inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="text-left">
            <h3 className="font-semibold text-xl mb-2">Asset Library</h3>
            <p className="text-gray-600 mb-4">All the resources you need to apply our brand correctly.</p>
            <a href="#" className="text-dropbox-blue inline-flex items-center">
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center md:justify-start space-x-4 mt-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="dropbox-button-primary flex items-center">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </button>
          <button className="dropbox-button-secondary">
            Browse Guidelines
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
