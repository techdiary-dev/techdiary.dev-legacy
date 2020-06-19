import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsBook } from "react-icons/bs";

const StyledSeriesArticle = styled.div`
  padding: 15px;
  h4 {
    display: flex;
    align-items: center;
    span {
      margin-left: 12px;
    }
  }
  ol {
    li {
      margin-bottom: 15px;
    }
  }
`;

const SeriesArticle = ({ articles, currentUrl }) => {
  return (
    <StyledSeriesArticle>
      <h4>
        <BsBook /> <span>সিরিজ ডায়েরি</span>
      </h4>
      <ol>
        {articles.map(({ title, url, _id }) => (
          <li key={_id}>
            {currentUrl === url ? (
              <div>{title}</div>
            ) : (
              <Link href={`/[username]/[articleSlug]`} as={url}>
                <a>{title}</a>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </StyledSeriesArticle>
  );
};

export default SeriesArticle;
