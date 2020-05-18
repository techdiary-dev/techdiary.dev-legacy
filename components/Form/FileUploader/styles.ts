import styled from 'styled-components'

export const StyledFileUploader = styled.div`
	margin-top: 25px;
	fieldset {
		display: flex;
		align-items: center;
		padding: 0;
		border: none;
		position: relative;

		svg {
			position: absolute;
			right: 8px;
			top: 8px;
			display: inline-block;
			cursor: pointer;
		}
	}

	.url {
		font-size: 1.6rem;
		width: 100%;
		padding: 12px;
		border-radius: 5px;
		border: 1px solid ${({ theme }) => theme.darkGrey};
	}
`
