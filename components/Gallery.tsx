
import React from 'react';

const images = [
  'https://picsum.photos/600/400?grayscale&random=10',
  'https://picsum.photos/600/800?grayscale&random=11',
  'https://picsum.photos/800/600?grayscale&random=12',
  'https://picsum.photos/600/400?grayscale&random=13',
  'https://picsum.photos/600/800?grayscale&random=14',
  'https://picsum.photos/800/600?grayscale&random=15',
];

const Gallery: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-amber-300">Галерея</h2>
      <div className="columns-2 md:columns-3 gap-4">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`Сцена из спектакля ${index + 1}`} 
            className="mb-4 rounded-lg shadow-lg w-full h-auto break-inside-avoid"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
