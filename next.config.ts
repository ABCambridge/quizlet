import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/home" }],
    };
  },
};

export default nextConfig;
