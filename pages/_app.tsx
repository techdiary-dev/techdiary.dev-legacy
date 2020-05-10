import React from 'react'
import { withApollo } from 'lib/apollo'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/variables'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/mdn-like.css'
import '../styles/editStyles.scss'

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
