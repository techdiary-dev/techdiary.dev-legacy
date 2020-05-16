import gql from 'graphql-tag'

export const LOGIN = gql`
	mutation LOGIN($code: String!) {
		login(oAuthCode: $code) {
			token
		}
	}
`

export const LOGOUT = gql`
	mutation LOGOUT {
		logout
	}
`

export const ME = gql`
	query ME_QUERY {
		me {
			_id
			name
			username
			email
			profilePhoto
			education
			designation
			location
			bio

			skills
			workInfo {
				name
				designation
				startTime
				endTime
			}
			links {
				text
				link
			}

			articles {
				_id
				title
				slug
				excerpt
				thumbnail
				createdAt
				isPublished
			}
		}
	}
`

export const USER_PROFILE = gql`
	query USER_PROFILE($username: String!) {
		profile(username: $username) {
			_id
			name
			username
			email
			profilePhoto
			education
			designation
			location
			bio

			skills
			workInfo {
				name
				designation
				startTime
				endTime
			}
			links {
				text
				link
			}

			articles {
				_id
				title
				slug
				excerpt
				thumbnail
				createdAt
				isPublished
			}
		}
	}
`

export const UPDATE_PROFILE = gql`
	mutation UPDATE_PROFILE(
		$name: String
		$education: String
		$designation: String
		$location: String
		$bio: String
		$links: [linksInput!]
		$skills: [String!]
		$workInfo: [workInfoInput!]
	) {
		updateProfile(
			data: {
				name: $name
				education: $education
				designation: $designation
				location: $location
				bio: $bio
				links: $links
				skills: $skills
				workInfo: $workInfo
			}
		) {
			name
		}
	}
`
