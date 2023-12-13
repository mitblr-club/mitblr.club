const { withContentlayer } = require('next-contentlayer');

module.exports = withContentlayer({
  typescript: {
    // !!WARN!! this is temporary, while we assign types
    // to all underlying components
    ignoreBuildErrors: true,
  },
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
