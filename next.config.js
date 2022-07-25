/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enables the styled-components SWC transform
  styledComponents: true,
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
