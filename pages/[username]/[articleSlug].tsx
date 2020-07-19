import React from "react";
import { useRouter } from "next/router";
import MainLayout from "components/Layout/MainLayout";
import { useQuery } from "@apollo/client";
import { ARTICLE_DETAILS } from "quries/ARTICLE";
import ArticleDetails from "components/Article/ArticleDetails";
import HeadTag from "components/HeadTag";
import { GetServerSideProps } from "next";
import { initializeApollo } from "lib/apolloClient";

const ArticleDetailsPage = () => {
  let { query } = useRouter();

  let { data, loading } = useQuery(ARTICLE_DETAILS, {
    variables: {
      slug: query.articleSlug,
    },
  });

  return (
    <MainLayout>
      <HeadTag
        title={data?.article?.title}
        description={data?.article?.excerpt}
        ogImage={data?.article?.thumbnail}
        keyWords={data?.article?.tags}
      />
      <ArticleDetails loading={loading} article={data?.article} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: ARTICLE_DETAILS,
    variables: { slug: ctx.params.articleSlug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default ArticleDetailsPage;
