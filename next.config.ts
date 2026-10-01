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
  async rewrites() {
    // Serve the Pano2VR entry without trailing-slash 308→404 from Next.
    return [
      { source: "/hero/vr", destination: "/hero/vr/index.html" },
      { source: "/hero/vr/", destination: "/hero/vr/index.html" },
    ];
  },
};

export default nextConfig;
