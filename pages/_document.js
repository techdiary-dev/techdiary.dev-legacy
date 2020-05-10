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
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,400;1,700&display=swap"
					/>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}
