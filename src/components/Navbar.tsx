
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <svg width="42" height="32" viewBox="0 0 42 32" className="text-dropbox-blue" fill="currentColor">
              <path d="M10.5 0L0 6.5L10.5 13L21 6.5L10.5 0ZM31.5 0L21 6.5L31.5 13L42 6.5L31.5 0ZM0 19.5L10.5 26L21 19.5L10.5 13L0 19.5ZM31.5 13L21 19.5L31.5 26L42 19.5L31.5 13ZM10.5 28.5L21 35L31.5 28.5L21 22L10.5 28.5Z" />
            </svg>
            <span className="font-semibold text-xl">Dropbox Brand</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="nav-link">Brand Guidelines</a>
            <a href="/" className="nav-link">Logo</a>
            <a href="/" className="nav-link">Color</a>
            <a href="/" className="nav-link">Typography</a>
            <a href="/" className="nav-link">Imagery</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg animate-fade-in">
          <div className="px-4 py-5 space-y-4">
            <a href="/" className="block nav-link text-lg py-2">Brand Guidelines</a>
            <a href="/" className="block nav-link text-lg py-2">Logo</a>
            <a href="/" className="block nav-link text-lg py-2">Color</a>
            <a href="/" className="block nav-link text-lg py-2">Typography</a>
            <a href="/" className="block nav-link text-lg py-2">Imagery</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
