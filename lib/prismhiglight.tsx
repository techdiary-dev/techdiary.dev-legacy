import styled from "styled-components";

import Highlight from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/hljs/shades-of-purple";

export const Highlighter = ({
  value,
  language = "jsx",
}: {
  value: string;
  language: string;
}) => {
  console.log(language);
  return (
    <Highlight
      className="highlight-pre-tag"
      style={style}
      language={language ? language : "jsx"}
      showLineNumbers={true}
    >
      {value ?? ""}
    </Highlight>
  );
};

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
