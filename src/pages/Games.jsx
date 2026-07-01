import { useMemo, useState } from 'react';
import LabProjectCard from '../components/LabProjectCard.jsx';
import LabProjectDetailModal from '../components/LabProjectDetailModal.jsx';
import { labProjects } from '../data/labProjects.js';

export default function Games() {
  const [activeProject, setActiveProject] = useState(null);
  const orderedProjects = useMemo(
    () => [...labProjects].sort((first, second) => first.order - second.order),
    []
  );

  const navigateProject = (direction) => {
    if (!activeProject || orderedProjects.length === 0) return;
    const currentIndex = orderedProjects.findIndex((project) => project.id === activeProject.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + orderedProjects.length) % orderedProjects.length;
    setActiveProject(orderedProjects[nextIndex]);
  };

  return (
    <main className="page games-page">
      <h1 className="section-title">Sara’s Lab</h1>
      <p className="description lab-page-intro">Sara’s Lab is where the systems live: creative tools, type experiments, games, and prototypes that sit behind the finished work.</p>
      <div className="lab-project-grid">
        {orderedProjects.map((project) => (
          <LabProjectCard key={project.id} project={project} onOpen={setActiveProject} />
        ))}
      </div>
      <LabProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onPrevious={() => navigateProject('prev')}
        onNext={() => navigateProject('next')}
      />
    </main>
  );
}
