import styled from 'styled-components'

export const StyledForbiddenPage = styled.div`
	text-align: center;

	.icon {
		svg {
			width: 100px;
			height: 100px;
			stroke-width: 1px;
			border-color: ${({ theme }) => theme.darkGrey};
		}

		margin-bottom: 2.5rem;
	}

	.title {
		color: ${({ theme }) => theme.dark};
	}
`
