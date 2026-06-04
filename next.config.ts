import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {protocol: "https",
        hostname: "icon.icepanel.io"
      }
    ]
    }
  }



export default nextConfig;
