import styled from 'styled-components'
import { UserAvaterSize } from './index'

export const StyledUserAvater = styled.div<{ size?: UserAvaterSize }>`
	display: flex;
	align-items: center;
	.avater {
		height: 40px;
		width: 40px;
		border-radius: 100%;
		margin-right: 1.3rem;
		${({ size }) =>
			size === 'xl' &&
			`
			height: 65px;
			width: 65px;
		  
		`}
		${({ size }) =>
			size === 'sm' &&
			`
		  	height: 20px;
			width: 20px;
		`}
	}

	.info {
		font-family: inherit;

		.name {
			font-size: 1.6rem;
			font-weight: 600;
		}
		.username {
			font-size: 1.4rem;
		}

		${({ size }) =>
			size === 'xl' &&
			`
			.name{
				font-size: 2.2rem
			}
			.username {
				font-size: 1.6rem;
			}
		  
		`}
		${({ size }) =>
			size === 'sm' &&
			`
			.name{
				display: none;
			}
			.username {
				font-size: 1.4rem;
			}
		  
		`}
	}
`
