import React from "react";
import { useRouter } from "next/router";
import MainLayout from "components/Layout/MainLayout";
import { useQuery } from "@apollo/client";
import { ARTICLE_DETAILS } from "quries/ARTICLE";
import ArticleDetails from "components/Article/ArticleDetails";
import HeadTag from "components/HeadTag";
import Error from "../_error";
import { GetServerSideProps } from "next";
import { initializeApollo } from "lib/apolloClient";
import removeMarkdown from "remove-markdown";

const ArticleDetailsPage = ({ page, notFound }) => {
  let { query } = useRouter();
  if (notFound) return <Error statusCode={404} />;

  let { data, loading } = useQuery(ARTICLE_DETAILS, {
    variables: {
      slug: query.articleSlug,
    },
  });

  return (
    <MainLayout>
      <HeadTag
        title={page.data?.article?.title}
        description={removeMarkdown(page.data?.article?.excerpt)}
        ogImage={page.data?.article?.thumbnail}
        keyWords={page.data?.article?.tags}
      />
      <ArticleDetails loading={loading} article={data?.article} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);
  let notFound = false;
  let page = null;

  try {
    page = await apolloClient.query({
      query: ARTICLE_DETAILS,
      variables: { slug: ctx?.params?.articleSlug },
    });
  } catch {
    notFound = true;
  }

  return {
    props: { page, notFound },
  };
};

export default ArticleDetailsPage;
