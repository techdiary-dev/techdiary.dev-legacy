import React from 'react'
import { useRouter } from 'next/dist/client/router'
import MainLayout from 'components/Layout/MainLayout'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLE_DETAILS } from 'quries/ARTICLE'
import ArticleDetails from 'components/Article/ArticleDetails'
import HeadTag from 'components/HeadTag'

const ArticleDetailsPage = () => {
	let { query } = useRouter()

	let { data, loading } = useQuery(ARTICLE_DETAILS, {
		variables: {
			slug: query.articleSlug
		}
	})

	return (
		<MainLayout>
			<HeadTag
				title={data?.article?.title}
				description={data?.article?.excerpt}
				ogImage={data?.article?.thumbnail}
				keyWords={data?.article?.tags}
			/>
			<ArticleDetails loading={loading} article={data?.article} />
		</MainLayout>
	)
}

export default ArticleDetailsPage
