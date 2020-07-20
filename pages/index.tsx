import React from "react";
import MainLayout from "components/Layout/MainLayout";
import { Row } from "styled-grid-system-component";
// import TagHighlights from 'components/TagHighlights'
import ArticleList from "components/Article/ArticleList";
import Skeleton from "react-loading-skeleton";
import { FiInfo } from "react-icons/fi";

import { StyledCol } from "styles/StyledGrid";
import useMe from "components/useMe";
import UserCardWithArticles from "components/UserCardWithArticles";
import HeadTag from "components/HeadTag";
import styled from "styled-components";
import { NextPage, GetServerSideProps } from "next";
import FooterLinks from "components/FooterLinks";
import { initializeApollo } from "lib/apolloClient";
import { ARTICLE_LIST } from "quries/ARTICLE";
import FeaturedTag from "components/FeaturedTag";

const StyledBetaAlert = styled.div`
  font-size: 2.2rem;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  margin-bottom: 25px;
  border-radius: 5px;
  padding: 15px;

  span {
    font-size: 14px;
    text-align: right;
    background-color: #231d1d;
    display: inline-block;
    padding: 3px 8px;
    border-radius: 5px;
  }
`;

interface Props {
  version?: string;
}

const index: NextPage<Props> = (props) => {
  let { data, loading, error } = useMe();

  return (
    <div>
      <HeadTag title="Tech Diary" description="বাংলার প্রোগ্রামিং নেটওয়ার্ক" />
      <MainLayout>
        <Row>
          <StyledCol md={3} sidebar>
            <FeaturedTag />
            <FeaturedTag />
            <FeaturedTag />
          </StyledCol>

          <StyledCol md={6} main>
            <ArticleList />
          </StyledCol>

          <StyledCol md={3} sidebar>
            {loading ? (
              <Skeleton height={320} />
            ) : (
              !error && data && <UserCardWithArticles user={data} />
            )}
            <FooterLinks />
          </StyledCol>
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
