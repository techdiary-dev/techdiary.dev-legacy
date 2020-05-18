import styled from 'styled-components'

export const StyledUserCardWithArticles = styled.div`
	.heading {
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1.4rem;
		margin-top: 18px;
	}

	.link {
		color: ${({ theme }) => theme.primaryDark};
		font-size: 1.4rem;
		font-weight: bold;
	}
	.articles {
	}
	.article {
		&__title {
			font-size: 1.6rem;
			color: ${({ theme }) => theme.semiDark};
		}
		&__time {
			font-size: 1.4rem;
			color: ${({ theme }) => theme.darkGrey};
			font-weight: bold;
			margin-top: 0;
		}
	}
`
