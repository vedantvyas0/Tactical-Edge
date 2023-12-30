/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['tactical-uploads.s3.us-east-2.amazonaws.com', 'tactical-uploads.s3.amazonaws.com'],
    },

}

module.exports = nextConfig;
