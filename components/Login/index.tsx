import React from 'react'
import GitHubLogin from 'react-github-login'
import { LoginStyle } from './styles'
import GithubIcon from 'public/icons/github.svg'
import { useMutation } from '@apollo/react-hooks'
import { LOGIN, ME } from 'quries/AUTH'
import np from 'nprogress'

interface Props {
	refetchMe?: Function
}

const Login = ({ refetchMe }: Props) => {
	const onSuccess = (response) => {
		login({ variables: { code: response.code } }).then((res) => {
			refetchMe()
		})
	}

	let [login, { loading }] = useMutation(LOGIN, {
		refetchQueries: [{ query: ME }]
	})

	if (loading) np.start()
	else np.done()

	return (
		<LoginStyle>
			<GitHubLogin
				clientId={process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}
				redirectUri={process.env.NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI}
				onSuccess={onSuccess}
			>
				<GithubIcon />
				<span>যুক্ত হোন</span>
			</GitHubLogin>
		</LoginStyle>
	)
}

export default Login
