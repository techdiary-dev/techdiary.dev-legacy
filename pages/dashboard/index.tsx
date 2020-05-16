import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import useMe from 'components/useMe'
import Article from 'components/Dashboard/Article'

const dashboard: React.FC = () => {
	let { data, error, refetch, loading } = useMe()
	let articles = data?.articles

	return (
		<DashboardLayout>
			{articles?.map((article) => (
				<Article {...article} key={article._id} />
			))}
		</DashboardLayout>
	)
}

export default dashboard
