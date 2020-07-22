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
import { Highlighter } from "lib/prismhiglight";
import { StyledCol } from "styles/StyledGrid";
import UnPiblishedWarning from "./UnPiblishedWarning";
import SeriesArticle from "./SeriesArticle";

interface Props {
  article: any;
  loading: boolean;
}

const ArticleDetails: React.FC<Props> = ({ article }: Props) => {
  let router = useRouter();

  return (
    <StyledArticleDetails>
      <Row>
        <StyledCol md={9}>
          {!article?.isPublished && <UnPiblishedWarning />}

          {article?.thumbnail && (
            <div className="thumbnail">
              <img
                src={article.thumbnail}
                alt={article?.title}
                className="w-full"
              />
            </div>
          )}
          <div className="meta" tw="text-center">
            <h2 className="meta__title">{article?.title}</h2>
            <p className="meta__time">
              {moment(+article?.createdAt).format("LLLL")}
            </p>
          </div>

          <Card>
            <div className="article-content">
              {article?.seriesName && (
                <SeriesArticle
                  currentUrl={article?.url}
                  articles={article?.series}
                />
              )}

              <ReactMarkdown
                source={article?.body}
                renderers={{
                  code: Highlighter,
                  inlineCode: ({ value }) => (
                    <code className="language-text">{value}</code>
                  ),
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
              url: "https://www.techdiary.dev" + router.asPath,
              identifier: article?._id,
            }}
          />
        </StyledCol>
        <StyledCol md={3}>
          <UserCardWithArticles user={article?.author} />
        </StyledCol>
      </Row>
    </StyledArticleDetails>
  );
};

export default ArticleDetails;
