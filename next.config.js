/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // For static export
    images: {
        unoptimized: true, // Required for static export
    },
}

module.exports = nextConfig
