import React from 'react'

import {
	FormGroupStyles,
	FormInputStyles,
	FormLabelStyles,
	FormHelperTextStyles
} from './styles'

export interface Props extends React.HTMLProps<HTMLTextAreaElement> {
	hasError?: boolean
	helperText?: string
	inputRef: React.LegacyRef<HTMLTextAreaElement>
	displayOnly?: boolean
}

const Textarea = ({
	label,
	placeholder,
	name,
	onChange,
	inputRef,
	hasError = false,
	helperText,
	displayOnly = false
}: Props) => {
	return (
		<FormGroupStyles>
			<FormLabelStyles htmlFor={name}>{label}</FormLabelStyles>

			<FormInputStyles
				name={name}
				id={name}
				rows="15"
				placeholder={placeholder}
				onChange={onChange}
				ref={inputRef}
				hasError={hasError}
				disabled={displayOnly}
			/>
			<FormHelperTextStyles hasError={hasError}>
				{helperText}
			</FormHelperTextStyles>
		</FormGroupStyles>
	)
}
export default Textarea
