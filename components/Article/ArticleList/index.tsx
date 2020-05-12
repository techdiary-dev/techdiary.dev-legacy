import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { SyncLoader } from 'react-spinners'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Container } from './styles'
import { ARTICLE_LIST } from 'quries/ARTICLE'
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
	let { data, fetchMore } = useQuery(ARTICLE_LIST, {
		variables: { page: 1 },
		fetchPolicy: 'cache-and-network'
	})

	const handleFetch = () => {
		fetchMore({
			variables: {
				page: data?.articles?.currentPage + 1
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				// if (!fetchMoreResult) return prev

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

	return (
		<Container>
			<InfiniteScroll
				dataLength={data?.articles?.data.length} //This is important field to render the next data
				next={handleFetch}
				hasMore={data?.articles?.data.length < data?.articles?.resourceCount}
				loader={
					<StyledLoadmore>
						<SyncLoader size={8} color="#24B3AE" />
					</StyledLoadmore>
				}
				endMessage={
					<div style={{ textAlign: 'center' }}>
						<h3>আপনি স্কল করে একদম নিচে চলে এসেছেন... </h3>
					</div>
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
