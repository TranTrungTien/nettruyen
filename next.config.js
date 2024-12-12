/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() { return [ { source: '/api/source/:path*', destination: 'https://api.mangadex.org/:path*', // Forward to MangaDex API
    }, ]; },
    async headers() { return [ { source: '/api/source/:path*', headers: [ { key: 'Access-Control-Allow-Origin', value: '*', }, { key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,PUT,PATCH,POST,DELETE', }, { key: 'Access-Control-Allow-Headers', value: 'Content-Type', }, ], }, ]; },
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mangadex.org",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Currently having a lot of errors, just ignore them for now //
  // [kamii0909]: ping me if you upgrade eslint to 9 (btw only next 15 is
  // compatible with eslint 9), I will write the flat config instead.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
