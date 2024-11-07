/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgflip.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
