# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview built site locally
- `npm install` - Install dependencies

## Architecture Overview

This is an **Astro.js personal website** based on the Dante theme with:

### Content Collections

- **Blog posts**: `src/content/blog/` - Markdown files with frontmatter (title, publishDate, tags, excerpt)
- **Projects**: `src/content/projects/` - Portfolio projects with descriptions and publish dates  
- **Pages**: `src/content/pages/` - Static pages (about, contact, terms)

### Configuration

- **Site config**: `src/data/site-config.ts` - Main site settings, navigation, hero content, social links
- **Content schemas**: `src/content.config.ts` - Zod schemas for all content collections
- **Astro config**: `astro.config.mjs` - Configured for GitHub Pages deployment at ryan-serpico.github.io/personal-site

### Key Components

- **BaseLayout.astro**: Main layout with navigation, header, footer
- **Data utilities**: `src/utils/data-utils.ts` - Content sorting, tag filtering, date handling
- **Theme system**: Dark/light mode via localStorage and Tailwind CSS classes

### Styling

- Uses **Tailwind CSS v4** via Vite plugin
- Custom CSS in `src/styles/global.css`
- Theme variables and responsive design throughout

### Deployment

- **GitHub Actions**: `.github/workflows/deploy.yml` - Automated deployment to GitHub Pages
- Builds and deploys on push to main branch

### File-based Routing

- `src/pages/` follows Astro's file-based routing
- Dynamic routes for blog posts, projects, and tag pages
- RSS feed generated at `/rss.xml`
