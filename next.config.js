const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://forms.office.com/r/uS1grDcAuW',
        permanent: false,
      },
    ];
  },
});
