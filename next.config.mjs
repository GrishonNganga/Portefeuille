/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com",
            "cdn.aglty.io",
            "media.licdn.com"
        ]
    },
    experimental: {
        outputFileTracingRoot: path.join(__dirname, '../posts'),
    },
};

export default nextConfig;
