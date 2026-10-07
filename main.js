import './style.css';
import { inject } from '@vercel/analytics';

inject();

const app = document.querySelector('#app');

app.innerHTML = `
  <main class="page-shell">
    <section class="hero">
      <p class="eyebrow">Welcome</p>
      <h1>Connect Around</h1>
      <p class="subtitle">
        A clean, simple web app for sharing updates, connecting people, and growing your online presence.
      </p>
      <div class="actions">
        <button class="primary">Get Started</button>
        <button class="secondary">Learn More</button>
      </div>
    </section>

    <section class="features">
      <article>
        <h2>Fast</h2>
        <p>Built to load quickly and keep the experience smooth.</p>
      </article>
      <article>
        <h2>Simple</h2>
        <p>Easy to understand, edit, and extend as your app grows.</p>
      </article>
      <article>
        <h2>Modern</h2>
        <p>Powered by Vite and ready for deployment on Vercel.</p>
      </article>
    </section>
  </main>
`;
