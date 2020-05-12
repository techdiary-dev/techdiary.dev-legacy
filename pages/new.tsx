import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import ArticleEditor from 'components/Article/ArticleEditor'
import PleaseLogin from 'components/PleaseLogin'

const NewArticlePage = () => {
	return (
		<MainLayout>
			<PleaseLogin>
				<ArticleEditor />
			</PleaseLogin>
		</MainLayout>
	)
}

export default NewArticlePage
