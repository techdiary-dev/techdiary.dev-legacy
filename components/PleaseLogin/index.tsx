import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { FiLock } from 'react-icons/fi'
import useMe from 'components/useMe'
import BarLoader from 'components/Loader/BarLoader'

import { StyledForbiddenPage } from './styles'

const PleaseLogin = ({ children }) => {
	let { data, error, loading } = useMe()

	if (loading)
		return (
			<MainLayout>
				<BarLoader />
			</MainLayout>
		)

	if (error || !data)
		return (
			<MainLayout>
				<StyledForbiddenPage>
					<div className="icon">
						<FiLock />
					</div>
					<h2 className="title">ওহ! এই পাতাটি দেখতে আপনাকে লগইন করতে হবে</h2>
				</StyledForbiddenPage>
			</MainLayout>
		)

	return <MainLayout>{children}</MainLayout>
}

export default PleaseLogin
