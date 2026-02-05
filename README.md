# Claw Control Landing Page

The official landing page for [Claw Control](https://www.clawcontrol.xyz) - AI-powered infrastructure management.

## Tech Stack

- **React 19** - UI framework
- **Vite 6** - Build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

Production files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── LandingPage.tsx   # Main landing page component
│   ├── main.tsx          # React entry point
│   └── index.css         # Global styles + Tailwind
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## Deployment

This project can be deployed to:
- **Vercel** - `vercel deploy`
- **Netlify** - Connect repo, build command: `npm run build`, publish: `dist`
- **Railway** - Use included Dockerfile

## Related

- [Claw Control Main App](https://github.com/adarshmishra07/claw-control) - The main Claw Control application

## License

MIT

