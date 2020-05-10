import React, { useState, useEffect } from 'react'

import { UnControlled as CodeMirror } from 'react-codemirror2'

if (typeof window !== 'undefined' && typeof window.navigator !== 'undefined') {
	require('codemirror/mode/markdown/markdown')
}

import { DevTool } from 'react-hook-form-devtools'
import { useForm } from 'react-hook-form'
import * as Showdown from 'showdown'
import { Row, Column } from 'styled-grid-system-component'
import * as yup from 'yup'
import { ArticleEditorStyle } from './styles'
import Card from 'components/Card'
import Input from 'components/Form/Input'
import Button from 'components/Form/Button'
import Checkbox from 'components/Form/Checkbox'
const converter = new Showdown.Converter({
	tables: true,
	simplifiedAutoLink: true,
	strikethrough: true,
	tasklists: true
})

const ArticleEditor = (): JSX.Element => {
	let validationSchema = yup.object().shape({
		title: yup.string().required('Required'),
		body: yup.string().required('Required'),
		tags: yup.string().required('Required'),
		isPublished: yup.boolean(),
		thumbnail: yup.string().url()
	})

	const {
		register,
		handleSubmit,
		errors,
		control,
		setValue,
		getValues
	} = useForm({
		validationSchema
	})

	useEffect(() => {
		register({ name: 'body' })
	})

	const onSubmit = (data) => {
		console.log(data)
	}

	const [selectedTab, setSelectedTab] = React.useState<'write' | 'preview'>(
		'write'
	)
	const [editorValue, setEditorValue] = useState('')

	return (
		<ArticleEditorStyle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DevTool control={control} />
				<Row>
					<Column md={3}>
						<Card>
							<Checkbox
								label="প্রকাশ করবেন?"
								name="isPublished"
								inputRef={register}
							/>
							<Input
								label="টাইটেল"
								name="title"
								placeholder="আর্টিক্যাল এর টাইটেল"
								onChange={(e) => {}}
								hasError={errors?.title}
								helperText={errors?.title?.message}
								inputRef={register}
							/>
							<Input
								label="ট্যাগ সমূহ"
								name="tags"
								placeholder="আর্টিক্যাল ট্যাগ সমূহ"
								onChange={(e) => {}}
								hasError={errors?.tags}
								helperText={
									errors?.tags?.message ?? 'ট্যাগ সমূহ কমা(,) দিয়ে লিখুন'
								}
								inputRef={register}
							/>
							<Input
								label="কভার ছবি"
								name="thumbnail"
								placeholder="কভার ছবি এর url"
								onChange={(e) => {}}
								inputRef={register}
								hasError={errors?.thumbnail}
								helperText={errors?.thumbnail?.message}
							/>
							<Button>সেভ করুন</Button>
						</Card>
					</Column>
					<Column md={9}>
						<CodeMirror
							value="<h1>I ♥ react-codemirror2</h1>"
							options={{
								mode: 'markdown',
								theme: 'mdn-like',
								lineNumbers: true
							}}
						/>

						{errors?.body?.message}
					</Column>
				</Row>
			</form>
		</ArticleEditorStyle>
	)
}

export default ArticleEditor
