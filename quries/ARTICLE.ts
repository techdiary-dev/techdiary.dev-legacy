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
			title
		}
	}
`

export const DELETE_ARTICLE = gql`
	mutation DELETE_ARTICLE($_id: ID!) {
		deleteArticle(_id: $_id) {
			title
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
			title
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
				title
				excerpt
				slug
				thumbnail
				tags
				createdAt
				updatedAt
				isPublished
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
				articles(pagination: { limit: 5 }) {
					data {
						_id
						title
						slug
						createdAt
					}
				}
			}
		}
	}
`

export const NEW_DIARY_ARRIAVED_NOTIFICATION = gql`
	subscription NEW_DIARY_ARRIAVED_NOTIFICATION {
		newArticle {
			articleTitle
			authorName
			articleUrl
		}
	}
`
