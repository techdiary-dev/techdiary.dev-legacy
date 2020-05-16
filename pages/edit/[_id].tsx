import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { useRouter } from 'next/router'
import { ARTICLE_DETAILS } from 'quries/ARTICLE'
import { useQuery } from '@apollo/react-hooks'
import ArticleEditor from 'components/Article/ArticleEditor'
import PleaseLogin from 'components/PleaseLogin'
import useMe from 'components/useMe'

const EditArticle = () => {
	let { query } = useRouter()

	let { data, loading } = useQuery(ARTICLE_DETAILS, {
		variables: {
			_id: query._id
		},
		fetchPolicy: 'network-only'
	})

	return (
		<MainLayout>
			<PleaseLogin>
				<ArticleEditor
					defaultValues={data?.article}
					_id={query._id}
					loading={loading}
				/>
			</PleaseLogin>
		</MainLayout>
	)
}

export default EditArticle
