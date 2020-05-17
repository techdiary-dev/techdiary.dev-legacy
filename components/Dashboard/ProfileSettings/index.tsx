import React, { useState } from 'react'
import { DevTool } from 'react-hook-form-devtools'
import { useForm, useFieldArray } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import np from 'nprogress'
import * as yup from 'yup'
import { Row, Column } from 'styled-grid-system-component'
import { Card, CardHeader } from 'components/Card'
import Input from 'components/Form/Input'
import Button from 'components/Form/Button'
import { UPDATE_PROFILE, ME } from 'quries/AUTH'
import sweetAlert from 'sweetalert'
import ProfilePhoto from './ProfilePhoto'
// import { Container } from './styles';

interface Props {
	user: any
}

const ProfileSettings: React.FC<Props> = ({ user }: Props) => {
	const [checked, setChecked] = useState(false)
	let [updateProfile, { loading }] = useMutation(UPDATE_PROFILE, {
		refetchQueries: [{ query: ME }]
	})

	if (loading) np.start()
	else np.done()

	let validationSchema = yup.object().shape({
		name: yup.string().required('Required'),
		education: yup.string(),
		designation: yup.string(),
		location: yup.string().required('Required'),
		bio: yup.string().required('Required'),
		// workInfo: yup.string().required('Required'),
		// skills: yup.string().required('Required'),
		links: yup.array().of(
			yup.object().shape({
				text: yup.string().required('Required'),
				link: yup.string().url('Invalid URL').required('Required')
			})
		),
		workInfo: yup.array().of(
			yup.object().shape({
				name: yup.string().required('Required'),
				designation: yup.string().required('Required'),
				startTime: yup.string().required('Required'),
				endTime: yup.string()
			})
		)
	})

	const { register, handleSubmit, errors, control, reset, getValues } = useForm(
		{
			validationSchema,
			defaultValues: {
				...user
			}
		}
	)

	const {
		fields: skillFields,
		append: appendSkill,
		remove: removeSkill
	} = useFieldArray({
		control,
		name: 'skills'
	})

	const {
		fields: workInfoFileds,
		append: appendWorkInfo,
		remove: removeWorkInfo
	} = useFieldArray({
		control,
		name: 'workInfo'
	})

	const {
		fields: linkFields,
		append: appendLink,
		remove: removeLink
	} = useFieldArray({
		control,
		name: 'links'
	})

	console.log(errors)

	const onSubmit = (variables) => {
		// if (variables.skills)
		// 	variables.skills = variables.skills.map((s) => s.value)

		console.log(variables.skills)

		updateProfile({ variables }).then(() => {
			sweetAlert(
				'হুররে!! ',
				'আপনার প্রোফাইল সফলভাবে হালনাগাদ করা হয়েছে',
				'success'
			)
		})
	}

	return (
		<>
			{/* {process.env.NODE_ENV !== 'production' && <DevTool control={control} />} */}
			{/* <pre>{JSON.stringify(user, undefined, 4)}</pre> */}
			<ProfilePhoto profilePic={user.profilePhoto} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Card>
					<CardHeader>সাধারন তথ্যসমূহ</CardHeader>
					<Input
						name="name"
						isRequired
						inputRef={register()}
						placeholder="আপনার নাম"
						label="নাম"
						hasError={errors?.name}
						helperText={errors?.name?.message}
					/>
					<Input
						name="username"
						inputRef={register()}
						placeholder="আপনার ইউজারনেম"
						label="ইউজারনেম"
						defaultValue={getValues('username')}
						displayOnly={true}
					/>
					<Input
						name="email"
						inputRef={register()}
						placeholder="আপনার ইমেইল"
						label="ইমেইল"
						defaultValue={getValues('email')}
						displayOnly={true}
					/>
					<Input
						name="location"
						inputRef={register()}
						placeholder="আপনার ঠিকানা"
						label="ঠিকানা"
						hasError={errors?.location}
						helperText={errors?.location?.message}
					/>
					<Input
						name="education"
						inputRef={register()}
						placeholder="আপনার শিক্ষাগত যোগ্যতা"
						label="শিক্ষাগত যোগ্যতা"
						hasError={errors?.education}
						helperText={errors?.education?.message}
					/>
					<Input
						name="designation"
						inputRef={register()}
						placeholder="আপনার পেশাগত বা মনস্তাত্বিক উপাধি"
						label="পেশাগত উপাধি (Designation or job title)"
						hasError={errors?.designation}
						helperText={errors?.designation?.message}
					/>
					<Input
						name="bio"
						type="textarea"
						inputRef={register()}
						placeholder="আপনার সম্পর্কে কিছু কথা লিখুন...।"
						label="জীবন বৃত্তান্ত"
						hasError={errors?.bio}
						helperText={errors?.bio?.message}
					/>
					<Button type="submit">হালনাগাদ</Button>
				</Card>
				<Card>
					<CardHeader>আপনার লিংক সমূহ</CardHeader>
					{linkFields.map((field, index) => (
						<Row key={field.id}>
							<Column md={5}>
								<Input
									type="text"
									inputRef={register()}
									name={`links[${index}].text`}
									placeholder="text"
									hasError={errors?.links && errors?.links[index]?.text}
									helperText={
										errors?.links && errors?.links[index]?.text?.message
									}
									label="Text"
								/>
							</Column>
							<Column md={5}>
								<Input
									type="text"
									inputRef={register()}
									name={`links[${index}].link`}
									placeholder="link"
									hasError={errors?.links && errors?.links[index]?.link}
									helperText={
										errors?.links && errors?.links[index]?.link?.message
									}
									label="Link"
								/>
							</Column>
							<Column md={2}>
								<Button size="round" onClick={() => removeLink(index)}>
									x
								</Button>
							</Column>
						</Row>
					))}
					<Button
						size="round"
						onClick={() => appendLink({ text: '', link: '' })}
					>
						+
					</Button>
				</Card>
				<Card>
					<CardHeader>কর্মস্থল এর তথ্য</CardHeader>
					{workInfoFileds.map((field, index) => (
						<div key={field.id}>
							<Input
								type="text"
								inputRef={register()}
								name={`workInfo[${index}].name`}
								placeholder="text"
								hasError={errors?.workInfo && errors?.workInfo[index]?.name}
								helperText={
									errors?.workInfo && errors?.workInfo[index]?.name?.message
								}
								label="Name"
							/>

							<Input
								type="text"
								inputRef={register()}
								name={`workInfo[${index}].designation`}
								placeholder="Designation"
								hasError={
									errors?.workInfo && errors?.workInfo[index]?.designation
								}
								helperText={
									errors?.workInfo &&
									errors?.workInfo[index]?.designation?.message
								}
								label="Designation"
							/>
							<Input
								type="date"
								inputRef={register()}
								name={`workInfo[${index}].startTime`}
								placeholder="link"
								hasError={
									errors?.workInfo && errors?.workInfo[index]?.startTime
								}
								helperText={
									errors?.workInfo &&
									errors?.workInfo[index]?.startTime?.message
								}
								label="Start Time"
							/>
							<Input
								type="date"
								inputRef={register()}
								name={`workInfo[${index}].endTime`}
								placeholder="link"
								hasError={errors?.workInfo && errors?.workInfo[index]?.endTime}
								helperText={
									errors?.workInfo && errors?.workInfo[index]?.endTime?.message
								}
								label="End Time"
							/>

							<Column md={2}>
								<Button size="round" onClick={() => removeWorkInfo(index)}>
									&times;
								</Button>
							</Column>
						</div>
					))}

					<Row>
						<Column>
							<Button
								onClick={() =>
									appendWorkInfo({
										text: '',
										designation: '',
										startTime: '',
										endTime: ''
									})
								}
							>
								নতুন আরেকটি
							</Button>
							<Button type="submit">হালনাগাদ করুন</Button>
						</Column>
					</Row>
				</Card>
				<Card>
					<CardHeader>আপনার দক্ষতা সমূহ</CardHeader>
					{skillFields.map((field, index) => (
						<Row key={field.id}>
							<Column md={5}>
								<Input
									type="text"
									inputRef={register()}
									name={`skills[${index}]`}
									placeholder="text"
									hasError={errors?.skills && errors?.skills[index]?.value}
									helperText={
										errors?.skills && errors?.skills[index]?.value?.message
									}
									label="Text"
								/>
							</Column>
							<Column md={2}>
								<Button size="round" onClick={() => removeSkill(index)}>
									x
								</Button>
							</Column>
						</Row>
					))}
					<Button size="round" onClick={() => appendSkill({ value: '' })}>
						+
					</Button>
				</Card>
			</form>
		</>
	)
}

export default ProfileSettings