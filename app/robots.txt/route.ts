import { NextResponse } from 'next/server'

export function GET() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bluewaveholidayhouse.com').replace(/\/$/, '')

  const body = `# robots.txt for Blue Wave Holiday House
User-agent: *
Allow: /

# Disallow admin/dashboard and other non-public areas
Disallow: /dashboard/
Disallow: /api/dashboard/
Disallow: /admin/

Sitemap: ${siteUrl}/sitemap.xml
Host: ${siteUrl}
`

  return new NextResponse(body, {
    status: 200,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
