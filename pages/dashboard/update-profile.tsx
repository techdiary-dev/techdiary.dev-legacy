import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import ProfileSettings from 'components/Dashboard/ProfileSettings'
import useMe from 'components/useMe'
import HeadTag from 'components/HeadTag'

const UpdateProfilePage = () => {
	let { data } = useMe()

	return (
		<DashboardLayout>
			<HeadTag title="প্রোফাইল হালনাগাদ" />
			<ProfileSettings user={data} />
		</DashboardLayout>
	)
}

export default UpdateProfilePage
