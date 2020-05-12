import styled from 'styled-components'

export const StyledFileUploader = styled.div`
	fieldset {
		display: flex;
		align-items: center;
		border: 1px solid ${({ theme }) => theme.lightDark};
		padding: 0;

		svg {
			display: inline-block;
		}
	}

	.url {
		font-size: 1.6rem;
		padding: 5px;
	}
`
