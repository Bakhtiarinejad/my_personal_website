# Quick Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   cd website
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
website/
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Site footer
│   ├── pages/
│   │   ├── HomePage.tsx           # Homepage with course listings
│   │   ├── CoursePage.tsx          # Individual course page
│   │   └── PresentationViewer.tsx  # Presentation viewer
│   ├── data/
│   │   └── courses.ts     # Course and presentation data
│   ├── App.tsx            # Main app with routing
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── public/
│   ├── presentation-options-trading.html  # Options trading presentation
│   └── vite.svg          # Favicon
└── dist/                  # Build output (generated)
```

## Adding New Courses

Edit `src/data/courses.ts`:

```typescript
export const courses: Course[] = [
  {
    id: 'derivatives',
    title: 'Derivatives Trading',
    description: '...',
    category: 'Finance',
    presentations: [
      {
        id: 'options-trading-intro',
        title: 'Introduction to Options',
        description: '...',
        duration: '45 minutes',
      },
    ],
  },
  // Add more courses here
];
```

## Adding New Presentations

1. Add the HTML file to `public/` folder
2. Update the presentation map in `src/pages/PresentationViewer.tsx`:

```typescript
const presentationMap: Record<string, string> = {
  'options-trading-intro': '/presentation-options-trading.html',
  'new-presentation': '/new-presentation.html',  // Add here
};
```

3. Add the presentation to the course in `src/data/courses.ts`

## Customization

### Colors

Edit `src/index.css` to change color variables:

```css
:root {
  --color-accent: #006d77;
  --color-text-primary: #003049;
  /* ... */
}
```

### Branding

- Update site name in `src/components/Header.tsx`
- Update footer content in `src/components/Footer.tsx`
- Update meta tags in `index.html`

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for Cloudflare Pages deployment instructions.

