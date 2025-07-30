// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: true, // Required for MDX in app/ directory in some Next.js versions
    serverActions: true,
  },
};

module.exports = withMDX(nextConfig);
