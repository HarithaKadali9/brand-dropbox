
import { useEffect, useRef } from 'react';

const ContentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full bg-dropbox-blue text-white py-20 md:py-32">
      <div 
        ref={sectionRef} 
        className="section-container transform transition duration-1000 ease-out opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            From icons to illustration, logos to language, this collection is the foundation for how Dropbox looks, feels, and sounds like Dropbox.
          </h2>
          
          <div className="flex justify-start mt-16">
            <svg width="60" height="46" viewBox="0 0 42 32" fill="white">
              <path d="M10.5 0L0 6.5L10.5 13L21 6.5L10.5 0ZM31.5 0L21 6.5L31.5 13L42 6.5L31.5 0ZM0 19.5L10.5 26L21 19.5L10.5 13L0 19.5ZM31.5 13L21 19.5L31.5 26L42 19.5L31.5 13ZM10.5 28.5L21 35L31.5 28.5L21 22L10.5 28.5Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
