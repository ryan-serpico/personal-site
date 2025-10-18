# CLAUDE.md

## Project Overview

This is Ryan Serpico's personal portfolio website, showcasing his work as Deputy Director of Newsroom AI and Automation at Hearst Newspapers. The site features projects, blog posts, and information about Ryan's approach to using AI responsibly in journalism.

## Technical Guidance

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview built site locally
- `npm install` - Install dependencies

## Architecture Overview

This is Ryan Serpico's **personal portfolio site** built with Astro.js, based on the Dante theme by Just Good UI. Key features include:

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

## Adding Images to Content

To add optimized images to project or blog posts:

1. **Use .mdx extension** - Rename `.md` files to `.mdx` to enable JSX component support
2. **Import the Image component** - Add at the top of the file after frontmatter:
   ```jsx
   import { Image } from 'astro:assets';
   import myImage from '../../assets/images/my-image.png';
   ```
3. **Use the Image component** - Place it in your content:
   ```jsx
   <Image src={myImage} alt="Description of image" />
   ```
4. **Store images** - Place all images in `src/assets/images/` directory
5. **Path reference** - For files in `src/content/projects/`, use `../../assets/images/` path (go up 2 levels from projects folder to src, then into assets)

Astro automatically optimizes images (responsive sizes, WebP conversion, lazy loading, etc.) when using the Image component this way.

## Theme Attribution

This site uses the [Dante theme](https://github.com/JustGoodUI/dante-astro-theme) by [Just Good UI](https://justgoodui.com/), a minimal and responsive single-author blog and portfolio theme for Astro.js.
