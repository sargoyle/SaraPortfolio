import { useMemo, useState } from 'react';
import CraftCard from '../components/CraftCard.jsx';
import CraftDetailModal from '../components/CraftDetailModal.jsx';
import { crafts } from '../data/crafts.js';

export default function Crafts() {
  const [activeCraft, setActiveCraft] = useState(null);
  const orderedCrafts = useMemo(() => crafts, []);
  const canNavigate = orderedCrafts.length > 1;

  const navigateCraft = (direction) => {
    if (!activeCraft || !canNavigate) return;
    const currentIndex = orderedCrafts.findIndex((craft) => craft.id === activeCraft.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + orderedCrafts.length) % orderedCrafts.length;
    setActiveCraft(orderedCrafts[nextIndex]);
  };

  return (
    <main className="page crafts-page">
      <h1 className="section-title">Crafts</h1>
      <p className="description crafts-page-intro">
        A curated collection of just some of the many, many, many things I’ve made over the years. For cross-stitch patterns, please see the Cross-Stitch tab.
      </p>
      <div className="craft-grid" aria-label="Crafts collection">
        {orderedCrafts.map((craft) => (
          <CraftCard key={craft.id} craft={craft} onOpen={setActiveCraft} />
        ))}
      </div>
      <CraftDetailModal
        craft={activeCraft}
        onClose={() => setActiveCraft(null)}
        onPrevious={canNavigate ? () => navigateCraft('prev') : undefined}
        onNext={canNavigate ? () => navigateCraft('next') : undefined}
      />
    </main>
  );
}
