
import React from 'react';

interface AboutSectionProps {
  id: string;
  title: string;
  text: string;
  imageOnRight?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, title, text, imageOnRight = false }) => {
  const imageUrl = `https://picsum.photos/800/600?grayscale&random=${id}`;
  
  return (
    <section id={id} className="scroll-mt-20">
      <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${imageOnRight ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
          <img src={imageUrl} alt={title} className="rounded-lg shadow-2xl object-cover w-full h-auto aspect-[4/3]" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-amber-300">{title}</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
