import { join } from "path";

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
        outputFileTracingRoot: join(__dirname, '../posts'),
    },
};

export default nextConfig;
