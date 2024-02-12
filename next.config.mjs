/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        port: "",
        pathname: "/s2/**",
      },
      {
        protocol: "https",
        hostname: "wwjhliaafehjmjclixuw.supabase.co",
        port: "",
        pathname: "/storage/v1/**",
      },
    ],
  },
};

export default nextConfig;
