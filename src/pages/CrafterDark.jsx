import { useMemo, useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import { crafterProjects } from '../data/crafterProjects.js';

const filters = ['All', 'When Stitches Kaleid', 'Pop Culture Inspired'];

export default function CrafterDark() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = useMemo(
    () => crafterProjects.filter((project) => selectedFilter === 'All' || project.category === selectedFilter),
    [selectedFilter]
  );

  const itemCounts = useMemo(() => ({
    All: crafterProjects.length,
    'When Stitches Kaleid': crafterProjects.filter((project) => project.category === 'When Stitches Kaleid').length,
    'Pop Culture Inspired': crafterProjects.filter((project) => project.category === 'Pop Culture Inspired').length,
  }), []);

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
      <p className="description">A curated collection of dark cross stitch patterns. Gothic landscapes, haunting portraits, and atmospheric scenes.</p>
      <FilterBar filters={filters} selectedFilter={selectedFilter} onChange={setSelectedFilter} itemCounts={itemCounts} />
      <div className="simple-grid">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setActiveProject}
            fallbackIcon="✶"
            cardImageVariant="crafter"
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
