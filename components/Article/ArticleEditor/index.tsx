import React, { useState, useEffect } from 'react'

import { DevTool } from 'react-hook-form-devtools'
import { useForm } from 'react-hook-form'
import { Row, Column } from 'styled-grid-system-component'
import * as yup from 'yup'
import { ArticleEditorStyle } from './styles'
import Card from 'components/Card'
import Input from 'components/Form/Input'
import Button from 'components/Form/Button'
import Checkbox from 'components/Form/Checkbox'
import Editor from 'components/Form/Editor'

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
						<Editor
							value={getValues('body')}
							onChange={(d) => setValue('body', d)}
						/>
						{errors?.body?.message}
					</Column>
				</Row>
			</form>
		</ArticleEditorStyle>
	)
}

export default ArticleEditor
