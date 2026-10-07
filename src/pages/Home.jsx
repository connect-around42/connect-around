import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Welcome</p>
          <h1>Connect Around</h1>
          <p className="subtitle">
            A modern web app for connecting people, sharing ideas, and growing your community.
          </p>
          <div className="actions">
            <button className="btn btn-primary">Get Started</button>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Why Choose Connect Around?</h2>
        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Built with React and Vite for blazing-fast performance and instant load times.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Beautiful Design</h3>
            <p>Modern, responsive UI that looks great on all devices and screen sizes.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Secure & Private</h3>
            <p>Your data is protected with industry-standard security practices.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics Enabled</h3>
            <p>Track your app's performance with Vercel Analytics integration.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Easy to Deploy</h3>
            <p>Deploy seamlessly to Vercel or any hosting platform of your choice.</p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Developer Friendly</h3>
            <p>Clean, well-structured code that's easy to understand and extend.</p>
          </article>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Connect?</h2>
        <p>Join our community and start connecting around the world today.</p>
        <button className="btn btn-primary">Start Your Journey</button>
      </section>
    </div>
  )
}

export default Home
