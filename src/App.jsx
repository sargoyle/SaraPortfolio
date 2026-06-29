import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import AiPocs from './pages/AiPocs.jsx';
import CrafterDark from './pages/CrafterDark.jsx';
import Games from './pages/Games.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';

const pages = {
  home: Home,
  crafter: CrafterDark,
  photo: Photography,
  games: Games,
  ai: AiPocs,
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const CurrentPage = pages[currentPage] || Home;

  const handleNavigate = (page) => {
    window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: { page } }));
    setCurrentPage(page);
  };

  useEffect(() => {
    const titles = {
      home: "Sara's Portfolio",
      crafter: "Crafter Dark | Sara's Portfolio",
      photo: "Photography | Sara's Portfolio",
      games: "Sara's Lab | Sara's Portfolio",
      ai: "AI POCs | Sara's Portfolio",
    };
    document.title = titles[currentPage] || "Sara's Portfolio";
  }, [currentPage]);

  return (
    <div className="app">
      <ParticleBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <CurrentPage />
      <Footer />
    </div>
  );
}
