/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Security and optimization
  productionBrowserSourceMaps: false, // Disable source maps in production
  
  compiler: {
    styledComponents: true,
    // Remove console.logs in production
    removeConsole:  'production',
  },
  
  // Code splitting and chunking optimization
  experimental: {
    optimizeCss: true,
  },
  
  // Webpack optimization for smaller, obfuscated bundles
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production client-side optimizations
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      };
      
      // Additional minification
      config.optimization.minimize = true;
    }
    return config;
  },
  
  images: {
    domains: ['localhost'],
  },
  
  // Environment variable security
  env: {
    // Only expose what's absolutely necessary
  },
}

module.exports = nextConfig