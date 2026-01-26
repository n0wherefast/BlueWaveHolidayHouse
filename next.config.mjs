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

export default nextConfig;
