import ImageWithFallback from '../components/ImageWithFallback.jsx';

export default function Home() {
  return (
    <main className="page home-page">
      <div className="home-content">
        <div className="home-copy">
          <h1 className="home-title">Sara’s Portfolio</h1>
          <p className="home-subtitle">Creative Technologist, Artist & Pattern Maker</p>
        </div>
        <div className="home-media">
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
          <div className="home-intro">
            <p>I create gothic cross-stitch patterns, photography-led visual work, games, and small creative tools.</p>
            <p>Most of my work starts with an image, an idea, or a strange little system, then turns into something tactile, visual, or playable.</p>
          </div>
        </div>
        <section className="about-section" aria-labelledby="about-sara">
          <h2 id="about-sara">About Sara</h2>
          <div className="about-text">
            <p>I’m a creative technologist, artist and pattern maker working across cross-stitch, photography, games, visual systems, and digital tools.</p>
            <p>My main creative practice is designing and making cross-stitch patterns, especially darker, gothic, pop-culture, and image-led pieces. Photography often feeds into that process, either as source material, texture, reference, or a way to find patterns hiding in ordinary things.</p>
            <p>I’m interested in the point where digital work becomes physical. A photo becomes a pattern. A pattern becomes a stitched object. A game idea becomes a set of rules, cards, images, and choices.</p>
            <p>AI and code are part of the toolkit when they’re useful, but they’re not the point. The point is making things that feel personal, strange, structured, and worth spending time with.</p>
            <h2>Behind the Work</h2>
            <p>This site collects the things I make: cross-stitch designs, photography, board game concepts, type experiments, and creative tools.</p>
            <p>Some pieces are finished. Some are prototypes. Some are part of a longer process. The common thread is making visual systems that can become something real, whether that is a stitched piece, a game, a font, or a tool that helps me make the next thing.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
