module.exports = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{ico,png,jpg,webp,mp3}'],
  swDest: 'dist/sw.js',
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 7500000,
}
