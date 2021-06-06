module.exports = {
    target: "serverless",
    async rewrites() {
        return [
            {
                source: '/js/index.js',
                destination: 'https://plausible.io/js/plausible.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            }
      ];
  },
}