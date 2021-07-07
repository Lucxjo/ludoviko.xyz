const withTM = require("next-transpile-modules")([
  "unist-util-visit-parents",
  "unist-util-visit-children"
]);

module.exports = {
    async rewrites() {
        return [
            {
                source: '/js/index.outbound-links.js',
                destination: 'https://plausible.io/js/plausible.outbound-links.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            }
      ];
  },
}

module.exports = withTM({
    target: "serverless",
    i18n: {
        locales: ["en", "eo"],
        defaultLocale: "en"
    },
    async rewrites() {
        return [
            {
                source: '/js/index.outbound-links.js',
                destination: 'https://plausible.io/js/plausible.outbound-links.js'
            },
            {
                source: '/api/event', // Or '/api/event/' if you have `trailingSlash: true` in this config
                destination: 'https://plausible.io/api/event'
            }
      ];
  },
  async headers() {
    return [
        {
            source: "/(.*)",
            headers: [
                {
                    key: 'Access-Control-Allow-Origin',
                    value: '*'
                }
            ]
        }
    ]
  },
  future: {
    webpack5: true, // if you want to use webpack 5
  },
});