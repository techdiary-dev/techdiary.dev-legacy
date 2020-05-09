import React from 'react'
import Link from 'next/link'
import bn from 'bnnum'

import { ArticleCardStyle } from './styles'
import Card from 'components/Card'

import UserAvater from 'components/UserAvater'
import ClockIcon from 'static/icons/clock.svg'
import HeartIcon from 'static/icons/heart.svg'
import CommentIcon from 'static/icons/comment.svg'
import BookmarkIcon from 'static/icons/bookmark.svg'
// import BookmarkIcon from 'static/icons/bookmark.svg'

const ArticleCard: React.FC = () => {
	return (
		<ArticleCardStyle>
			<Card>
				<div className="floatingActions">
					<BookmarkIcon />
				</div>
				<Link href="/">
					<a className="title">
						অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক
						কিছু।
					</a>
				</Link>
				<p className="time">ডিসেম্বর ২ ২০১৯, ১:৪৯:১২ দুপুর</p>
				<UserAvater />
				<div className="thumbnail">
					<img
						src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
						alt="article-thumbnail"
					/>
				</div>
				<div className="excerpt">
					অর্থহীন লেখা যার মাঝে আছে অনেক কিছু। হ্যাঁ, এই লেখার মাঝেই আছে অনেক
					কিছু। যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে।
					নিজের ভাষায় লেখা দেখতে অভ্যস্ত হও। মনে রাখবে লেখা ….
				</div>
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
						{bn(7)} মিনিট
					</div>
					<div className="commentsAndLikes">
						<div className="state">
							<HeartIcon />
							{bn(147)}
						</div>
						<div className="state">
							<CommentIcon />
							{bn(16)}
						</div>
					</div>
				</div>
			</Card>
		</ArticleCardStyle>
	)
}

export default ArticleCard
