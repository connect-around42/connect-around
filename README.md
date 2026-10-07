# Connect Around

A modern web application built with React, Vite, and deployed to Vercel with analytics enabled.

## Features

- ⚡ Lightning fast with Vite
- ⚛️ Built with React 18
- 🎨 Beautiful responsive design
- 🌍 Dark/Light mode toggle
- 📊 Vercel Analytics integration
- 🚀 Ready to deploy to Vercel
- 📱 Fully responsive and mobile-friendly

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone this repository:

```bash
git clone https://github.com/connect-around42/connect-around.git
cd connect-around
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
connect-around/
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   └── About.css
│   ├── App.jsx            # Main app component
│   ├── App.css
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── package.json           # Dependencies and scripts
└── .gitignore
```

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Analytics**: Vercel Analytics
- **Styling**: CSS Modules
- **Linting**: ESLint

## Deployment

This project is configured to deploy on Vercel. To deploy:

1. Push your changes to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect it's a Vite React project
4. Click Deploy

## Environment Variables

No environment variables are required for basic functionality. Vercel Analytics works automatically once deployed to Vercel.

## License

MIT

## Support

For support, please open an issue on the GitHub repository.
