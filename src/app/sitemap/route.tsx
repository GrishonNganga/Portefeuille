export async function GET() {
    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
    http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


        <url>
            <loc>https://www.grish.xyz/</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>1.00</priority>
        </url>
        <url>
            <loc>https://www.grish.xyz/outside-work</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://www.grish.xyz/battle-station</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://www.grish.xyz/blog</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://www.grish.xyz/hall-of-fame</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>0.80</priority>
        </url>
        <url>
            <loc>https://www.grish.xyz/professional</loc>
            <lastmod>2024-04-07T20:31:02+00:00</lastmod>
            <priority>0.80</priority>
        </url>


    </urlset>`;

    return new Response(xmlContent, { headers: { "Content-Type": "text/xml" } });
}
