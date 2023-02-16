/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/login',
        //전달받은 API 주소
        destination: '',
      },
    ];
  },
};

module.exports = nextConfig;
