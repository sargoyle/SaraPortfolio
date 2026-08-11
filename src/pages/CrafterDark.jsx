import { useEffect, useMemo, useState } from 'react';
import CrafterDarkCard from '../components/CrafterDarkCard.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import { crafterProjects } from '../data/crafterProjects.js';

const filters = ['All', 'Pop Culture Inspired', 'Science', 'When Stitches Kaleid'];
const preloadedDetailImages = new Set();

function getDetailPreloadImages(project) {
  if (Array.isArray(project.images) && project.images.length > 1) {
    return project.images.slice(1);
  }

  return [project.image2].filter(Boolean);
}

function preloadImageSource(src) {
  if (!src || preloadedDetailImages.has(src) || typeof window === 'undefined') return;

  preloadedDetailImages.add(src);
  const image = new window.Image();
  image.decoding = 'async';
  image.src = src;
}

function scheduleIdleTask(callback) {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    const id = window.requestIdleCallback(callback, { timeout: 1500 });
    return () => window.cancelIdleCallback(id);
  }

  const id = window.setTimeout(callback, 300);
  return () => window.clearTimeout(id);
}

function preloadProjectDetailImages(project) {
  getDetailPreloadImages(project).forEach(preloadImageSource);
}

export default function CrafterDark() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(
    () => [...crafterProjects]
      .filter((project) => selectedFilter === 'All' || project.category === selectedFilter)
      .sort((first, second) => first.title.localeCompare(second.title, undefined, { sensitivity: 'base' })),
    [selectedFilter]
  );

  const itemCounts = useMemo(
    () => filters.reduce((counts, filter) => ({
      ...counts,
      [filter]: filter === 'All'
        ? crafterProjects.length
        : crafterProjects.filter((project) => project.category === filter).length,
    }), {}),
    []
  );

  useEffect(() => {
    let isCancelled = false;
    let cancelScheduledTask;
    const detailImages = [...new Set(filteredProjects.flatMap(getDetailPreloadImages))]
      .filter((src) => src && !preloadedDetailImages.has(src));

    const preloadNextImage = (index) => {
      if (isCancelled || index >= detailImages.length) return;

      preloadImageSource(detailImages[index]);
      cancelScheduledTask = scheduleIdleTask(() => preloadNextImage(index + 1));
    };

    cancelScheduledTask = scheduleIdleTask(() => preloadNextImage(0));

    return () => {
      isCancelled = true;
      cancelScheduledTask?.();
    };
  }, [filteredProjects]);

  const navigateProject = (direction) => {
    if (!activeProject || filteredProjects.length === 0) return;
    const currentIndex = filteredProjects.findIndex((project) => project.id === activeProject.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  return (
    <main className="page crafter-page">
      <h1 className="section-title">Cross-Stitch</h1>
      <p className="description">A curated collection of dark cross stitch patterns. Original designs, pop-culture pieces, science-inspired patterns, and stitched experiments. For more general craft items, please see the Crafts tab.</p>
      <FilterBar filters={filters} selectedFilter={selectedFilter} onChange={setSelectedFilter} itemCounts={itemCounts} />
      <div className="simple-grid" aria-label="Cross-Stitch projects">
        {filteredProjects.map((project) => (
          <CrafterDarkCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
            onPreload={preloadProjectDetailImages}
          />
        ))}
      </div>
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onPrevious={() => navigateProject('prev')}
        onNext={() => navigateProject('next')}
        fallbackIcon="✶"
      />
    </main>
  );
}
