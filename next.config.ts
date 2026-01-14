import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Only apply basePath in production for GitHub Pages deployment
  basePath: process.env.NODE_ENV === "production" ? "/Portfolio_Jessica_Borda" : "",
  // Explicitly set the root to silence the Turbopack workspace warning
  // especially when there are multiple lockfiles in parent directories
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
