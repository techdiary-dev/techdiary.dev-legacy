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
			workInfo {
				name
				designation
				startTime
				endTime
			}
			location
			bio
			skills
		}
	}
`
