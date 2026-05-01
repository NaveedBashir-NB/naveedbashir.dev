const isProduction = process.env.NODE_ENV === 'production';
const isNetlify = !!process.env.NETLIFY;
const useGhPagesPaths = isProduction && !isNetlify;

const nextConfig = {
  output: 'export',
  basePath: useGhPagesPaths ? '/naveedbashir.dev' : '',
  assetPrefix: useGhPagesPaths ? '/naveedbashir.dev' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
