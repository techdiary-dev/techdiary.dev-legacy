import React from 'react'
import { withApollo } from 'lib/apollo'

const TectDiaryRoot = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default withApollo({ ssr: true })(TectDiaryRoot)
