import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { LOGIN, ME } from 'quries/AUTH'
import { useMutation } from '@apollo/react-hooks'

const OAuthRedirect = () => {
	let router = useRouter()
	let [login] = useMutation(LOGIN, {
		refetchQueries: [{ query: ME }]
	})

	useEffect(() => {
		login({ variables: { code: router.query?.code } }).then(() => {
			router.push('/')
		})
	}, [])

	return (
		<div>
			<h1>অপেক্ষা ....।</h1>
		</div>
	)
}

export default OAuthRedirect
