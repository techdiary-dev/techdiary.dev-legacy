import React from 'react'
import { useRouter } from 'next/dist/client/router'
import MainLayout from 'components/Layout/MainLayout'
import { useQuery } from '@apollo/react-hooks'
import { ARTICLE_DETAILS } from 'quries/ARTICLE'

const ArticleDetails = () => {
	let { query } = useRouter()

	let { data, loading } = useQuery(ARTICLE_DETAILS, {
		variables: {
			slug: query.articleSlug
		}
	})

	if (loading)
		return (
			<MainLayout>
				<h1>
					TODO: <mark>Draw article skeleton</mark>
				</h1>
			</MainLayout>
		)

	return (
		<MainLayout>
			<pre>{JSON.stringify(data, undefined, 4)}</pre>
		</MainLayout>
	)
}

export default ArticleDetails
