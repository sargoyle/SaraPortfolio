import { useMemo, useState } from 'react';
import FilterBar from '../components/FilterBar.jsx';
import FullscreenImageModal from '../components/FullscreenImageModal.jsx';
import PhotoCard from '../components/PhotoCard.jsx';
import { photos } from '../data/photos.js';

const filters = ['All', 'Abstract Macro', 'When visions kaleid'];

export default function Photography() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredPhotos = useMemo(
    () => photos.filter((photo) => selectedFilter === 'All' || photo.category === selectedFilter),
    [selectedFilter]
  );

  const itemCounts = useMemo(() => ({
    All: photos.length,
    'Abstract Macro': photos.filter((photo) => photo.category === 'Abstract Macro').length,
    'When visions kaleid': photos.filter((photo) => photo.category === 'When visions kaleid').length,
  }), []);

  const navigatePhoto = (direction) => {
    if (!activePhoto || filteredPhotos.length === 0) return;
    const currentIndex = filteredPhotos.findIndex((photo) => photo.id === activePhoto.id);
    const offset = direction === 'next' ? 1 : -1;
    const nextIndex = (currentIndex + offset + filteredPhotos.length) % filteredPhotos.length;
    setActivePhoto(filteredPhotos[nextIndex]);
  };

  return (
    <main className="page photo-page">
      <h1 className="section-title">Photography</h1>
      <p className="description">Capturing moments and movement through the lens.</p>
      <FilterBar filters={filters} selectedFilter={selectedFilter} onChange={setSelectedFilter} itemCounts={itemCounts} />
      <div className="simple-grid photo-grid">
        {filteredPhotos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo} onOpen={setActivePhoto} />
        ))}
      </div>
      <FullscreenImageModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onPrevious={() => navigatePhoto('prev')}
        onNext={() => navigatePhoto('next')}
      />
    </main>
  );
}
