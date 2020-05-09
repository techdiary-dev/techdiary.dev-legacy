import React from 'react'

import { TagHighlightStyles } from './styles'
import Link from 'next/link'

interface Props {
	name: string
}

const Article = () => {
	return (
		<article className="article">
			<Link href="/">
				<a className="article__title">
					সবচেয়ে গুরুত্বপূর্ণ মনে হয়েছে, তার প্রায় এক দশকের গেরিলা জীবন। কারণ এম
					এন লারমাই প্রথম সশস্ত্র গেরিলা যুদ্ধের মাধ্যমে
				</a>
			</Link>
			<div>
				<Link href="/">
					<a className="article__username">u/rayhan</a>
				</Link>
			</div>
		</article>
	)
}

const TagHighlights: React.FC<Props> = ({ name }: Props) => {
	return (
		<TagHighlightStyles>
			<h4 className="tag-name">#{name}</h4>
			<div className="articles">
				<Article />
				<Article />
				<Article />
				<Article />
				<Article />
			</div>
		</TagHighlightStyles>
	)
}

export default TagHighlights
