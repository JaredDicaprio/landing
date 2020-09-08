const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['reusecore', 'common']);
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');
module.exports = withPlugins(
  [
    [withTM],
    [
      withOptimizedImages,
      {
        mozjpeg: {
          quality: 100,
        },
        webp: {
          preset: 'default',
          quality: 100,
        },
      },
    ],
    withFonts,
    withCSS,
  ],
  {
    distDir: '../../dist/functions/next',
  }
);
