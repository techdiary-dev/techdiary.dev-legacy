import React from 'react'
import Link from 'next/link'
import bnnum from 'bnnum'
import { format } from 'date-fns'
import { bn } from 'date-fns/locale'

import { ArticleCardStyle } from './styles'
import Card from 'components/Card'

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
	tags: string
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
	author,
	createdAt
}: Props) => {
	return (
		<ArticleCardStyle>
			<Card>
				<div className="floatingActions">
					<BookmarkIcon />
				</div>
				<Link href="/">
					<a className="title">{title}</a>
				</Link>
				<p className="time">
					{format(+createdAt, 'MM/dd/yyyy', { locale: bn })}
				</p>
				<UserAvater
					name={author.name}
					username={author.username}
					profilePhoto={author.profilePhoto}
				/>
				<div className="thumbnail">
					<img src={thumbnail} alt="article-thumbnail" />
				</div>
				<div className="excerpt">{excerpt}</div>
				<div className="tags">
					<Link href="/">
						<a>#python</a>
					</Link>
					<Link href="/">
						<a>#js</a>
					</Link>
					<Link href="/">
						<a>#algorithm</a>
					</Link>
					<Link href="/">
						<a>#ds</a>
					</Link>
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
