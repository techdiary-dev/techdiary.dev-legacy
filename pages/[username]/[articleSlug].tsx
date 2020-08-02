import React from "react";
import { useRouter } from "next/router";
import MainLayout from "components/Layout/MainLayout";
import { useQuery } from "@apollo/client";
import { ARTICLE_DETAILS } from "quries/ARTICLE";
import ArticleDetails from "components/Article/ArticleDetails";
import HeadTag from "components/HeadTag";
import { GetServerSideProps } from "next";
import { initializeApollo } from "lib/apolloClient";

const ArticleDetailsPage = ({ page }) => {
  let { query } = useRouter();

  let { data, loading } = useQuery(ARTICLE_DETAILS, {
    variables: {
      slug: query.articleSlug,
    },
  });

  return (
    <MainLayout>
      <HeadTag
        title={page.data?.article?.title}
        description={page.data?.article?.excerpt}
        ogImage={page.data?.article?.thumbnail}
        keyWords={page.data?.article?.tags}
      />
      <ArticleDetails loading={loading} article={data?.article} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);

  const page = await apolloClient.query({
    query: ARTICLE_DETAILS,
    variables: { slug: ctx?.params?.articleSlug },
  });

  return {
    props: { page },
  };
};

export default ArticleDetailsPage;
