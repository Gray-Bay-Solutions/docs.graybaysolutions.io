# Gray Bay Solutions - Documentation Hub

A comprehensive internal documentation system built with Next.js 14, TypeScript, and Tailwind CSS for managing company processes, services, development guidelines, and more.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the documentation hub.

## 📚 Adding & Editing Documentation

### File Structure

All documentation files are stored in the `docs/` directory using Markdown format:

```
docs/
├── getting-started.md
├── development/
│   ├── index.md
│   └── coding-standards.md
├── services/
│   └── index.md
├── processes/
│   └── index.md
├── sales/
│   └── index.md
├── templates/
│   └── index.md
├── configuration/
│   └── index.md
└── security/
    └── index.md
```

### Adding a New Documentation Page

#### 1. Create the Markdown File

Create a new `.md` file in the appropriate directory:

```bash
# Example: Adding a new development guide
touch docs/development/git-workflow.md
```

#### 2. Add Frontmatter (Optional)

Include metadata at the top of your markdown file:

```markdown
---
title: "Git Workflow Guide"
description: "Our standardized Git workflow and branching strategy"
author: "Development Team"
date: "2024-01-15"
---

# Git Workflow Guide

Your content here...
```

#### 3. Update the Sidebar Navigation

Edit `src/components/sidebar.tsx` to add your new page to the navigation:

```typescript
{
  title: 'Development',
  icon: Code,
  items: [
    { title: 'Overview', href: '/docs/development' },
    { title: 'Coding Standards', href: '/docs/development/coding-standards' },
    { title: 'Git Workflow', href: '/docs/development/git-workflow' }, // Add this line
  ],
},
```

### Creating a New Documentation Section

#### 1. Create the Directory Structure

```bash
mkdir docs/new-section
touch docs/new-section/index.md
```

#### 2. Add Section to Sidebar

Add the new section to the navigation array in `src/components/sidebar.tsx`:

```typescript
{
  title: 'New Section',
  icon: YourIcon, // Import from lucide-react
  items: [
    { title: 'Overview', href: '/docs/new-section' },
    // Add more pages as needed
  ],
},
```

#### 3. Import the Icon

Add your chosen icon to the imports:

```typescript
import { ChevronDown, ChevronRight, Code, Users, Settings, BookOpen, Workflow, Database, Shield, YourIcon, X, type LucideIcon } from 'lucide-react'
```

### Markdown Features Supported

#### Basic Formatting

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*
`Inline code`

- Bullet point
- Another point

1. Numbered list
2. Second item
```

#### Code Blocks

````markdown
```javascript
function example() {
  console.log("Syntax highlighting supported!");
}
```

```bash
npm install package-name
```
````

#### Tables

```markdown
| Service | Price | Monthly |
|---------|-------|---------|
| Website | $1,500 | $99 |
| Chatbot | $800 | $100 |
| SEO | $1,000 | $300 |
```

#### Links and Images

```markdown
[Internal link](/docs/services)
[External link](https://example.com)

![Alt text](path/to/image.png)
```

#### Blockquotes

```markdown
> Important note or quote
> Multiple lines supported
```

### Best Practices

#### File Naming
- Use lowercase with hyphens: `git-workflow.md`
- Be descriptive: `client-onboarding-process.md`
- Avoid spaces and special characters

#### Content Structure
- Start with a clear H1 title
- Use descriptive headings (H2, H3, etc.)
- Include a brief description/overview
- Break up long content with subheadings
- Use bullet points for lists
- Include code examples where relevant

#### Writing Style
- Write in clear, concise language
- Use active voice
- Include practical examples
- Keep paragraphs short
- Use consistent terminology

### URL Structure

Documentation URLs follow this pattern:
- `/docs/section` - Section overview (index.md)
- `/docs/section/page-name` - Individual pages

Examples:
- `/docs/development` → `docs/development/index.md`
- `/docs/development/git-workflow` → `docs/development/git-workflow.md`
- `/docs/services` → `docs/services/index.md`

### Editing Existing Documentation

1. Navigate to the appropriate `.md` file in the `docs/` directory
2. Edit the content using standard Markdown syntax
3. Save the file
4. Changes will be reflected immediately in development mode
5. For production, rebuild and redeploy the application

### Advanced Features

#### Table of Contents
The table of contents is automatically generated from your headings (H1-H6) and appears on the right side of the page on desktop.

#### Search Functionality
All documentation content is searchable through the built-in search feature.

#### Mobile Responsive
All documentation is optimized for mobile viewing with a collapsible sidebar.

### Troubleshooting

#### Page Not Showing
1. Check that the file exists in the correct `docs/` subdirectory
2. Verify the file has a `.md` extension
3. Ensure the sidebar navigation includes the correct path
4. Check for typos in the file path or sidebar href

#### Styling Issues
1. Ensure proper Markdown syntax
2. Check that code blocks use proper fencing (```)
3. Verify table syntax is correct

#### Build Errors
1. Check for invalid frontmatter YAML
2. Ensure all internal links point to existing pages
3. Verify image paths are correct

## 🛠 Technical Details

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: react-markdown with syntax highlighting
- **Icons**: Lucide React

### Key Components
- `src/components/sidebar.tsx` - Navigation sidebar
- `src/components/markdown.tsx` - Markdown renderer
- `src/components/header.tsx` - Top navigation
- `src/app/docs/[...slug]/page.tsx` - Dynamic doc pages
- `src/lib/markdown.ts` - Markdown processing utilities

### Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type checking
npm run type-check

# Linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📝 Contributing

1. Create your documentation in the appropriate `docs/` subdirectory
2. Update the sidebar navigation if adding new pages
3. Test locally with `npm run dev`
4. Commit your changes with descriptive messages
5. Deploy to production

---

For questions or support, contact the development team or refer to the internal documentation at `/docs/development`. 