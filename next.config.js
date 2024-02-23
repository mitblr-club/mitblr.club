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
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abhigyantrips.dev',
      },
    ],
    domains: ['abhigyantrips.dev'],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
});
