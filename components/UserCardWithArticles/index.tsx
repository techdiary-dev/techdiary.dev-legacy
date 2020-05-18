import React from 'react'
import moment from 'moment'
import { StyledUserCardWithArticles } from './styles'
import { Card } from 'components/Card'
import UserAvater from 'components/UserAvater'
import Link from 'next/link'

interface Props {
	user: {
		name: string
		username: string
		profilePhoto: string
		articles: [
			{
				title: string
				slug: string
				createdAt: string
			}
		]
	}
}

const UserCardWithArticles: React.FC<Props> = ({ user }: Props) => {
	return (
		<Card>
			<StyledUserCardWithArticles>
				<UserAvater
					name={user?.name}
					username={user?.username}
					profilePhoto={user?.profilePhoto}
					size="xl"
				/>
				<h4 className="heading">আমার সাপ্রতিক ডাইরি সমূহ</h4>
				<div className="articles">
					{user?.articles?.map((article, key) => (
						<article className="article" key={key}>
							<Link
								href={`/[username]/[articleSlug]`}
								as={`/${user?.username}/${article?.slug}`}
							>
								<a className="article__title">{article?.title}</a>
							</Link>
							<p className="article__time">
								{moment(article?.createdAt).format('LLLL')}
							</p>
						</article>
					))}
				</div>
				<Link href={`/${user?.username}`}>
					<a className="link">সকল ডাইরি</a>
				</Link>
			</StyledUserCardWithArticles>
		</Card>
	)
}

export default UserCardWithArticles
