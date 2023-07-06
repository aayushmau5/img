/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/aayushmau5/img/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
