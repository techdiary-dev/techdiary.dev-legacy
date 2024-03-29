import React from "react";
import { StyledUserprofile } from "./styles";
import { Col, Row } from "styles/StyledGrid";
import ArticleCard from "components/Article/ArticleCard";
import UserProfileData from "./UserProfileData";
import UserProfileMetaData from "./UserProfileMetaData";
import { useQuery } from "@apollo/client";
import { USER_PROFILE } from "quries/AUTH";
import UserProfileSekeleton from "./UserProfileSkeleton";
import HeadTag from "components/HeadTag";
import InfiniteScroll from "react-infinite-scroll-component";
import StyledLoadmore from "styles/StyledLoadmore";
import { SyncLoader } from "react-spinners";

interface Props {
  username: any;
}

const UserProfile = ({ username }: Props) => {
  let { data, loading, fetchMore } = useQuery(USER_PROFILE, {
    variables: { username },
  });

  const handleFetch = () => {
    fetchMore({
      variables: {
        articlePage: data?.profile?.articles?.currentPage + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        return {
          profile: {
            // @ts-ignore
            ...fetchMoreResult?.profile,
            articles: {
              //@ts-ignore
              ...fetchMoreResult.profile.articles,
              data: [
                //@ts-ignore
                ...prev.profile.articles.data,
                //@ts-ignore
                ...fetchMoreResult.profile.articles.data,
              ],
            },
          },
        };
      },
    });
  };

  if (loading) return <UserProfileSekeleton />;

  return (
    <StyledUserprofile>
      <HeadTag
        title={data?.profile?.name}
        description={data?.profile?.bio}
        ogImage={data?.profile?.profilePhoto}
      />
      <UserProfileData user={data?.profile} />

      <div className="body">
        <Row>
          <Col md={3} sidebar>
            <UserProfileMetaData user={data?.profile} />
          </Col>

          <Col md={6} main>
            {data.profile?.articles?.data?.map((article) => (
              <ArticleCard {...article} key={article._id} />
            ))}
            <InfiniteScroll
              dataLength={data?.profile?.articles?.data.length ?? 5}
              next={handleFetch}
              hasMore={
                data?.profile?.articles?.data.length <
                data?.profile?.articles?.resourceCount
              }
              loader={
                <StyledLoadmore>
                  <SyncLoader size={8} color="#24B3AE" />
                </StyledLoadmore>
              }
            >
              {data?.articles?.data.map((article) => (
                <ArticleCard {...article} key={article.slug} />
              ))}
            </InfiniteScroll>
          </Col>

          <Col md={3} sidebar></Col>
        </Row>
      </div>
    </StyledUserprofile>
  );
};

export default UserProfile;
