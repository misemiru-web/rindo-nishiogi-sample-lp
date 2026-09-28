import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/rindo-nishiogi-sample-lp" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;