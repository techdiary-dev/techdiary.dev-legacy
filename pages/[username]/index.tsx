import React from 'react'
import MainLayout from 'components/Layout/MainLayout'

import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { USER_PROFILE } from 'quries/AUTH'
import UserProfile from 'components/UserProfile'

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
			<UserProfile user={data?.profile} />
		</MainLayout>
	)
}

export default ProfilePage
