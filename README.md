# RINNE AIABLE LLC - Next.js Website

A modern, SEO-optimized Next.js website for RINNE AIABLE LLC, featuring a knowledge base chatbot with fuzzy search capabilities.

## Features

- **SEO Optimized**: Semantic HTML, Metadata API, and FAQPage JSON-LD structured data
- **Knowledge Base Chatbot**: Powered by Fuse.js for fuzzy matching of user questions
- **Static Site Generation**: Configured for SSG deployment on Render.com
- **Modern UI**: Built with Tailwind CSS and Lucide React icons
- **Responsive Design**: Mobile-first, fully responsive layout

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

This generates a static export in the `out` directory, ready for deployment.

## Deployment on Render.com

This project is configured for static site generation (SSG) on Render.com. The `render.yaml` file contains the deployment configuration.

1. Connect your GitHub repository to Render.com
2. Render will automatically detect the configuration and deploy
3. The site will be built as a static site and served from the `out` directory

## Contact Form API Setup

The contact form uses SendGrid to send emails. You need to deploy a separate API server:

### Deploy API Server to Render.com

1. **Create a new Web Service** on Render.com
2. **Connect your GitHub repository**
3. **Set the root directory** to `api-server`
4. **Set build command**: `npm install`
5. **Set start command**: `npm start`
6. **Add environment variables**:
   - `SENDGRID_API_KEY`: Your SendGrid API key
   - `SENDGRID_FROM_EMAIL`: Your verified sender email in SendGrid
   - `RECIPIENT_EMAIL`: The email where you want to receive form submissions
   - `NODE_ENV`: `production`

7. **Update your frontend** to point to the API URL:
   - Set `NEXT_PUBLIC_API_URL` environment variable in your static site service
   - Or update the default URL in `app/components/ContactSection.tsx`

See `api-server/README.md` for more details.

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── FAQStructuredData.tsx      # JSON-LD structured data for SEO
│   │   ├── KnowledgeBaseChatbot.tsx   # FAQ chatbot with Fuse.js
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── WhySection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx                      # Root layout with metadata
│   ├── page.tsx                        # Main page
│   ├── globals.css                     # Global styles
│   └── sitemap.ts                      # Dynamic sitemap
├── api-server/                         # Express API server for SendGrid
│   ├── server.js                       # API server code
│   ├── package.json
│   └── README.md
├── public/                             # Static assets
├── rinneai_faq.json                    # FAQ data source
└── next.config.js                      # Next.js configuration
```

## SEO Features

- Semantic HTML5 elements (header, main, section, footer)
- Metadata API for custom titles and descriptions
- FAQPage JSON-LD structured data for rich snippets
- Dynamic sitemap generation
- Optimized images (when using next/image)

## Chatbot Features

The Knowledge Base Chatbot uses Fuse.js for fuzzy search, allowing users to find answers even with:
- Typos and misspellings
- Different word choices (e.g., "cost" matches "pricing")
- Partial matches
- Similar phrasing

## Technologies Used

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Fuse.js** (fuzzy search)
- **Lucide React** (icons)

## License

© 2025 RINNE AIABLE LLC. All rights reserved.