import styled from 'styled-components'

import Highlight from 'react-syntax-highlighter'
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple'

export const Highlighter = ({
	value,
	language = 'jsx'
}: {
	value: string
	language: string
}) => {
	return (
		<Highlight
			className="highlight-pre-tag"
			style={style}
			language={language ? language : 'jsx'}
			showLineNumbers={true}
		>
			{value ?? ''}
		</Highlight>
	)
}

export const Wrapper = styled.div`
	font-family: sans-serif;
	text-align: center;
`
