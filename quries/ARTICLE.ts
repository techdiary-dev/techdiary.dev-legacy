import gql from 'graphql-tag'

export const CREATE_ARTICLE = gql`
	mutation CREATE_ARTICLE(
		$title: String!
		$body: String!
		$tags: [String!]
		$isPublished: Boolean!
	) {
		createArticle(
			data: {
				title: $title
				body: $body
				tags: $tags
				isPublished: $isPublished
			}
		) {
			_id
			title
			tags
		}
	}
`

export const ARTICLE_LIST = gql`
	query ARTICLE_LIST($page: Int) {
		articles(pagination: { limit: 5, page: $page }) {
			resourceCount
			pageCount
			currentPage
			data {
				_id
				title
				excerpt
				slug
				thumbnail
				tags
				createdAt
				updatedAt
				author {
					name
					username
					profilePhoto
				}
			}
		}
	}
`
