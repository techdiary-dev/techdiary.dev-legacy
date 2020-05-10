import React from 'react'
import ReactMde from 'react-mde'
import { ArticleEditorStyle } from './styles'
import Card from 'components/Card'

const ArticleEditor: React.FC = () => {
	const handleEditorChange = (e) => {}

	return (
		<ArticleEditorStyle>
			<Card>
				<ReactMde />
			</Card>
		</ArticleEditorStyle>
	)
}

export default ArticleEditor
