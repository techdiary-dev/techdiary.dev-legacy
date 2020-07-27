import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useQuery } from "@apollo/client";
import { SIDEBAR_FEATURED_TAG } from "quries/ARTICLE";
import Link from "next/link";

const StyledFeaturedTag = styled.div`
  .title {
    ${tw`text-xl`}
  }

  .entries {
    ${tw`my-3`}
  }
  .entry {
    ${tw`my-3`}
    &__link {
      ${tw`my-3`}
    }
    &__creator {
      ${tw`block text-sm `}
    }
  }
`;

const FeaturedTag = ({ tags = [], primaryTag, and = false }) => {
  const { data } = useQuery(SIDEBAR_FEATURED_TAG, {
    variables: {
      tags: [primaryTag, ...tags],
      and,
    },
  });

  return (
    <StyledFeaturedTag>
      <h1 className="title">
        <Link href="/t/[tagName]" as={`/t/${primaryTag}`}>
          <a>#{primaryTag}</a>
        </Link>
      </h1>
      <div className="entries">
        {data?.articlesByTag?.data?.map((article) => {
          return (
            <div className="entry" key={article.url}>
              <Link
                href={`/[username]/[articleSlug]`}
                as={article.url}
                passHref
              >
                <a className="entry__link">{article.title}</a>
              </Link>

              <Link href="/[username]" as={`/${article.author.username}`}>
                <a className="entry__creator">{article.author.username}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </StyledFeaturedTag>
  );
};

export default FeaturedTag;
