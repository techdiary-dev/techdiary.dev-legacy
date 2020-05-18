import styled from 'styled-components'
import { ButtonSize } from './index'

export const ButtonStyles = styled.button<{
	size?: ButtonSize
	transparent?: boolean
}>`
	display: inline-block;
	border: 1px solid ${({ theme }) => theme.primary};
	border-radius: ${({ size }) => (size === 'round' ? '50%' : '4px')};

	background: ${({ theme, transparent }) =>
		transparent ? 'transparent' : theme.primary};

	color: #ffffff;
	font-weight: 400;
	font-size: 14px;
	padding: ${({ size }) =>
		size === 'sm'
			? '0.2rem 0.5rem'
			: size === 'lg'
			? '1.2rem 1.5rem'
			: '1.2rem 1.5rem'};
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

	margin-right: 15px;
`
