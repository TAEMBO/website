/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.taembo.net",
                port: "",
            },
        ],
    },
};

module.exports = nextConfig;
