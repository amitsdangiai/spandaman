import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects/krsumi",
        destination: "/projects/krisumi",
        permanent: true,
      },
      {
        source: "/projects/krsumi/:path*",
        destination: "/projects/krisumi/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
