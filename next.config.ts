import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        hostname: "pbs.twimg.com",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "cdn.simpleicons.org",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
      {
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
