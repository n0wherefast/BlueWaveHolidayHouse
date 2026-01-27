/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{ source: '/pages/contacts', destination: '/#contacts', permanent: true },
			{ source: '/pages/contacts/', destination: '/#contacts', permanent: true },
			{ source: '/contacts', destination: '/#contacts', permanent: true },
			{ source: '/pages/gallery', destination: '/#gallery', permanent: true },
			{ source: '/pages/gallery/', destination: '/#gallery', permanent: true },
			{ source: '/gallery', destination: '/#gallery', permanent: true },
		]
	}
};

// Add caching headers for static assets to improve Lighthouse cache lifetimes
nextConfig.headers = async () => {
	return [
		{
			source: '/_next/static/:path*',
			headers: [
				{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
			]
		},
		{
			source: '/images/:path*',
			headers: [
				{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
			]
		},
		{
			source: '/:file*.webp',
			headers: [
				{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }
			]
		},
		{
			source: '/sitemap.xml',
			headers: [
				{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' }
			]
		},
		{
			source: '/robots.txt',
			headers: [
				{ key: 'Cache-Control', value: 'public, max-age=86400, s-maxage=86400' }
			]
		}
	];
};

export default nextConfig;
