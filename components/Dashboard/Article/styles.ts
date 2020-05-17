import styled from 'styled-components'
import { CardStyle } from 'components/Card/styles'

export const DashboardArticle = styled.div<{
	isPublished: boolean
}>`
	margin-bottom: 25px;
	.excerpt {
		font-size: 1.6rem;
		margin-top: 0;
	}

	svg {
		width: 14px;
		height: 14px;
		margin-right: 15px;
		cursor: pointer;
	}

	.time {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.darkGrey};
	}

	${CardStyle} {
		background-color: ${({ theme, isPublished }) =>
			!isPublished && theme.lightGrey};
	}
`
