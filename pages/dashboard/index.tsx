import React from 'react'
import DashboardLayout from 'components/Layout/DashboardLayout'
import useMe from 'components/useMe'
import Article from 'components/Dashboard/Article'
import HeadTag from 'components/HeadTag'
import InfiniteScroll from 'react-infinite-scroll-component'
import StyledLoadmore from 'styles/StyledLoadmore'
import { SyncLoader } from 'react-spinners'

const dashboard: React.FC = () => {
	let { data, fetchMore } = useMe()

	const handleFetch = () => {
		fetchMore({
			variables: {
				articlePage: data?.articles?.currentPage + 1
			},
			updateQuery: (prev, { fetchMoreResult }) => {
				// @ts-ignore
				return {
					me: {
						// @ts-ignore
						...fetchMoreResult?.me,
						articles: {
							//@ts-ignore
							...fetchMoreResult.me.articles,
							data: [
								//@ts-ignore
								...prev.me.articles.data,
								//@ts-ignore
								...fetchMoreResult.me.articles.data
							]
						}
					}
				}
			}
		})
	}

	return (
		<DashboardLayout>
			<HeadTag title="সকল ডায়েরি" />
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
					<Article {...article} key={article._id} username={data?.username} />
				))}
			</InfiniteScroll>
		</DashboardLayout>
	)
}

export default dashboard
