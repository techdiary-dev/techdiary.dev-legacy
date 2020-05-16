import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { Row } from 'styled-grid-system-component'
import TagHighlights from 'components/TagHighlights'
import ArticleList from 'components/Article/ArticleList'

import { StyledHomePage, StyledCol } from './styles'

const index = () => {
	return (
		<StyledHomePage>
			<MainLayout>
				<Row>
					<StyledCol md={3} sidebar>
						<TagHighlights name="help" />
					</StyledCol>

					<StyledCol md={6} main>
						<ArticleList />
					</StyledCol>

					<StyledCol md={3} sidebar>
						<TagHighlights name="challenge" />
					</StyledCol>
				</Row>
			</MainLayout>
		</StyledHomePage>
	)
}

export default index
