import React from 'react'
import Me from './Me'
import MainLayout from './Layout/MainLayout'
import useMe from './useMe'

const PleaseLogin = ({ children }) => {
	let { data, error, refetch, loading } = useMe()

	if (loading)
		return (
			<MainLayout>
				<div>
					<h3>একটু অপেক্ষা ....</h3>
				</div>
			</MainLayout>
		)

	if (error || !data)
		return (
			<MainLayout>
				<div>
					<h1>দয়া করে লগিন করুন</h1>
				</div>
			</MainLayout>
		)

	return <MainLayout>{children}</MainLayout>
}

export default PleaseLogin
