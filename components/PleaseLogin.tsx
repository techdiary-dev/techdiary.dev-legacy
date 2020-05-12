import React from 'react'
import Me from './Me'
import MainLayout from './Layout/MainLayout'

const PleaseLogin = ({ children }) => {
	return (
		<MainLayout>
			<Me
				data={({ data, error, loading }) => {
					if (loading) return <h3>একটু অপেক্ষা ....</h3>
					if (error || !data) return <h1>দয়া করে লগিন করুন</h1>
					return children
				}}
			/>
		</MainLayout>
	)
}

export default PleaseLogin
