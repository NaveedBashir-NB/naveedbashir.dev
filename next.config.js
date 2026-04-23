const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/naveedbashir.dev' : '',
  assetPrefix: isProduction ? '/naveedbashir.dev' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
