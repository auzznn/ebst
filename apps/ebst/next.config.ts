import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["@ebst/auth", "@ebst/db"]
};

export default nextConfig;
