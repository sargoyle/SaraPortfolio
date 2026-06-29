import ImageWithFallback from '../components/ImageWithFallback.jsx';
import { games } from '../data/games.js';

export default function Games() {
  return (
    <main className="page games-page">
      <h1 className="section-title">Sara's Lab</h1>
      <p className="description">Games, creative tools, type experiments, and prototypes in progress.</p>
      {games.map((game) => (
        <article key={game.id} className="game-content">
          <h2 className="game-title">{game.title}</h2>
          {game.subtitle && <p className="game-subtitle">{game.subtitle}</p>}
          <div className="project-images">
            {[game.image1, game.image2].filter(Boolean).map((image, index) => (
              <div key={image} className="project-image-container">
                <ImageWithFallback
                  src={image}
                  alt={`${game.title} image ${index + 1}`}
                  className="project-image"
                  fallbackClassName="project-image-placeholder"
                  fallbackLabel={`${game.title} image ${index + 1} unavailable`}
                >
                  <span className="project-image-placeholder-icon" aria-hidden="true">◆</span>
                  <span className="project-image-placeholder-text">Image {index + 1}</span>
                </ImageWithFallback>
              </div>
            ))}
          </div>
          <p className="game-description">{game.description}</p>
        </article>
      ))}
    </main>
  );
}
