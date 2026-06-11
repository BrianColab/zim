import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.php/contact-us",
        destination: "https://www.zim.ca/",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "https://www.zim.ca/",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "https://www.zim.ca/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "https://www.zim.ca/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
