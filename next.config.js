/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export', // For static export
    images: {
        unoptimized: true, // Required for static export
    },
    // Remove basePath for custom domain
    // If you need to deploy to GitHub Pages without custom domain, uncomment the line below:
    // basePath: '/smart-service-electronics',
    trailingSlash: true, // Ensures routes work properly
}

module.exports = nextConfig
