import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import Article from 'components/Dashboard/Article'
import useMe from 'components/useMe'

const DraftArticlesPage = () => {
	let { data } = useMe()
	let articles = data?.articles

	return (
		<DashboardLayout>
			{articles
				?.filter((a) => !a.isPublished)
				?.map((article) => (
					<Article {...article} key={article._id} username={data?.username} />
				))}
		</DashboardLayout>
	)
}

export default DraftArticlesPage
