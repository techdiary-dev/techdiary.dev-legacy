import React from 'react'
import MainLayout from 'components/Layout/MainLayout'
import { Row } from 'styled-grid-system-component'
// import TagHighlights from 'components/TagHighlights'
import ArticleList from 'components/Article/ArticleList'

import { StyledHomePage, StyledCol } from 'styles/StyledHomePage'
import useMe from 'components/useMe'
import UserCardWithArticles from 'components/UserCardWithArticles'
import HeadTag from 'components/HeadTag'
import styled from 'styled-components'

const StyledBetaAlert = styled.div`
	font-size: 2.2rem;
	background: ${({ theme }) => theme.secondaryDark};
	margin-bottom: 25px;
	border-radius: 15px;
	padding: 15px;
`

const index = () => {
	let { data, loading, error } = useMe()

	return (
		<StyledHomePage>
			<HeadTag title="টেক ডায়েরি" description="বাংলার প্রোগ্রামিং নেটওয়ার্ক" />
			<MainLayout>
				<Row>
					<StyledCol md={3} sidebar>
						<StyledBetaAlert>
							টেক ডায়েরি বর্তমানে beta ভার্সন এ আছে
						</StyledBetaAlert>
					</StyledCol>

					<StyledCol md={6} main>
						<ArticleList />
					</StyledCol>

					<StyledCol md={3} sidebar>
						{data && !loading && !error && <UserCardWithArticles user={data} />}
					</StyledCol>
				</Row>
			</MainLayout>
		</StyledHomePage>
	)
}

export default index
