import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import CrafterDark from './pages/CrafterDark.jsx';
import Games from './pages/Games.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import TuckedAway from './pages/TuckedAway.jsx';

const pages = {
  home: Home,
  crafter: CrafterDark,
  photo: Photography,
  games: Games,
  tuckedAway: TuckedAway,
};

const portfolioTitle = 'Sara’s Portfolio | Artist, Pattern Maker & Creative Technologist';
const portfolioDescription = 'Explore Sara Gillard’s cross-stitch designs, photography, games and creative digital projects.';

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

export default function App() {
  const getInitialPage = () => {
    if (window.location.pathname === '/tucked-away') return 'tuckedAway';
    if (window.location.hash === '#saras-lab') return 'games';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);
  const CurrentPage = pages[currentPage] || Home;

  const handleNavigate = (page) => {
    window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: { page } }));
    if (window.location.pathname !== '/' || window.location.hash) {
      window.history.pushState({}, '', page === 'games' ? '/#saras-lab' : '/');
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const titles = {
      home: "Sara's Portfolio",
      crafter: "Crafter Dark | Sara's Portfolio",
      photo: "Photography | Sara's Portfolio",
      games: "Sara's Lab | Sara's Portfolio",
      tuckedAway: 'Tucked Away | Organise videos stored on your Android device',
    };
    document.title = titles[currentPage] || "Sara's Portfolio";

    if (currentPage !== 'tuckedAway') {
      setMeta('meta[name="description"]', 'content', portfolioDescription);
      setMeta('link[rel="canonical"]', 'href', 'https://saragillard.com/');
      setMeta('meta[property="og:url"]', 'content', 'https://saragillard.com/');
      setMeta('meta[property="og:title"]', 'content', portfolioTitle);
      setMeta('meta[property="og:description"]', 'content', portfolioDescription);
      setMeta('meta[property="og:image"]', 'content', 'https://saragillard.com/images/social/saras-portfolio-og.png');
      setMeta('meta[name="twitter:title"]', 'content', portfolioTitle);
      setMeta('meta[name="twitter:description"]', 'content', portfolioDescription);
      setMeta('meta[name="twitter:image"]', 'content', 'https://saragillard.com/images/social/saras-portfolio-og.png');
    }
  }, [currentPage]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPage === 'tuckedAway') {
    return <TuckedAway onBackToLab={(event) => {
      if (event) event.preventDefault();
      handleNavigate('games');
    }} />;
  }

  return (
    <div className="app">
      <ParticleBackground />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <CurrentPage />
      <Footer />
    </div>
  );
}
