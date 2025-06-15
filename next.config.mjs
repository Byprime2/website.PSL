const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/website.PSL" : "",
  assetPrefix: isGithubPages ? "/website.PSL/" : "",
};

export default nextConfig;
