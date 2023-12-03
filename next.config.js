/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: 'https://forms.office.com/r/uS1grDcAuW',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig
