# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Usage

### Configuration (siteConfig.js)

The site configuration is centralized in `src/config/siteConfig.js`. Here's how to customize different aspects of your site:

#### SEO Configuration

```javascript
seo: {
  // Website title used in browser tab and social sharing
  title: "Your Site Title",
  
  // Website description for search engines and social sharing
  description: "Your site description",
  
  // Base URL of your website
  siteUrl: "https://example.com",
  
  // Social sharing image
  socialImage: "/preview.webp",
  
  // Favicon configuration
  favicon: {
    // Default favicon
    default: "/favicon.svg",
    // Optional: Configure multiple favicon sizes/types
    icons: [
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
    ]
  },
  
  // Sitemap configuration
  sitemap: {
    lastmod: "2024-12-24",
    changefreq: "weekly",
    priority: 1.0
  }
}
```

#### Theme Configuration

```javascript
theme: {
  // Default theme mode: 'light', 'dark', or 'system'
  defaultMode: "light",
  
  // Theme style customization
  styles: {
    colors: {
      accent: "136, 58, 234",
      accentLight: "224, 204, 250",
      accentDark: "49, 10, 101",
    },
    fonts: {
      system: "system-ui, sans-serif",
      code: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"
    },
    components: {
      navIcon: {
        base: [
          "rounded-full",
          "text-foreground",
          // ... other utility classes
        ],
        variants: {
          ghost: "ghost",
          icon: "icon"
        }
      }
    }
  }
}
```

#### Social Links & Author Information

```javascript
// Author information
author: {
  name: "Your Name",
  handle: "@your_handle"
},

// Social links configuration
social: {
  website: {
    url: "https://yoursite.com",
    label: "Personal Website",
    icon: "Globe"
  },
  github: {
    url: "https://github.com/yourusername",
    label: "GitHub",
    icon: "Github"
  },
  twitter: {
    url: "https://twitter.com/yourhandle",
    label: "Twitter",
    icon: "Twitter"
  }
}
```

### Features

#### Dynamic Sitemap & Robots.txt

The sitemap and robots.txt files are generated dynamically based on your configuration. They will be available at:
- `/sitemap.xml`
- `/robots.txt`

No additional configuration needed - they use the `siteUrl` from your SEO config.

#### Theme Switching

The theme switcher supports three modes: light, dark, and system. Configure the default mode in `theme.defaultMode`.

#### Social Icons

Social icons in the footer and navbar are automatically generated from your `social` configuration. To add a new social link:

1. Add a new entry to the `social` object
2. Provide the URL, label, and icon
3. If using a custom SVG icon, include the SVG path

#### SEO & Meta Tags

All SEO-related meta tags (including Open Graph and Twitter Cards) are automatically generated from your SEO configuration. To customize:

1. Update the relevant fields in `seo` configuration
2. Meta tags will be automatically updated in all pages

#### Custom Styling

To customize the site's appearance:

1. Update colors in `theme.styles.colors`
2. Modify fonts in `theme.styles.fonts`
3. Adjust component styles in `theme.styles.components`

### Examples

#### Adding a New Social Link

```javascript
social: {
  instagram: {
    url: "https://instagram.com/yourhandle",
    label: "Instagram",
    icon: "instagram",
    svg: "..." // Your Instagram icon SVG path
  }
}
```

#### Customizing Theme Colors

```javascript
theme: {
  styles: {
    colors: {
      accent: "255, 62, 0",
      accentLight: "255, 182, 162",
      accentDark: "180, 43, 0"
    }
  }
}
```

#### Adding Custom Favicon Sizes

```javascript
seo: {
  favicon: {
    default: "/favicon.svg",
    icons: [
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-chrome-192x192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
    ]
  }
}
```
