import styled from 'styled-components'

export const LoginStyle = styled.div`
	display: flex;
	align-items: center;
	background: ${({ theme }) => theme.secondary};
	color: ${({ theme }) => theme.dark};
	border-radius: 5px;
	justify-content: center;
	padding: 10px;
	cursor: pointer;

	svg {
		margin-right: 10px;
	}
	span {
		font-size: 1.6rem;
	}

	box-shadow: 0 3px 9px 4px rgba(0, 0, 0, 0.05);
	transition: 300ms;
	&:hover {
		box-shadow: 0 3px 9px 4px rgba(0, 0, 0, 0.1);
		transform: translateY(-2px);
	}

	button {
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		font-family: 'Kohinoor Bangla';
	}
`
