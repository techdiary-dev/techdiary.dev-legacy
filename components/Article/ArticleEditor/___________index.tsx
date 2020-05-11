import React, { useState } from 'react'
import * as yup from 'yup'

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
	require('codemirror/mode/markdown/markdown')
}

import * as Showdown from 'showdown'
import { Row, Column } from 'styled-grid-system-component'
import { ArticleEditorStyle } from './styles'
import Editor from 'components/Form/Editor'

const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true
})

interface EditorState {
	content: string
	metaData: {
		title: string
		published: boolean
		thumbnail: string
		tags: string
	}
}

let validationSchema = yup.object().shape({
	title: yup.string().required('Required'),
	body: yup.string().required('Required'),
	tags: yup.string().required('Required'),
	isPublished: yup.boolean(),
	thumbnail: yup.string().url()
})

const ArticleEditor = (): JSX.Element => {
	let [value, setValue] = useState<EditorState>({
		content: `---\n\ntitle:\npublished: false\nthumbnail:\ntags:\n\n---\n\n\nএখান থেকে লিখা শুরু করুন...`,
		metaData: {
			title: '',
			published: true,
			thumbnail: '',
			tags: ''
		}
	})

	return (
		<ArticleEditorStyle>
			<Row>
				<Column md={8}>
					<Editor value={value.content} onChange={(d) => setValue(d)} />
				</Column>
				<Column md={4}>
					<pre>{JSON.stringify(value, undefined, 4)}</pre>
				</Column>
			</Row>
		</ArticleEditorStyle>
	)
}

export default ArticleEditor
