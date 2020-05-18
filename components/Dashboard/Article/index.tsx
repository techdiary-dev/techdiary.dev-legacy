import React from 'react'
import moment from 'moment'
import { DashboardArticle } from './styles'
import { Card } from 'components/Card'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_ARTICLE, ARTICLE_LIST } from 'quries/ARTICLE'
import { ME } from 'quries/AUTH'

interface Props {
	_id: any
	createdAt: any
	excerpt: string
	isPublished: boolean
	slug: string
	title: string
	username: any
}

const Article: React.FC<Props> = ({
	_id,
	title,
	excerpt,
	slug,
	createdAt,
	username,
	isPublished
}: Props) => {
	let [deleteArticle] = useMutation(DELETE_ARTICLE, {
		refetchQueries: [{ query: ARTICLE_LIST }, { query: ME }]
	})

	const handleDelete = () => {
		if (confirm('Sure to delete?')) deleteArticle({ variables: { _id } })
	}

	return (
		<DashboardArticle isPublished={isPublished}>
			<Card>
				<h4 className="title">
					<Link href={`/[username]/[articleSlug]`} as={`/${username}/${slug}`}>
						{title}
					</Link>
				</h4>
				<span className="time">{moment(+createdAt).fromNow()}</span>
				<p className="excerpt">{excerpt}</p>
				<div className="actions">
					<Link href="/edit/[_id]" as={`/edit/${_id}`}>
						<FiEdit2 />
					</Link>
					<FiTrash onClick={handleDelete} />
				</div>
			</Card>
		</DashboardArticle>
	)
}

export default Article
