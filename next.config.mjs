/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/valores',
                destination: '/screens/valores',
            },
            {
                source: '/contato',
                destination: '/screens/contato',
            },
        ];
    },
};

export default nextConfig;
