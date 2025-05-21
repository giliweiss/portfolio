import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcome-content">
        <h1>GILI WEISSBERG</h1>
        <p className="subtitle">B.Sc. Computer Science | Software Engineer</p>
        <div className="welcome-buttons">
          <a href="#about" className="btn primary">Learn More</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default Welcome; 