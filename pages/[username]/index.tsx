import React from 'react'
import MainLayout from 'components/Layout/MainLayout'

import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import { USER_PROFILE } from 'quries/AUTH'
import UserProfile from 'components/UserProfile'
import UserProfileSkeleton from 'components/UserProfile/UserProfileSkeleton'
import HeadTag from 'components/HeadTag'

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
				<UserProfileSkeleton />
			</MainLayout>
		)

	return (
		<MainLayout>
			<HeadTag
				title={data?.profile?.name}
				description={data?.profile?.bio}
				ogImage={data?.profile?.profilePhoto}
			/>
			<UserProfile user={data?.profile} />
		</MainLayout>
	)
}

export default ProfilePage
