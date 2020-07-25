import React from "react";
import "twin.macro";
import MainLayout from "components/Layout/MainLayout";
import ArticleListByTag from "components/Article/ArticleListByTag";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "styles/StyledGrid";
import useMe from "components/useMe";
import UserCardWithArticles from "components/UserCardWithArticles";
import HeadTag from "components/HeadTag";
import { NextPage, GetServerSideProps } from "next";
import FooterLinks from "components/FooterLinks";
import { initializeApollo } from "lib/apolloClient";
import { ARTICLE_LIST_BY_TAG } from "quries/ARTICLE";
import FeaturedTag from "components/FeaturedTag";
import { useRouter } from "next/router";

interface Props {
  version?: string;
}

const index: NextPage<Props> = (props) => {
  let { data, loading, error } = useMe();
  const router = useRouter();

  return (
    <div>
      <HeadTag title="Tech Diary" description="বাংলার প্রোগ্রামিং নেটওয়ার্ক" />

      <div tw="pt-20 pb-4 text-center bg-gray-300">
        <h1 tw="text-5xl">#{router.query.tagName}</h1>
      </div>

      <MainLayout>
        <Row>
          <Col md={3} sidebar>
            <FeaturedTag />
            <FeaturedTag />
            <FeaturedTag />
          </Col>

          <Col md={6} main>
            <ArticleListByTag />
          </Col>

          <Col md={3} sidebar>
            {loading ? (
              <Skeleton height={320} tw="mb-8" />
            ) : (
              !error &&
              data && (
                <div tw="mb-8">
                  <UserCardWithArticles user={data} />
                </div>
              )
            )}
            <FooterLinks />
          </Col>
        </Row>
      </MainLayout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apolloClient = initializeApollo(null, ctx);

  await apolloClient.query({
    query: ARTICLE_LIST_BY_TAG,
    variables: { page: 1, tags: [ctx.params.tagName] },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default index;
