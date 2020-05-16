import styled from 'styled-components'

export const ArticleCardStyle = styled.div`
	margin-bottom: 25px;
	position: relative;
	.floatingActions {
		position: absolute;
		top: 10px;
		right: 10px;
		display: flex;
		flex-direction: column;
	}

	.title {
		font-size: 2.2rem;
	}
	.time {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.darkGrey};
	}

	.excerpt {
		color: ${({ theme }) => theme.lightDark};
		font-size: 1.6rem;
	}

	.thumbnail {
		margin: 10px -15px 10px -15px;

		img {
			max-width: 100%;
		}
		cursor: pointer;
	}

	.tags {
		a {
			font-size: 1.6rem;
			margin-right: 8px;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	.footer {
		display: flex;
		justify-content: space-between;
		margin-top: 8px;

		.state {
			font-size: 1.4rem;
			display: flex;
			align-items: center;
			margin-right: 12px;

			&:last-child {
				margin-right: 0;
			}

			svg {
				margin-right: 6px;
			}
		}

		.commentsAndLikes {
			display: flex;
		}
	}
`
