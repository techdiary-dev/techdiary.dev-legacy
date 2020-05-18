import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GlobalStyles } from 'styles/globalStyles'

export default class TechdiaryRoot extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet()

		const page = renderPage((App) => (props) =>
			sheet.collectStyles(
				<>
					<GlobalStyles />
					<App {...props} />
				</>
			)
		)

		const styleTags = sheet.getStyleElement()

		return { ...page, styleTags }
	}

	render() {
		return (
			<html>
				<Head>
					{this.props.styleTags}
					<link rel="stylesheet" href="/prism/prism.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script src="/prism/prism.js"></script>
				</body>
			</html>
		)
	}
}
