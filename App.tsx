
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Cast from './components/Cast';
import Schedule from './components/Schedule';
import Gallery from './components/Gallery';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutPlayContent = {
    title: "О пьесе",
    text: "«Дядя Ваня» — одна из самых известных и пронзительных пьес Антона Павловича Чехова. Это история о разбитых надеждах, упущенных возможностях и тихой, почти незаметной трагедии повседневной жизни. Герои живут в усадьбе, томятся от скуки и несбывшихся мечтаний, задаваясь вечными вопросами о смысле своего существования. Чехов с гениальной точностью и сочувствием раскрывает внутренний мир персонажей, их любовь, страдания и отчаянный поиск счастья."
  };

  const ourProductionContent = {
    title: "О нашем спектакле",
    text: "Постановка Театра33 — это свежий взгляд на классическую драму. Мы стремимся показать не только хрестоматийную тоску, но и иронию, юмор и невероятную жизненную силу, скрытую в чеховских героях. Современные сценические решения, тонкая актерская игра и глубокое погружение в психологию персонажей делают наш спектакль актуальным и близким каждому зрителю. Мы приглашаем вас в путешествие по усадьбе, где каждая комната хранит свои тайны, а воздух пропитан ожиданием перемен."
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-6 py-12 md:py-20 space-y-16 md:space-y-24">
          <AboutSection id="about-play" title={aboutPlayContent.title} text={aboutPlayContent.text} />
          <AboutSection id="about-production" title={ourProductionContent.title} text={ourProductionContent.text} imageOnRight />
          <Cast id="cast" />
          <Gallery id="gallery" />
          <Schedule id="tickets" />
          <Chatbot id="chatbot" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
