const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: false,
      },
    ];
  },
});
