import styled from "styled-components";
import tw from "twin.macro";

export const StyledArticleContent = styled.article`
  ${tw`text-lg leading-10`}
  /* Links */
  a {
    ${tw`border-b border-primary border-dashed hover:bg-primary transition duration-300 hover:bg-opacity-25`}
    position: relative;
    &::after {
      content: url("/icons/external-link-sm.svg");
      height: 15px;
      width: 15px;
      margin-left: 5px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${tw`text-semiDark`}
    ${tw`mt-8 mb-0 first:mt-0`}
  }

  h1,
  h2,
  h3 {
    ${tw`border-b-2`}
  }

  img {
    ${tw`max-w-full my-8`}
  }

  p {
    ${tw`mb-8`}
  }

  /* Table */
  table {
    width: 100%;
    td,
    th {
      border: 1px solid ${({ theme }) => theme.lightGrey};
      padding: 10px;
    }
  }

  ul,
  ol {
    ${tw`list-inside`}
  }

  ul {
    ${tw`list-disc`}
  }

  /* Blockquote */
  blockquote {
    ${tw`ml-0 my-8 bg-gray-100 py-4 border-l-2 border-primary rounded`}
    p {
      ${tw`px-3 text-xl text-semiDark mb-0`}
    }
  }

  .react-syntax-highlighter-line-number {
    ${tw`text-gray-700`}
  }
  .highlight-pre-tag {
    ${tw`mb-8`}
  }
  .markdown {
    pre,
    code {
      font-family: "Fira Mono";
      ${tw`text-base`}
      @media all and (max-width: 650px) {
        ${tw`text-sm`}
      }
    }

    code.language-text {
      background-color: rgb(45, 43, 87);
      color: rgb(227, 223, 255);
      padding: 5px 6px;
      border-radius: 5px;
    }
  }
`;
