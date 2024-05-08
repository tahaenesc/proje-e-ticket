/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "vitra.com.tr",
          },
          {
            protocol: "https",
            hostname: "dummyjson.com",
          },
          {
            protocol: "https",
            hostname: "www.google.com.tr",
          },
        ],
      },
};

export default nextConfig;
