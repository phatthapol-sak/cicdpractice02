import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/nextjstest",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
