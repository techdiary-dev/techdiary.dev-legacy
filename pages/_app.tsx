import React from 'react'
import { withApollo } from 'lib/apollo'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/variables'

import 'react-markdown-editor-lite/lib/index.css'
import 'styles/editStyles.scss'

export function reportWebVitals(metric) {
	console.log(metric)
}

const TectDiaryRoot = ({ Component, pageProps }) => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default withApollo({ ssr: true })(TectDiaryRoot)
