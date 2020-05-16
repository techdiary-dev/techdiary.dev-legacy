import React from 'react'
import Link from 'next/link'
import bnnum from 'bnnum'
import moment from 'moment'

import { ArticleCardStyle } from './styles'
import { Card } from 'components/Card'

import UserAvater from 'components/UserAvater'
import ClockIcon from 'static/icons/clock.svg'
import HeartIcon from 'static/icons/heart.svg'
import CommentIcon from 'static/icons/comment.svg'
import BookmarkIcon from 'static/icons/bookmark.svg'
// import BookmarkIcon from 'static/icons/bookmark.svg'

interface Props {
	title: string
	slug: string
	thumbnail: string
	excerpt: string
	tags: string[]
	createdAt: string
	updatedAt: string
	author: {
		name: string
		username: string
		profilePhoto: string
	}
}

const ArticleCard: React.FC<Props> = ({
	title,
	excerpt,
	slug,
	thumbnail,
	tags,
	author,
	createdAt
}: Props) => {
	return (
		<ArticleCardStyle>
			<Card>
				<div className="floatingActions">
					<BookmarkIcon />
				</div>
				<Link
					href={`/[username]/[articleSlug]`}
					as={`/${author.username}/${slug}`}
				>
					<a className="title">{title}</a>
				</Link>
				<p className="time">{moment(+createdAt).fromNow()}</p>
				<UserAvater
					name={author.name}
					username={author.username}
					profilePhoto={author.profilePhoto}
				/>

				{thumbnail && (
					<div className="thumbnail">
						<Link
							href={`/[username]/[articleSlug]`}
							as={`/${author.username}/${slug}`}
						>
							<img src={thumbnail} alt="article-thumbnail" />
						</Link>
					</div>
				)}

				<div className="excerpt">{excerpt}</div>
				<div className="tags">
					{tags.map((t, key) => (
						<Link href={`/t/${t}`} key={key}>
							<a>#{t}</a>
						</Link>
					))}
				</div>
				<div className="footer">
					<div className="state">
						<ClockIcon />
						{bnnum(7)} মিনিট
					</div>
					<div className="commentsAndLikes">
						<div className="state">
							<HeartIcon />
							{bnnum(147)}
						</div>
						<div className="state">
							<CommentIcon />
							{bnnum(16)}
						</div>
					</div>
				</div>
			</Card>
		</ArticleCardStyle>
	)
}

export default ArticleCard
