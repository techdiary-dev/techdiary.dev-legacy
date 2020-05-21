import React, { useState } from 'react'
import { useQuery, useSubscription } from '@apollo/react-hooks'
import { SyncLoader } from 'react-spinners'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Container } from './styles'
import { ARTICLE_LIST, NEW_DIARY_ARRIAVED_NOTIFICATION } from 'quries/ARTICLE'
import ArticleCard from '../ArticleCard'
import styled from 'styled-components'

const StyledLoadmore = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-content: center;
`

const ArticleList: React.FC = () => {
	let { data, fetchMore, loading } = useQuery(ARTICLE_LIST, {
		variables: { page: 1 },
		fetchPolicy: 'cache-and-network'
	})

	let { data: newDiaryNotification } = useSubscription(
		NEW_DIARY_ARRIAVED_NOTIFICATION
	)

	console.log(newDiaryNotification)

	const handleFetch = () => {
		fetchMore({
			variables: {
				page: data?.articles?.currentPage + 1
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				// @ts-ignore
				return {
					articles: {
						// @ts-ignore
						...fetchMoreResult.articles,
						// @ts-ignore
						data: [...prev.articles.data, ...fetchMoreResult.articles.data]
					}
				}
			}
		})
	}

	// if (loading)
	// 	return (
	// 		<Container>
	// 			<h2>TODO: Skeleton</h2>
	// 		</Container>
	// 	)

	return (
		<Container>
			<InfiniteScroll
				dataLength={data?.articles?.data.length ?? 5}
				next={handleFetch}
				hasMore={data?.articles?.data.length < data?.articles?.resourceCount}
				loader={
					<StyledLoadmore>
						<SyncLoader size={8} color="#24B3AE" />
					</StyledLoadmore>
				}
			>
				{data?.articles?.data.map((article) => (
					<ArticleCard {...article} key={article._id} />
				))}
			</InfiniteScroll>
		</Container>
	)
}

export default ArticleList
