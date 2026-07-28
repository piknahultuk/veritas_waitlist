import type { NextConfig } from "next";

// GitHub Pages serves this project from https://piknahultuk.github.io/veritas_waitlist/,
// so the base path only applies to the static export built for GitHub Actions —
// local dev and `next build` stay at the site root.
const isGithubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";
const basePath = isGithubPagesBuild ? "/veritas_waitlist" : "";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
