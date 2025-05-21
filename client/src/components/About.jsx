import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Computer Science graduate from Ben-Gurion University of the Negev, driven by a deep curiosity for technology and a love for creative problem-solving.
              With a strong foundation in software development and hands-on experience across various projects, I enjoy turning ideas into real, working systems.
              A quick learner and a natural collaborator, I bring energy, clarity, and determination to every team I join — always eager to grow, build, and make an impact.
            </p>
            <p>Here's a glimpse into my technical toolkit:</p>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Programming Languages</h4>
                <ul>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C/C++</li>
                  <li>JavaScript</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Web Development</h4>
                <ul>
                  <li>HTML &amp; CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Express</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Databases</h4>
                <ul>
                  <li>MongoDB</li>
                  <li>SQL</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools &amp; Platforms</h4>
                <ul>
                  <li>Linux</li>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Azure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="/profile.jpg" alt="My Profile" className="profile-image" />
            <div className="image-placeholder">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 