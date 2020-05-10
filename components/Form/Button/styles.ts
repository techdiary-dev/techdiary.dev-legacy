import styled from 'styled-components'

export const ButtonStyles = styled.button`
	display: inline-block;
	border: 1px solid ${({ theme }) => theme.primary};
	border-radius: 4px;
	background: ${({ theme }) => theme.primary};
	color: #ffffff;
	font-weight: 400;
	font-size: 14px;
	padding: 1.2rem 1.5rem;
	margin: 0 0 0.5rem 0;
	vertical-align: middle;
	text-align: center;
	cursor: pointer;
	text-decoration: none;
	line-height: 1;
	transition: 300ms;
	font-family: inherit;

	&:focus {
		outline: none;
	}

	&:hover {
		background-color: ${({ theme }) => theme.primaryDark};
	}
`
