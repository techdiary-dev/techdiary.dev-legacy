import React from "react";
import { Row, Column } from "styled-grid-system-component";
import "twin.macro";
import ReactMarkdown from "react-markdown";
import moment from "moment";
import Disqus from "disqus-react";
import { StyledArticleContent } from "./styles";
import { Card } from "components/Card";
import UserCardWithArticles from "components/UserCardWithArticles";

import { useRouter } from "next/router";
import { Highlighter } from "lib/prismhiglight";
import SeriesArticle from "./SeriesArticle";
import ArticleActions from "./ArticleActions";

interface Props {
  article: any;
  loading: boolean;
}

const ArticleDetails: React.FC<Props> = ({ article }: Props) => {
  let router = useRouter();

  return (
    <>
      <ArticleActions />

      <Row>
        <Column md={9}>
          {/* Unpublished article warning */}
          {!article?.isPublished && (
            <div tw="bg-red-100 p-4 rounded inline-block">
              <h3 tw="text-red-500 text-xl">
                অপ্রকাশিত ডায়েরি, তবে আপনি চাইলে URL এর মাধ্যমে যে কাউকে দেখাতে
                পারবেন।
              </h3>
              <p tw="text-red-500">
                অপ্রকাশিত ডায়েরি প্রথম পাতায় দেখানো হবে না।
              </p>
            </div>
          )}

          {article?.thumbnail && (
            <div tw="w-full rounded overflow-hidden">
              <img
                src={article.thumbnail}
                alt={article?.title}
                tw="max-w-full"
              />
            </div>
          )}

          <div tw="my-8">
            <h2 tw="text-2xl">{article?.title}</h2>
            <p tw="text-base text-semiDark">
              {moment(+article?.createdAt).format("LLLL")}
            </p>
          </div>

          <Card>
            {article?.seriesName && (
              <SeriesArticle
                currentUrl={article?.url}
                articles={article?.series}
              />
            )}
            <StyledArticleContent>
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
            </StyledArticleContent>
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
    </>
  );
};

export default ArticleDetails;
