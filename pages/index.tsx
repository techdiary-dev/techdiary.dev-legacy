import React from "react";
import MainLayout from "components/Layout/MainLayout";
import ArticleList from "components/Article/ArticleList";
import Skeleton from "react-loading-skeleton";
import { FiInfo } from "react-icons/fi";

import { Row, Col } from "styles/StyledGrid";
import useMe from "components/useMe";
import UserCardWithArticles from "components/UserCardWithArticles";
import HeadTag from "components/HeadTag";
import styled from "styled-components";
import { NextPage, GetServerSideProps } from "next";
import FooterLinks from "components/FooterLinks";
import { initializeApollo } from "lib/apolloClient";
import { ARTICLE_LIST } from "quries/ARTICLE";
import FeaturedTag from "components/FeaturedTag";
import FeaturedCarousel from "components/FeaturedCarousel";

interface Props {
  version?: string;
}

const index: NextPage<Props> = (props) => {
  let { data, loading, error } = useMe();

  return (
    <div>
      <HeadTag title="Tech Diary" description="বাংলার প্রোগ্রামিং নেটওয়ার্ক" />
      <div tw="py-12">
        <FeaturedCarousel />
      </div>
      <MainLayout>
        <Row>
          <Col md={3} sidebar>
            <FeaturedTag />
            <FeaturedTag />
            <FeaturedTag />
          </Col>

          <Col md={6} main>
            <ArticleList />
          </Col>

          <Col md={3} sidebar>
            {loading ? (
              <Skeleton height={320} />
            ) : (
              !error && data && <UserCardWithArticles user={data} />
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
    query: ARTICLE_LIST,
    variables: { page: 1 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};

export default index;
