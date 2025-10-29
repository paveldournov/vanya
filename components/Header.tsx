
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about-play', text: 'О пьесе' },
    { href: '#cast', text: 'Актеры' },
    { href: '#gallery', text: 'Галерея' },
    { href: '#tickets', text: 'Билеты' },
  ];

  const linkClasses = "block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-amber-300 md:p-0 transition-colors duration-300";

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-white">Театр<span className="text-amber-400">33</span></a>
          
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className={linkClasses.replace('block py-2 px-3', '')}>{link.text}</a>
            ))}
            <a href="#tickets" className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-md transition-transform duration-300 hover:scale-105">
              Купить билеты
            </a>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-gray-800 rounded-lg">
            <ul className="flex flex-col p-4 space-y-2">
              {navLinks.map(link => (
                <li key={link.href}><a href={link.href} onClick={() => setIsMenuOpen(false)} className={linkClasses}>{link.text}</a></li>
              ))}
              <li>
                <a href="#tickets" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2 px-4 rounded-md mt-2">
                  Купить билеты
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
