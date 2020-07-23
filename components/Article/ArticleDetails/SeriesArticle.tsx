import React from "react";
// import styled from "styled-components";
import "twin.macro";
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import styled from "styled-components";

const StyledSeriesArticle = styled.div`
  a {
    color: ${({ theme }) => theme.dark};
    border-bottom: 1px dashed ${({ theme }) => theme.primary};

    position: relative;
    &::after {
      content: url("/icons/external-link-sm.svg");
      height: 15px;
      width: 15px;
      margin-left: 5px;
    }
  }
`;

const SeriesArticle = ({ articles, currentUrl }) => {
  return (
    <StyledSeriesArticle tw="bg-gray-200 p-4 rounded mb-5">
      <h4 tw="flex items-center">
        <BsBook tw="mr-2" /> <span>সিরিজ ডায়েরি</span>
      </h4>
      <ol>
        {articles.map(({ title, url, _id }) => (
          <li key={_id} tw="list-decimal list-inside ml-6 leading-10">
            {currentUrl === url ? (
              <span tw="text-base">{title}</span>
            ) : (
              <Link href={`/[username]/[articleSlug]`} as={url} passHref>
                <a tw="text-base">{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </StyledSeriesArticle>
  );
};

export default SeriesArticle;
