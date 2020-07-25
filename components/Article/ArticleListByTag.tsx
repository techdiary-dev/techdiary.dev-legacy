import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { SyncLoader } from "react-spinners";
import "twin.macro";

import InfiniteScroll from "react-infinite-scroll-component";
import { ARTICLE_LIST_BY_TAG } from "quries/ARTICLE";
import ArticleCard from "./ArticleCard";
import { useRouter } from "next/router";

const ArticleListByTag: React.FC = () => {
  const router = useRouter();

  let { data, fetchMore, refetch } = useQuery(ARTICLE_LIST_BY_TAG, {
    variables: { page: 1, tags: [router.query.tagName] },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
  });

  //   useEffect(() => {
  //     refetch({ page: 1 });
  //   }, []);

  const handleFetch = () => {
    fetchMore({
      variables: {
        page: data?.articlesByTag?.currentPage + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        // @ts-ignore
        return {
          articlesByTag: {
            // @ts-ignore
            ...fetchMoreResult.articlesByTag,
            data: [
              // @ts-ignore
              ...prev.articlesByTag.data,
              // @ts-ignore
              ...fetchMoreResult.articlesByTag.data,
            ],
          },
        };
      },
    });
  };

  return (
    <InfiniteScroll
      dataLength={data?.articlesByTag?.data.length ?? 5}
      next={handleFetch}
      hasMore={
        data?.articlesByTag?.data.length < data?.articlesByTag?.resourceCount
      }
      loader={
        <div tw="w-full h-24 flex items-center justify-center">
          <SyncLoader size={8} color="#24B3AE" />
        </div>
      }
    >
      {data?.articlesByTag?.data.map((article) => (
        <ArticleCard {...article} key={article.slug} />
      ))}
    </InfiniteScroll>
  );
};

export default ArticleListByTag;
