import React from "react";
import ReactMarkdown from "react-markdown";
import { Highlighter } from "lib/prismhiglight";
import matter from "gray-matter";
import styled from "styled-components";
import tw from "twin.macro";
import { StyledArticleContent } from "components/Article/ArticleDetails/styles";

const StyledPreview = styled.div`
  ${tw`p-4 bg-white`};
  height: calc(100vh - (2.5rem * 2));
  overflow-y: scroll;
`;

const Preview = ({ content }) => {
  return (
    <StyledPreview>
      <StyledArticleContent>
        <ReactMarkdown
          source={matter(content).content}
          renderers={{
            code: Highlighter,
            inlineCode: ({ value }) => (
              <code className="language-text">{value}</code>
            ),
          }}
          linkTarget="_blank"
          className="markdown"
        />
      </StyledArticleContent>
    </StyledPreview>
  );
};

export default Preview;
