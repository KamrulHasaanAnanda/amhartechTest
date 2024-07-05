/** @type {import('next').NextConfig} */
const nextConfig = {

    compress: true,

    experimental: {
        scrollRestoration: true,
    },

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
                pathname: "**",
            },

        ],
    },
};

export default nextConfig;
