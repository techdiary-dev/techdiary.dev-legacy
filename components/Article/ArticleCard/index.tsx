import React from 'react'
import Link from 'next/link'
import { GrPin } from 'react-icons/gr'
// import bnnum from 'bnnum'
import moment from 'moment'
import { ArticleCardStyle } from './styles'
import { Card } from 'components/Card'

import UserAvater from 'components/UserAvater'
// import ClockIcon from 'public/icons/clock.svg'
// import HeartIcon from 'public/icons/heart.svg'
// import CommentIcon from 'public/icons/comment.svg'
// import BookmarkIcon from 'public/icons/bookmark.svg'
// import BookmarkIcon from 'public/icons/bookmark.svg'

interface Props {
	title: string
	slug: string
	thumbnail: string
	excerpt: string
	tags: string[]
	isPublished: boolean
	isPinned: boolean
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
	isPublished,
	isPinned,
	author,
	createdAt
}: Props) => {
	return (
		<ArticleCardStyle>
			<Card>
				{isPinned ? (
					<div className="floatingActions">
						<GrPin className="pinned" />
					</div>
				) : null}

				<Link
					href={`/[username]/[articleSlug]`}
					as={`/${author?.username}/${slug}`}
				>
					<a className="title">{title}</a>
				</Link>
				<p className="time">{moment(+createdAt).format('LLLL')}</p>
				<UserAvater
					name={author?.name}
					username={author?.username}
					profilePhoto={author?.profilePhoto}
				/>

				{thumbnail && (
					<div className="thumbnail">
						<Link
							href={`/[username]/[articleSlug]`}
							as={`/${author?.username}/${slug}`}
						>
							<img src={thumbnail} alt="article-thumbnail" />
						</Link>
					</div>
				)}

				<div className="excerpt">{excerpt}</div>
				{/* <div className="tags">
					{tags?.map((t, key) => (
						<Link href={`/t/${t}`} key={key}>
							<a>#{t}</a>
						</Link>
					))}
				</div> */}
				{/* <div className="footer">
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
				</div> */}
			</Card>
		</ArticleCardStyle>
	)
}

export default ArticleCard
