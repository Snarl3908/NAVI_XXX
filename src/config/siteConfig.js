export const siteConfig = {
  // SEO and Meta information
  seo: {
    // Website title used in browser tab, search results, and social sharing
    title: "TestX",
    // Website description for search engines and social sharing
    description: "KKK",
    // Base URL of the website, used for canonical links and social sharing
    siteUrl: "https://placeholder.com",
    // Robots.txt configuration
    robots: {
      userAgent: "*",
      allow: ["/"],
      disallow: [] // optional: add paths you want to disallow
    },
    // Default social sharing image (OpenGraph and Twitter)
    socialImage: "/preview.webp",
    // Favicon configuration
    favicon: {
      // Default favicon
      default: "/favicon.svg",
      // Optional: different sizes/types of favicons
      // icons: [
      //   { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      //   { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      //   { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }
      // ]
    },
    // 添加更多 SEO 相关配置
    sitemap: {
      lastmod: "2024-12-24",
      changefreq: "weekly",
      priority: 1.0
    }
  },

  // Hero section configuration
  hero: {
    title: {
      strong: "NAVI 2 ICT",
      light: "The Tools With Love"
    },
    styles: {
      wrapper: "mb-6 text-4xl leading-tight",
      strong: "font-bold",
      light: "font-light"
    }
  },

  // Author information
  author: {
    // Author's display name
    name: "KKKB",
    // Author's social handle (used in footer)
    handle: "@KKKX_me",
  },

  // Social and footer configuration
  social: {
    // Footer text configuration
    footer: {
      prefix: "Brought to you by",
    },
    // Social links configuration
    links: {
      website: {
        url: "https://KKKX.me",
        label: "Personal Website",
        icon: "fa-solid fa-globe"
      },
      github: {
        url: "https://github.com/KKK-me",
        label: "GitHub",
        icon: "fa-brands fa-github"
      },
      twitter: {
        url: "https://x.com/KKK_me",
        label: "Twitter",
        icon: "fa-brands fa-twitter"
      },
      buyMeACoffee: {
        url: "https://buymeacoffee.com/KKK_me",
        label: "Buy Me A Coffee",
        icon: "fa-solid fa-mug-hot"
      }
    }
  },

  // Theme configuration
  theme: {
    // Default theme mode: 'light', 'dark', or 'system'
    defaultMode: "light",
    // 添加主题相关配置
    options: ["light", "dark", "system"],
    styles: {
      colors: {
        accent: "136, 58, 234",
        accentLight: "224, 204, 250",
        accentDark: "49, 10, 101",
      },
      fonts: {
        system: "'Source Code Pro', system-ui, sans-serif",
        code: "'Source Code Pro', Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"
      },
      components: {
        navIcon: {
          base: [
            "rounded-full text-foreground transition-all group-hover:scale-110",
            "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium",
            "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:pointer-events-none disabled:opacity-50",
            "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            "hover:bg-accent hover:text-accent-foreground h-9 w-9"
          ],
          variants: {
            ghost: "ghost",
            icon: "icon"
          }
        }
      }
    }
  }
}; 