/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://1page-school.vercel.app', // Change later to your custom domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://1page-school.vercel.app/sitemap.xml',
    ],
  },
};
