import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { Row, Column } from 'styled-grid-system-component'
import ArticleCard from 'components/Article/ArticleCard'
import TagHighlights from 'components/TagHighlights'
import Login from 'components/Login'
import Me from 'components/Me'

const index = () => {
	return (
		<MainLayout>
			<Row>
				<Column md={3}>
					<TagHighlights name="help" />
				</Column>
				<Column md={6}>
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
					<ArticleCard />
				</Column>
				<Column md={3}>
					<TagHighlights name="challenge" />
				</Column>
			</Row>
		</MainLayout>
	)
}

export default index
