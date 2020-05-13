const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const Dotenv = require('dotenv-webpack')

module.exports = withCSS()

module.exports = withSass({
	sassLoaderOptions: {
		sourceMap: true
	},
	postcssLoaderOptions: {
		sourceMap: true
	}
})

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/
			},
			use: ['@svgr/webpack']
		})

		config.plugins.push(new Dotenv({ silent: true }))

		return config
	}
}
