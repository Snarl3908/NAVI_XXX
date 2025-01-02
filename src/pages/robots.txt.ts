import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/siteConfig';

export const GET: APIRoute = async () => {
  const { siteUrl } = siteConfig.seo;
  
  return new Response(
    `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml`,
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
  );
}; 