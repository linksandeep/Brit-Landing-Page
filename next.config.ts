import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.codingninjas.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "files.codingninjas.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
