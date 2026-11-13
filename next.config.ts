import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // Dynamic build ID guarantees Vercel CDN and browser caches are completely busted on every deploy
  generateBuildId: async () => {
    return `aqua-fresh-release-${Date.now()}`;
  },
  async redirects() {
    return [
      {
        source: "/products/mens-waterproof-casual-outdoor-jacket",
        destination: "/products/water-sampling-station",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          {
            key: "Clear-Site-Data",
            value: '"cache", "cookies", "storage"',
          },
        ],
      },
    ];
  },
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
