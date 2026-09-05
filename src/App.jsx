import { useEffect, useState } from 'react';
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import ParticleBackground from './components/ParticleBackground.jsx';
import CrafterDark from './pages/CrafterDark.jsx';
import Crafts from './pages/Crafts.jsx';
import Games from './pages/Games.jsx';
import Home from './pages/Home.jsx';
import Photography from './pages/Photography.jsx';
import TuckedAway from './pages/TuckedAway.jsx';
import {
  getLabProjectBySlug,
  getLabProjectDescription,
  getLabProjectPath,
  getLabProjectSlugFromPath,
  getLabProjectTitle,
  getLabProjectUrl,
} from './utils/labRoutes.js';

const pages = {
  home: Home,
  crafter: CrafterDark,
  photo: Photography,
  games: Games,
  crafts: Crafts,
  tuckedAway: TuckedAway,
};

const portfolioTitle = 'Sara’s Portfolio | Artist, Pattern Maker & Creative Technologist';
const portfolioDescription = 'Explore Sara Gillard’s cross-stitch designs, photography, games and creative digital projects.';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);

  if (!element) {
    const metaName = selector.match(/^meta\[name="([^"]+)"\]$/)?.[1];
    const metaProperty = selector.match(/^meta\[property="([^"]+)"\]$/)?.[1];
    const linkRel = selector.match(/^link\[rel="([^"]+)"\]$/)?.[1];

    if (metaName || metaProperty) {
      element = document.createElement('meta');
      element.setAttribute(metaName ? 'name' : 'property', metaName || metaProperty);
    } else if (linkRel) {
      element = document.createElement('link');
      element.setAttribute('rel', linkRel);
    }

    if (element) document.head.appendChild(element);
  }

  if (element) element.setAttribute(attribute, value);
}

function removeMeta(selector) {
  document.head.querySelector(selector)?.remove();
}

export default function App() {
  const getRouteState = () => {
    const labProjectSlug = getLabProjectSlugFromPath(window.location.pathname);
    if (labProjectSlug) return { page: 'games', labProjectSlug };
    if (window.location.pathname === '/tucked-away') return { page: 'tuckedAway', labProjectSlug: null };
    if (window.location.hash === '#saras-lab') return { page: 'games', labProjectSlug: null };
    if (window.location.hash === '#crafter') return { page: 'crafter', labProjectSlug: null };
    if (window.location.hash === '#crafts') return { page: 'crafts', labProjectSlug: null };
    if (window.location.hash === '#photography') return { page: 'photo', labProjectSlug: null };
    return { page: 'home', labProjectSlug: null };
  };

  const [routeState, setRouteState] = useState(getRouteState);
  const { page: currentPage, labProjectSlug } = routeState;
  const CurrentPage = pages[currentPage] || Home;

  const updateRoute = (targetPath) => {
    if (`${window.location.pathname}${window.location.hash}` !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    setRouteState(getRouteState());
  };

  const handleNavigate = (page) => {
    window.dispatchEvent(new CustomEvent('portfolio:navigate', { detail: { page } }));
    const hashPages = {
      games: '/#saras-lab',
      crafter: '/#crafter',
      crafts: '/#crafts',
      photo: '/#photography',
    };
    const targetPath = hashPages[page] || '/';

    updateRoute(targetPath);
  };

  const handleOpenLabProject = (project) => {
    updateRoute(getLabProjectPath(project));
  };

  const handleCloseLabProject = () => {
    updateRoute('/#saras-lab');
  };

  useEffect(() => {
    const activeLabProject = labProjectSlug ? getLabProjectBySlug(labProjectSlug) : null;

    if (activeLabProject) {
      const labTitle = getLabProjectTitle(activeLabProject);
      const labDescription = getLabProjectDescription(activeLabProject);
      const labUrl = getLabProjectUrl(activeLabProject);
      const labImage = activeLabProject.image
        ? `https://saragillard.com${activeLabProject.image}`
        : 'https://saragillard.com/images/social/saras-portfolio-og.png';
      const labImageAlt = activeLabProject.imageAlt || `${activeLabProject.title} preview by Sara Gillard.`;

      document.title = labTitle;
      setMeta('meta[name="description"]', 'content', labDescription);
      setMeta('link[rel="canonical"]', 'href', labUrl);
      setMeta('meta[property="og:url"]', 'content', labUrl);
      setMeta('meta[property="og:title"]', 'content', labTitle);
      setMeta('meta[property="og:description"]', 'content', labDescription);
      setMeta('meta[property="og:image"]', 'content', labImage);
      setMeta('meta[property="og:image:secure_url"]', 'content', labImage);
      setMeta('meta[property="og:image:alt"]', 'content', labImageAlt);
      removeMeta('meta[property="og:image:width"]');
      removeMeta('meta[property="og:image:height"]');
      setMeta('meta[name="twitter:title"]', 'content', labTitle);
      setMeta('meta[name="twitter:description"]', 'content', labDescription);
      setMeta('meta[name="twitter:image"]', 'content', labImage);
      setMeta('meta[name="twitter:image:alt"]', 'content', labImageAlt);
      return;
    }

    const titles = {
      home: "Sara's Portfolio",
      crafter: "Cross-Stitch | Sara's Portfolio",
      photo: "Photography | Sara's Portfolio",
      games: "Sara's Lab | Sara's Portfolio",
      crafts: "Crafts | Sara's Portfolio",
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
      setMeta('meta[property="og:image:secure_url"]', 'content', 'https://saragillard.com/images/social/saras-portfolio-og.png');
      setMeta('meta[property="og:image:width"]', 'content', '1200');
      setMeta('meta[property="og:image:height"]', 'content', '630');
      setMeta('meta[property="og:image:alt"]', 'content', 'Sara Gillard portfolio preview with gothic purple styling and selected creative work.');
      setMeta('meta[name="twitter:title"]', 'content', portfolioTitle);
      setMeta('meta[name="twitter:description"]', 'content', portfolioDescription);
      setMeta('meta[name="twitter:image"]', 'content', 'https://saragillard.com/images/social/saras-portfolio-og.png');
      setMeta('meta[name="twitter:image:alt"]', 'content', 'Sara Gillard portfolio preview with gothic purple styling and selected creative work.');
    }
  }, [currentPage, labProjectSlug]);

  useEffect(() => {
    const handlePopState = () => {
      setRouteState(getRouteState());
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

  if (currentPage === 'games') {
    return (
      <div className="app">
        <ParticleBackground />
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <Games
          activeProjectSlug={labProjectSlug}
          onOpenProject={handleOpenLabProject}
          onCloseProject={handleCloseLabProject}
          onNavigateProject={handleOpenLabProject}
        />
        <Footer />
      </div>
    );
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
