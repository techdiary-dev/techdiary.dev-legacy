import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import useMe from 'components/useMe'
import Article from 'components/Dashboard/Article'
import HeadTag from 'components/HeadTag'

const dashboard: React.FC = () => {
	let { data } = useMe()
	let articles = data?.articles

	return (
		<DashboardLayout>
			<HeadTag title="সকল ডায়েরি" />
			{articles?.map((article) => (
				<Article {...article} key={article._id} username={data?.username} />
			))}
		</DashboardLayout>
	)
}

export default dashboard
