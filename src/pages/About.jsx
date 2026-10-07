import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-content">
          <h1>About Connect Around</h1>
          <p className="lead">
            We're building the future of community connection with modern technology and a passion for bringing people together.
          </p>
        </div>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Connect Around aims to create a seamless, intuitive platform where people from around the world can connect, collaborate, and share ideas. We believe in the power of community and the potential of technology to bring people closer together.
        </p>
      </section>

      <section className="about-section alt">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>🤝 Community First</h3>
            <p>We prioritize the needs and feedback of our community in everything we do.</p>
          </div>
          <div className="value-item">
            <h3>💡 Innovation</h3>
            <p>We constantly explore new ways to improve and enhance the user experience.</p>
          </div>
          <div className="value-item">
            <h3>🌍 Global Perspective</h3>
            <p>We embrace diversity and welcome users from all backgrounds and cultures.</p>
          </div>
          <div className="value-item">
            <h3>🔒 Security & Trust</h3>
            <p>Your privacy and security are paramount in everything we build.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Built with Modern Tech</h2>
        <p>
          Connect Around is built using the latest web technologies including React, Vite, and hosted on Vercel. We use Vercel Analytics to understand how users interact with our platform and continuously improve the experience.
        </p>
      </section>

      <section className="cta-section">
        <h2>Join Our Community</h2>
        <p>Start connecting today and be part of something amazing.</p>
        <Link to="/" className="btn btn-primary">Get Started</Link>
      </section>
    </div>
  )
}

export default About
