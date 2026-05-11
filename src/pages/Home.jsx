import ImageWithFallback from '../components/ImageWithFallback.jsx';

export default function Home() {
  return (
    <main className="page home-page">
      <div className="home-content">
        <h1 className="home-title">Sara's Portfolio</h1>
        <p className="home-subtitle">Creative Technologist & AI Artist</p>
        <div className="profile-image-container">
          <ImageWithFallback
            src="/images/about/profile.jpg"
            alt="Sara"
            className="profile-image"
            fallbackClassName="profile-image-placeholder"
            fallbackLabel="Sara profile image unavailable"
          >
            <span className="profile-placeholder-icon" aria-hidden="true">S</span>
          </ImageWithFallback>
        </div>
        <a
          href="https://www.linkedin.com/in/sara-gillard-ppm-consultant/"
          target="_blank"
          rel="noreferrer"
          className="linkedin-link"
        >
          <svg className="linkedin-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          Connect on LinkedIn
        </a>
        <p className="description">Exploring the intersection of art, design, craft, games, photography, and artificial intelligence.</p>
        <section className="about-section" aria-labelledby="about-sara">
          <h2 id="about-sara">About Sara</h2>
          <div className="about-text">
            <p>I'm a creative technologist who works across AI experimentation, visual systems, photography, games, and handmade craft.</p>
            <p>My work explores how emerging technologies can amplify human creativity while still leaving room for tactile, personal, and strange forms of expression.</p>
            <p>From AI proof-of-concepts to cross-stitch patterns and kaleidoscopic imagery, I build work that asks what becomes possible when code and creativity share the same space.</p>
            <p><strong>Behind the Work</strong></p>
            <p>I believe technology should be expressive, not just functional. My approach combines practical experimentation with artistic intuition, treating code as a medium for storytelling and discovery.</p>
            <p>Whether I'm prototyping AI tools, designing visual systems, or translating pop culture and original imagery into stitchable forms, I'm driven by curiosity about how different mediums can help us see the world differently.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
