/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  redirects: async () => {
    return [
      {
        source: '/contact',
        destination: '/about',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
