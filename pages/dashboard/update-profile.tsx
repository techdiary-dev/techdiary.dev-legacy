import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import ProfileSettings from 'components/Dashboard/ProfileSettings'
import useMe from 'components/useMe'

const UpdateProfilePage = () => {
	let { data } = useMe()

	return (
		<DashboardLayout>
			<ProfileSettings user={data} />
		</DashboardLayout>
	)
}

export default UpdateProfilePage
