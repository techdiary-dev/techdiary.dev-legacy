import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { USER_PROFILE } from 'quries/AUTH'

const ProfilePage = () => {
	let router = useRouter()

	let { data, loading } = useQuery(USER_PROFILE, {
		variables: {
			username: router.query.username
		}
	})

	if (loading)
		return (
			<MainLayout>
				<h1>
					TODO: <mark>draw skeleton here...</mark>
				</h1>
			</MainLayout>
		)

	return (
		<MainLayout>
			<pre>{JSON.stringify(data, undefined, 4)}</pre>
		</MainLayout>
	)
}

export default ProfilePage
