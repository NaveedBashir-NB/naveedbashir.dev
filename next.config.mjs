const nextConfig = {
  reactStrictMode: true,
  output: "export", // Enables static export
  basePath: "/naveedbashir.dev", // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Fix for Next.js images on GitHub Pages
  },
};

export default nextConfig; 