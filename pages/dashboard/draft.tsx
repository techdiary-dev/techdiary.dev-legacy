import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import Article from 'components/Dashboard/Article'
import useMe from 'components/useMe'
import HeadTag from 'components/HeadTag'

const DraftArticlesPage = () => {
	let { data } = useMe()
	let articles = data?.articles

	return (
		<DashboardLayout>
			<HeadTag title="সকল খসড়া ডায়েরি" />
			{articles
				?.filter((a) => !a.isPublished)
				?.map((article) => (
					<Article {...article} key={article._id} username={data?.username} />
				))}
		</DashboardLayout>
	)
}

export default DraftArticlesPage
