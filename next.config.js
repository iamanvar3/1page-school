// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true,
    serverActions: {}, // ✅ Fixed: now it's an object
  },
};

module.exports = withMDX(nextConfig);
