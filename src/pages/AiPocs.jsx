import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import ProjectDetailModal from '../components/ProjectDetailModal.jsx';
import { aiPocs } from '../data/aiPocs.js';

export default function AiPocs() {
  const [activePoc, setActivePoc] = useState(null);

  const navigatePoc = (direction) => {
    if (!activePoc) return;
    const currentIndex = aiPocs.findIndex((poc) => poc.id === activePoc.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + aiPocs.length) % aiPocs.length;
    setActivePoc(aiPocs[nextIndex]);
  };

  return (
    <main className="page ai-page">
      <h1 className="section-title">AI POCs</h1>
      <p className="description">Experimental proof-of-concepts exploring AI capabilities.</p>
      <div className="simple-grid">
        {aiPocs.map((poc) => (
          <ProjectCard key={poc.id} project={poc} onOpen={setActivePoc} fallbackIcon="AI" />
        ))}
      </div>
      <ProjectDetailModal
        project={activePoc}
        onClose={() => setActivePoc(null)}
        onPrevious={() => navigatePoc('prev')}
        onNext={() => navigatePoc('next')}
        fallbackIcon="AI"
      />
    </main>
  );
}
