import React from 'react'
import { Row, Column } from 'styled-grid-system-component'
import md from 'marked'
import moment from 'moment'
import { StyledArticleDetails } from './styles'
import { Card } from 'components/Card'
import UserCardWithArticles from 'components/UserCardWithArticles'
import ArticleDetailsSkeleton from './ArticleDetailsSkeleton'

interface Props {
	article: any
	loading: boolean
}

const ArticleDetails: React.FC<Props> = ({ article, loading }: Props) => {
	if (loading) return <ArticleDetailsSkeleton />

	return (
		<StyledArticleDetails>
			<Row>
				<Column md={9}>
					{article?.thumbnail && (
						<div className="thumbnail">
							<img src={article.thumbnail} alt={article?.title} />
						</div>
					)}

					<div className="meta">
						<h2 className="meta__title">{article?.title}</h2>
						<p className="meta__time">
							{moment(+article?.createdAt).format('LLLL')}
						</p>
					</div>

					<Card>
						<div
							className="article-content"
							dangerouslySetInnerHTML={{ __html: md(article?.body) }}
						/>
					</Card>
				</Column>
				<Column md={3}>
					<UserCardWithArticles user={article?.author} />
				</Column>
			</Row>
		</StyledArticleDetails>
	)
}

export default ArticleDetails
