import gql from 'graphql-tag'

export const CREATE_ARTICLE = gql`
	mutation CREATE_ARTICLE(
		$title: String!
		$body: String!
		$tags: [String!]
		$isPublished: Boolean!
		$thumbnail: String
	) {
		createArticle(
			data: {
				title: $title
				body: $body
				tags: $tags
				isPublished: $isPublished
				thumbnail: $thumbnail
			}
		) {
			_id
			title
			tags
		}
	}
`

export const DELETE_ARTICLE = gql`
	mutation DELETE_ARTICLE($_id: ID!) {
		deleteArticle(_id: $_id) {
			_id
		}
	}
`

export const UPDATE_ARTICLE = gql`
	mutation UPDATE_ARTICLE(
		$_id: ID!
		$title: String!
		$body: String!
		$tags: [String!]
		$isPublished: Boolean!
		$thumbnail: String
	) {
		updateArticle(
			_id: $_id
			data: {
				title: $title
				body: $body
				tags: $tags
				isPublished: $isPublished
				thumbnail: $thumbnail
			}
		) {
			_id
			title
			tags
			isPublished
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

export const ARTICLE_DETAILS = gql`
	query ARTICLE_DETAILS($slug: String, $_id: ID) {
		article(idOrSlug: { slug: $slug, _id: $_id }) {
			_id
			title
			thumbnail
			body
			createdAt
			isPublished
			tags
			excerpt
			author {
				profilePhoto
				name
				username
				articles {
					_id
					title
					slug
				}
			}
		}
	}
`
