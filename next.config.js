/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com","jsonkeeper.com"],
    formats: ['image/avif', 'image/webp'],
  },
  // async redirects() {
  //   return [
  //     {
  //       // source: '/',
  //       // destination: '/home',
  //       permanent: false,
  //     },
  //   ]
  // },
}
