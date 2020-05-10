import React from 'react'

import {
	FormGroupStyles,
	FormInputStyles,
	FormLabelStyles,
	FormHelperTextStyles
} from './styles'

export interface Props extends React.HTMLProps<HTMLInputElement> {
	hasError?: boolean
	helperText?: string
	inputRef: React.LegacyRef<HTMLInputElement>
}

const Input = ({
	label,
	placeholder,
	name,
	type = 'text',
	onChange,
	inputRef,
	hasError = false,
	helperText
}: Props) => {
	return (
		<FormGroupStyles>
			<FormLabelStyles htmlFor={name}>{label}</FormLabelStyles>
			<FormInputStyles
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={onChange}
				ref={inputRef}
				hasError={hasError}
			/>
			<FormHelperTextStyles hasError={hasError}>
				{helperText}
			</FormHelperTextStyles>
		</FormGroupStyles>
	)
}
export default Input
