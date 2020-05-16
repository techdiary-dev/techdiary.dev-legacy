import React from 'react'

import {
	FormGroupStyles,
	FormInputStyles,
	FormTextareaStyles,
	FormLabelStyles,
	FormHelperTextStyles
} from './styles'

export interface Props
	extends React.HTMLProps<HTMLInputElement | HTMLTextAreaElement> {
	hasError?: boolean
	helperText?: string
	inputRef: React.LegacyRef<HTMLInputElement | HTMLTextAreaElement>
	displayOnly?: boolean
	defaultValue?: string
	isRequired?: boolean
}

const Input = ({
	label,
	placeholder,
	name,
	type = 'text',
	onChange,
	inputRef,
	hasError = false,
	helperText,
	displayOnly = false,
	defaultValue,
	isRequired
}: Props) => {
	return (
		<FormGroupStyles>
			<FormLabelStyles htmlFor={name}>
				{label} {isRequired && <span className="is-required">*</span>}
			</FormLabelStyles>
			{type === 'textarea' ? (
				<FormTextareaStyles
					name={name}
					id={name}
					defaultValue={displayOnly ? defaultValue : undefined}
					placeholder={placeholder}
					onChange={onChange}
					ref={displayOnly ? undefined : inputRef}
					hasError={hasError}
					disabled={displayOnly}
				/>
			) : (
				<FormInputStyles
					type={type}
					name={name}
					id={name}
					defaultValue={displayOnly ? defaultValue : undefined}
					placeholder={placeholder}
					onChange={onChange}
					ref={displayOnly ? undefined : inputRef}
					hasError={hasError}
					disabled={displayOnly}
				/>
			)}

			<FormHelperTextStyles hasError={hasError}>
				{helperText}
			</FormHelperTextStyles>
		</FormGroupStyles>
	)
}
export default Input
