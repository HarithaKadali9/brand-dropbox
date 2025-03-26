
import { useEffect, useRef } from 'react';

interface BrandTile {
  id: number;
  title: string;
  color: string;
  icon?: React.ReactNode;
  gridArea?: string;
}

const BrandGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'scale-100');
              entry.target.classList.remove('opacity-0', 'scale-90');
            }, index * 100); // Staggered animation
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (gridRef.current) {
      const gridItems = gridRef.current.querySelectorAll('.grid-item');
      gridItems.forEach((item) => {
        observer.observe(item);
      });
    }
    
    return () => {
      if (gridRef.current) {
        const gridItems = gridRef.current.querySelectorAll('.grid-item');
        gridItems.forEach((item) => {
          observer.unobserve(item);
        });
      }
    };
  }, []);

  const brandTiles: BrandTile[] = [
    { id: 1, title: 'Framework', color: 'bg-dropbox-navy', gridArea: 'span 3 / span 3' },
    { id: 2, title: 'Voice & Tone', color: 'bg-dropbox-yellow', gridArea: 'span 3 / span 6' },
    { id: 3, title: 'Logo', color: 'bg-black', gridArea: 'span 3 / span 3' },
    { id: 4, title: 'Typography', color: 'bg-dropbox-orange', gridArea: 'span 3 / span 3' },
    { id: 5, title: 'Color', color: 'bg-dropbox-orange', gridArea: 'span 3 / span 5' },
    { id: 6, title: 'Dropbox Logo', color: 'bg-dropbox-blue', gridArea: 'span 3 / span 1' },
    { id: 7, title: 'Motion', color: 'bg-dropbox-purple', gridArea: 'span 3 / span 3' },
    { id: 8, title: 'Iconography', color: 'bg-dropbox-lime', gridArea: 'span 3 / span 3' },
    { id: 9, title: 'Imagery', color: 'bg-dropbox-red', gridArea: 'span 3 / span 6' }
  ];

  return (
    <section className="w-full bg-white py-1 overflow-hidden">
      <div ref={gridRef} className="dropbox-grid">
        {brandTiles.map((tile) => (
          <div 
            key={tile.id}
            className={`grid-item opacity-0 scale-90 transition duration-700 ease-out ${tile.color}`}
            style={{ gridArea: tile.gridArea }}
          >
            <div className="grid-item-content">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{tile.title}</h3>
              {tile.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandGrid;
