import React from "react";
import "twin.macro";
import MainLayout from "components/Layout/MainLayout";
import ArticleList from "components/Article/ArticleList";
import Skeleton from "react-loading-skeleton";
import { Row, Col } from "styles/StyledGrid";
import useMe from "components/useMe";
import UserCardWithArticles from "components/UserCardWithArticles";
import HeadTag from "components/HeadTag";
import { NextPage, GetServerSideProps } from "next";
import FooterLinks from "components/FooterLinks";
import { initializeApollo } from "lib/apolloClient";
import { ARTICLE_LIST, FEATURED_ARTICLES } from "quries/ARTICLE";
import FeaturedTag from "components/FeaturedTag";
import FeaturedCarousel from "components/FeaturedCarousel";
import LeftSidebar from "components/LeftSidebar";

interface Props {
  version?: string;
}

const index: NextPage<Props> = (props) => {
  let { data, loading, error } = useMe();

  return (
    <>
      <HeadTag title="Tech Diary" description="বাংলার প্রোগ্রামিং নেটওয়ার্ক" />
      <div tw="py-12 mt-12 -mb-24">
        <FeaturedCarousel />
      </div>
      <MainLayout>
        <Row>
          <Col md={3} sidebar>
            <LeftSidebar />
          </Col>

          <Col md={6} main>
            <ArticleList />
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
    </>
  );
};

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const apolloClient = initializeApollo(null, ctx);

//   await apolloClient.query({
//     query: ARTICLE_LIST,
//     variables: { page: 1 },
//   });

//   return {
//     props: {
//       initialApolloState: apolloClient.cache.extract(),
//     },
//   };
// };

export default index;
