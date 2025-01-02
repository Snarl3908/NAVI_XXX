import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/siteConfig';

export const GET: APIRoute = async () => {
  const { siteUrl, robots } = siteConfig.seo;
  
  return new Response(
    `${robots.userAgent ? `User-agent: ${robots.userAgent}` : ''}
${robots.allow?.map(path => `Allow: ${path}`).join('\n')}
${robots.disallow?.map(path => `Disallow: ${path}`).join('\n')}
${siteUrl ? `Sitemap: ${siteUrl}/sitemap.xml` : ''}`.trim(),
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );
}; 