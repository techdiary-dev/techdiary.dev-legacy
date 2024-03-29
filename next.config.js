const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

if (process.env.NODE_ENV === "production") {
  const withPWA = require("next-pwa");
  module.exports = withPWA({ pwa: { dest: "public" } });
}

module.exports = withCSS();

module.exports = withSass({
  sassLoaderOptions: {
    sourceMap: true,
  },
  postcssLoaderOptions: {
    sourceMap: true,
  },
});

module.exports = {
  target: "serverless",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
