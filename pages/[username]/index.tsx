import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { useRouter } from 'next/router'
import UserProfile from 'components/UserProfile'

const ProfilePage = () => {
	let router = useRouter()
	return (
		<MainLayout>
			<UserProfile username={router.query.username} />
		</MainLayout>
	)
}

export default ProfilePage
