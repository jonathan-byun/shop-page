/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'firebasestorage.googleapis.com',
            }
        ]
    },
    async redirects() {
        return [
            {
                source:'/',
                destination:'/homepage',
                permanent: true
            }
        ]
    }
}

module.exports = nextConfig
