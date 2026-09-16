import type { NextConfig } from "next";
import { basePath } from "./src/lib/site-config";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    BUILD_YEAR: String(new Date().getFullYear()),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
