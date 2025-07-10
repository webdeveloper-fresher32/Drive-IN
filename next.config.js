/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    domains: ["localhost", "vercel.app"],
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-dialog"],
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = "all";
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      };
    }

    return config;
  },
};

module.exports = nextConfig;
