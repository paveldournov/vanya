
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950/50 border-t border-gray-800 mt-16">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p className="text-2xl font-serif font-bold text-white mb-2">Театр<span className="text-amber-400">33</span></p>
        <p>Белвью, штат Вашингтон</p>
        <div className="my-4">
          <a href="https://www.theatre33wa.org/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors">
            Официальный сайт театра
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Theatre33. Все права защищены. Этот сайт создан для демонстрационных целей.</p>
      </div>
    </footer>
  );
};

export default Footer;
