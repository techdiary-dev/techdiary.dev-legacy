import styled from 'styled-components'

export const FormGroupStyles = styled.div`
	margin: 0 0 1.8rem;
	position: relative;
`

export const FormLabelStyles = styled.label`
	font-size: 1.4rem;
	font-weight: 600;
	max-width: 100%;
	display: block;
	margin-bottom: 0.5rem;
`
export const FormInputStyles = styled.input<{
	hasError: boolean
	ref: any
}>`
	display: block;
	border: 1px solid
		${({ hasError, theme }) => (hasError ? theme.red : theme.darkGrey)};
	border-radius: 5px;
	padding: 1rem;
	outline: none;
	background: transparent;
	margin-bottom: 0.5rem;
	font-size: 1.6rem;
	width: 100%;
	max-width: 100%;
	line-height: 1;
	box-sizing: border-box;

	font-family: inherit;
	&:disabled {
		background-color: #ddd;
	}
`
export const FormHelperTextStyles = styled.span<{ hasError: boolean }>`
	font-size: 1.4rem;
	color: ${({ hasError, theme }) => (hasError ? theme.red : theme.darkGrey)};
`
