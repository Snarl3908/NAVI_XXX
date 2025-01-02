import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/siteConfig';

export const GET: APIRoute = async () => {
  const { siteUrl, sitemap } = siteConfig.seo;
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}</loc>
    <lastmod>${sitemap.lastmod}</lastmod>
    <changefreq>${sitemap.changefreq}</changefreq>
    <priority>${sitemap.priority}</priority>
  </url>
</urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml'
      }
    }
  );
}; 