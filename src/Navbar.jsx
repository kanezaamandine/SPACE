
import "./navbar.css"

function Home() {
  return (
    <div className="page-container">
      <div className="top">
        <div id="logo">
          <div className="logo-icon"></div>
          <span className="logo-text">Growthspace</span>
        </div>
        <div id="text">
          <p id="p1" style={{ color: "rgb(201, 157, 76)" }}>
            Home
          </p>
          <p id="p1">Services</p>
          <p id="p1">About</p>
          <p id="p1">Contact</p>
        </div>
        <button id="register">Register</button>
      </div>

      
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="high-growth-badge">
              <span>High Growth</span>
              <div className="badge-icon">📈</div>
            </div>

            <h1 className="hero-title">
              We <span className="highlight">Simplify</span> growth
              <br />
              in <span className="highlight">growth</span>
              <span className="dark">space.</span>
            </h1>

            <p className="hero-description">
              The Readability Test Tool provides a quick and easy way to test
              <br />
              the readability of your work.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Services</button>
            </div>
          </div>

          <div className="hero-right">
            <div className="astronaut-container">
              <div className="background-circle"></div>
              <img src="/astronaut.png" alt="Astronaut" className="astronaut-image" />
            </div>
          </div>
        </div>
      </div>

      
      <div className="partners-section">
        <h2 className="partners-title">Our Partners</h2>
        <div className="partners-logos">
          <div className="partner-logo">
            <span>dribbble</span>
          </div>
          <div className="partner-logo">
            <span>yahoo!</span>
          </div>
          <div className="partner-logo">
            <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
