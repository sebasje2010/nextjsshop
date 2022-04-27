const withPWA=require('next-pwa');
const runtimeCaching=require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register:true,
    mode: 'production',
    disable: false,
    runtimeCaching,
  },
  reactStrictMode: true,
  images: {
  domains: ['placeimg.com','api.lorem.space','cdn.lorem.space'],}
})