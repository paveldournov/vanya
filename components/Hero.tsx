
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight mb-4 animate-fade-in-down">
          Дядя Ваня
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Классическая драма А.П. Чехова в новой постановке Театра33
        </p>
        <a 
          href="#tickets" 
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-8 rounded-md text-lg transition-transform duration-300 hover:scale-105 inline-block animate-fade-in-up" 
          style={{ animationDelay: '1s' }}
        >
          Приобрести билеты
        </a>
      </div>
    </section>
  );
};

export default Hero;
