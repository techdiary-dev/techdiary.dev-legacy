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
import Comments from "./Comments";
import Link from "next/link";
import useMe from "components/useMe";
import Button from "components/Button";

interface Props {
  article: any;
  loading: boolean;
}

const ArticleDetails: React.FC<Props> = ({ article }: Props) => {
  // let router = useRouter();
  const me = useMe();

  return (
    <>
      <ArticleActions articleId={article._id} />

      <Row>
        <Column md={9} tw="p-0 sm:px-4">
          {/* Unpublished article warning */}
          {!article?.isPublished && (
            <div tw="bg-red-100 p-4 rounded w-full">
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

            <p tw="text-base">
              <Link href="/[username]" as={`/${article?.author.username}`}>
                <a tw="text-black font-bold">{article?.author.name}</a>
              </Link>
              {" · "}
              <span tw="text-gray-700">
                {moment(+article?.createdAt).format("LLLL")}
              </span>
            </p>

            <div tw="mt-2">
              {article.tags?.map((t, key) => (
                <Link
                  href="/t/[tagName]"
                  as={`/t/${t.trim()}`}
                  key={key}
                  passHref
                >
                  <a tw="mr-2 bg-gray-300 rounded px-1 hover:bg-gray-400 transition duration-300">
                    #{t.trim()}
                  </a>
                </Link>
              ))}
            </div>

            <div tw="mt-4">
              {article?.author?._id === me?.data?._id && (
                <Link href={`/edit/${article?._id}`} passHref>
                  <a tw="bg-green-300 rounded px-2 hover:bg-gray-400 transition duration-300">
                    সংস্কার করুন
                  </a>
                </Link>
              )}
            </div>
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

          <div tw="my-5">
            <Comments />
          </div>
        </Column>
        <Column md={3}>
          <UserCardWithArticles user={article?.author} />
        </Column>
      </Row>
    </>
  );
};

export default ArticleDetails;
