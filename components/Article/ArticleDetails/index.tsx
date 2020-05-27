<<<<<<< HEAD
import React from "react";
import { Row, Column } from "styled-grid-system-component";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Disqus from "disqus-react";
import { StyledArticleDetails } from "./styles";
import { Card } from "components/Card";
import UserCardWithArticles from "components/UserCardWithArticles";
import ArticleDetailsSkeleton from "./ArticleDetailsSkeleton";
import { useRouter } from "next/router";
import { Highlighter, Markdown } from "lib/prismhiglight";
=======
import React from 'react'
import { Row, Column } from 'styled-grid-system-component'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import Disqus from 'disqus-react'
import { StyledArticleDetails } from './styles'
import { Card } from 'components/Card'
import UserCardWithArticles from 'components/UserCardWithArticles'
import ArticleDetailsSkeleton from './ArticleDetailsSkeleton'
import { useRouter } from 'next/router'
import { Highlighter } from 'lib/prismhiglight'
import { StyledCol } from 'components/UserProfile/styles'
>>>>>>> d0cc3c3cc2cabdd51a02167ef97d0876f0969375

interface Props {
	article: any
	loading: boolean
}

const ArticleDetails: React.FC<Props> = ({ article, loading }: Props) => {
	let router = useRouter()
	if (loading) return <ArticleDetailsSkeleton />

	return (
		<StyledArticleDetails>
			<Row>
				<StyledCol md={9}>
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

<<<<<<< HEAD
          <Card>
            <div className="article-content">
              <Markdown source={article?.body} />
            </div>
          </Card>
          <Disqus.DiscussionEmbed
            shortname="techdiary-2"
            config={{
              title: article?.title,
              url: "https://www.techdiary.dev" + router.asPath,
              identifier: article?._id,
            }}
          />
        </Column>
        <Column md={3}>
          <UserCardWithArticles user={article?.author} />
        </Column>
      </Row>
    </StyledArticleDetails>
  );
};
=======
					<Card>
						<div className="article-content">
							<ReactMarkdown
								source={article?.body}
								renderers={{
									code: Highlighter,
									inlineCode: ({ value }) => (
										<code className="language-text">{value}</code>
									)
								}}
								linkTarget="_blank"
								className="markdown"
							/>
						</div>
					</Card>
					<Disqus.DiscussionEmbed
						shortname="techdiary-2"
						config={{
							title: article?.title,
							url: 'https://www.techdiary.dev' + router.asPath,
							identifier: article?._id
						}}
					/>
				</StyledCol>
				<StyledCol md={3}>
					<UserCardWithArticles user={article?.author} />
				</StyledCol>
			</Row>
		</StyledArticleDetails>
	)
}
>>>>>>> d0cc3c3cc2cabdd51a02167ef97d0876f0969375

export default ArticleDetails
