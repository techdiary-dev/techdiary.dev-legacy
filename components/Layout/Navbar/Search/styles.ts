import styled from 'styled-components'

export const StyledSearch = styled.div`
	width: 50%;
	max-width: 600px;
	margin: auto;
	text-align: center;
	position: relative;
	margin: 0 15px;

	svg {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
		color: ${({ theme }) => theme.darkGrey};
	}

	input {
		border: none;
		padding: 12px 4rem 12px 15px;
		border-radius: 5px;
		background-color: #fff;
		font-size: 1.5rem;
		font-family: 'Kohinoor Bangla';
		flex-grow: 1;
		width: 100%;
	}
`
