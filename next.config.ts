import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["nodemailer"],
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
    // Missing tiles, marker images, and road labels are proxied from the
    // hosted tour so the local player (with internal hotspot links) can run
    // without shipping the ~140MB tile set.
    return {
      beforeFiles: [
        { source: "/hero/vr", destination: "/hero/vr/index.html" },
        { source: "/hero/vr/", destination: "/hero/vr/index.html" },
      ],
      afterFiles: [
        {
          source: "/hero/vr/:path*",
          destination:
            "https://nsventures.in/Krisumi-Gurugram-VR-New-V06/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
