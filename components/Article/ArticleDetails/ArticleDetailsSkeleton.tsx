import React from 'react'
import { Row, Column } from 'styled-grid-system-component'
import { StyledArticleDetails } from './styles'
import { Card } from 'components/Card'
import Skeleton from 'react-loading-skeleton'
import { StyledCol } from 'styles/StyledGrid'

const ArticleDetailsSkeleton: React.FC = () => {
	return (
		<StyledArticleDetails>
			<Row>
				<StyledCol md={9}>
					<Skeleton width="100%" height={400} />

					<div className="meta">
						<h2 className="meta__title">
							<Skeleton width="100%" height={15} />
						</h2>
						<p className="meta__time">
							<Skeleton width="100%" height={10} />
						</p>
					</div>

					<Card>
						<Skeleton width="100%" count={15} />
						<div style={{ height: 15 }} />
						<Skeleton width="100%" count={15} />
						<div style={{ height: 15 }} />
						<Skeleton width="100%" count={15} />
					</Card>
				</StyledCol>
				<Column md={3}>
					<Card>
						<Skeleton width="100%" count={15} />
					</Card>
				</Column>
			</Row>
		</StyledArticleDetails>
	)
}

export default ArticleDetailsSkeleton
