import styled from 'styled-components'

export const StyledSearch = styled.div`
	width: 50%;
	max-width: 600px;
	margin: auto;
	text-align: center;
	position: relative;
	margin: 0 15px;

	.search-icon {
		position: absolute;
		right: 10px;
		top: 50%;
		height: 20px;
		width: 20px;
		transform: translateY(-50%);
		color: ${({ theme }) => theme.darkGrey};
	}

	input {
		border: none;
		padding: 12px 4rem 12px 15px;
		border-radius: 5px;
		background-color: #eeeeee;
		font-size: 1.5rem;
		font-family: 'Kohinoor Bangla';
		flex-grow: 1;
		width: 100%;

		transition: 500ms;

		/* &:hover {
			background-color: #efecec;
			box-shadow: 0 0px 3px rgba(0, 0, 0, 0.16);
			cursor: pointer;
		} */

		&:focus {
			outline: none;
			box-shadow: 0 0 0;
			cursor: initial;
		}
	}
`
