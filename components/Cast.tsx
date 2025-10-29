
import React from 'react';
import { Actor } from '../types';

const castData: Actor[] = [
  { name: 'Иван Войницкий', role: 'Дядя Ваня', imageUrl: 'https://picsum.photos/400/500?grayscale&random=1' },
  { name: 'Александр Серебряков', role: 'Профессор', imageUrl: 'https://picsum.photos/400/500?grayscale&random=2' },
  { name: 'Елена Андреевна', role: 'Его жена', imageUrl: 'https://picsum.photos/400/500?grayscale&random=3' },
  { name: 'Софья Александровна', role: 'Соня', imageUrl: 'https://picsum.photos/400/500?grayscale&random=4' },
  { name: 'Михаил Астров', role: 'Врач', imageUrl: 'https://picsum.photos/400/500?grayscale&random=5' },
  { name: 'Мария Войницкая', role: 'Мать дяди Вани', imageUrl: 'https://picsum.photos/400/500?grayscale&random=6' },
];

const CastCard: React.FC<{ actor: Actor }> = ({ actor }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={actor.imageUrl} alt={actor.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4">
      <h3 className="text-xl font-bold text-white">{actor.name}</h3>
      <p className="text-amber-300">{actor.role}</p>
    </div>
  </div>
);

const Cast: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center text-amber-300">Актеры и создатели</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {castData.map((actor) => (
          <CastCard key={actor.name} actor={actor} />
        ))}
      </div>
    </section>
  );
};

export default Cast;
