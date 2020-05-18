import React from 'react'
import { useRouter } from 'next/dist/client/router'
import MainLayout from 'components/Layout/MainLayout'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLE_DETAILS } from 'quries/ARTICLE'
import ArticleDetails from 'components/Article/ArticleDetails'

const ArticleDetailsPage = () => {
	let { query } = useRouter()

	let { data, loading } = useQuery(ARTICLE_DETAILS, {
		variables: {
			slug: query.articleSlug
		}
	})

	return (
		<MainLayout>
			<ArticleDetails loading={loading} article={data?.article} />
		</MainLayout>
	)
}

export default ArticleDetailsPage
