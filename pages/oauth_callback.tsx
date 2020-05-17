import React, { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import { LOGIN, ME } from 'quries/AUTH'
import { useMutation } from '@apollo/react-hooks'
import BarLoader from 'components/Loader/BarLoader'
import MainLayout from 'components/Layout/MainLayout'

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
		<MainLayout>
			<BarLoader />
		</MainLayout>
	)
}

export default OAuthRedirect
