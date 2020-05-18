import React, { FC } from 'react'
import NextHead from 'next/head'

const defaultDescription = ''
const defaultOGURL = ''
const defaultOGImage = ''

interface Props {
	title?: string
	description?: string
	url?: string
	ogImage?: string
	keyWords?: string[]
}

const HeadTag: FC<Props> = (props: Props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title ? `${props.title} | টেক ডায়েরি` : 'টেক ডায়েরি'}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		<meta
			name="keywords"
			content={props.keyWords && props.keyWords.map((k) => k).join(',')}
		/>
	</NextHead>
)
export default HeadTag
