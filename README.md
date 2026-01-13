# Jason Yap - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience.

**Live Site**: https://jasonydog9.github.io/pixel-flame-show/

## Technologies Used

- **React** 18 - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components

## Local Development

### Prerequisites

- Node.js 18+ and npm
- [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating) (recommended)

### Setup

```sh
# Clone the repository
git clone https://github.com/jasonydog9/pixel-flame-show.git

# Navigate to project directory
cd pixel-flame-show

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at http://localhost:8080/

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions.

### Initial Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings > Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**

### Automatic Deployment

Every push to the `main` branch will automatically:
1. Build the project
2. Deploy to GitHub Pages
3. Make it live at https://jasonydog9.github.io/pixel-flame-show/

### Manual Deployment

You can also trigger a deployment manually:
1. Go to **Actions** tab in your GitHub repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Project Structure

```
pixel-flame-show/
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── .github/
│   └── workflows/      # GitHub Actions
└── vite.config.ts      # Vite configuration
```

## License

© 2026 Jason Yap. All rights reserved.
