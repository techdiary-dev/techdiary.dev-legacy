import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SyncLoader } from "react-spinners";
import "twin.macro";

import InfiniteScroll from "react-infinite-scroll-component";
import { Container } from "./styles";
import { ARTICLE_LIST } from "quries/ARTICLE";
import ArticleCard from "../ArticleCard";

const ArticleList: React.FC = () => {
  let { data, fetchMore, refetch } = useQuery(ARTICLE_LIST, {
    variables: { page: 1 },
  });

  // useEffect(() => {
  //   refetch({ page: 1 });
  // }, []);

  const handleFetch = () => {
    fetchMore({
      variables: {
        page: data?.articles?.currentPage + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        return {
          articles: {
            // @ts-ignore
            ...fetchMoreResult.articles,
            // @ts-ignore
            data: [...prev.articles.data, ...fetchMoreResult.articles.data],
          },
        };
      },
    });
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={data?.articles?.data.length ?? 5}
        next={handleFetch}
        hasMore={data?.articles?.data.length < data?.articles?.resourceCount}
        loader={
          <div tw="w-full h-24 flex items-center justify-center">
            <SyncLoader size={8} color="#24B3AE" />
          </div>
        }
      >
        {data?.articles?.data.map((article) => (
          <ArticleCard {...article} key={article.slug} />
        ))}
      </InfiniteScroll>
    </Container>
  );
};

export default ArticleList;
