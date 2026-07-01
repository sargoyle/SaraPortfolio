import { useMemo, useState } from 'react';
import CrafterDarkCard from '../components/CrafterDarkCard.jsx';
import FilterBar from '../components/FilterBar.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import { crafterProjects } from '../data/crafterProjects.js';

const filters = ['All', 'Pop Culture Inspired', 'Science', 'When Stitches Kaleid'];

export default function CrafterDark() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(
    () => crafterProjects.filter((project) => selectedFilter === 'All' || project.category === selectedFilter),
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

  const navigateProject = (direction) => {
    if (!activeProject || filteredProjects.length === 0) return;
    const currentIndex = filteredProjects.findIndex((project) => project.id === activeProject.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + filteredProjects.length) % filteredProjects.length;
    setActiveProject(filteredProjects[nextIndex]);
  };

  return (
    <main className="page crafter-page">
      <h1 className="section-title">Crafter Dark</h1>
      <p className="description">A curated collection of dark cross stitch patterns. Original designs, pop-culture pieces, science-inspired patterns, and stitched experiments.</p>
      <FilterBar filters={filters} selectedFilter={selectedFilter} onChange={setSelectedFilter} itemCounts={itemCounts} />
      <div className="simple-grid">
        {filteredProjects.map((project) => (
          <CrafterDarkCard key={project.id} project={project} onOpen={setActiveProject} />
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
