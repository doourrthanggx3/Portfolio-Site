// app/page.tsx

export default function Home() {
  return (
    <div className="intro-container">
      <h1 className="intro">Hello there,</h1>
      <h2 className="sub-intro">I am</h2>
      <h3 className="name">Marissa Lynn Noblett</h3>
      <div className="big-emoji">👋</div>
      <p className="subtitle">
        Your data deserves reliability, not repair. Let’s build something solid.
      </p>
      <a href="/projects" className="cta-button">
        🚀 See My Projects
      </a>
    </div>
  );
}

