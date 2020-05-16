import React from 'react'
import moment from 'moment'
import { DashboardArticle } from './styles'
import { Card } from 'components/Card'
import Link from 'next/link'
import { useMutation } from '@apollo/react-hooks'
import { DELETE_ARTICLE, ARTICLE_LIST } from 'quries/ARTICLE'
import Button from 'components/Form/Button'
import { ME } from 'quries/AUTH'

interface Props {
	_id: any
	createdAt: any
	excerpt: string
	isPublished: boolean
	slug: string
	title: string
}

const Article: React.FC<Props> = ({
	_id,
	title,
	excerpt,
	slug,
	createdAt,
	isPublished
}: Props) => {
	let [deleteArticle, { loading }] = useMutation(DELETE_ARTICLE, {
		refetchQueries: [{ query: ARTICLE_LIST }, { query: ME }]
	})

	const handleDelete = (e) => {
		if (confirm('Sure to delete?')) deleteArticle({ variables: { _id } })
	}

	return (
		<DashboardArticle isPublished={isPublished}>
			<Card>
				<h4 className="title">{title}</h4>
				<span className="time">{moment(+createdAt).fromNow()}</span>
				<p className="excerpt">{excerpt}</p>

				<div className="actions">
					<Link href="/edit/[_id]" as={`/edit/${_id}`}>
						<a>Edit</a>
					</Link>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</Card>
		</DashboardArticle>
	)
}

export default Article
