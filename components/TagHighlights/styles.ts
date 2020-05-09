import styled from 'styled-components'

export const TagHighlightStyles = styled.div`
	.tag-name {
		font-family: 'Space Mono', monospace;
		font-size: 2.2rem;
		font-weight: 400;
		font-style: italic;
		color: ${({ theme }) => theme.semiDark};
	}

	.articles {
		margin-top: 15px;
	}
	.article {
		margin-bottom: 15px;
		&__title {
			font-size: 1.6rem;
		}
		&__username {
			font-family: 'Space Mono', monospace;
			font-size: 1.4rem;
			font-weight: 700;
			color: ${({ theme }) => theme.semiDark};
		}
	}
`
