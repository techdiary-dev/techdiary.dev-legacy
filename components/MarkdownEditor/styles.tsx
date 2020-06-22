import styled from "styled-components";

export const StyledMarkdownEditor = styled.div`
  .actions {
    margin: 12px 0;
  }

  .cm-s-solarized.CodeMirror {
    box-shadow: none;
    font-size: 2rem;
  }

  .CodeMirror {
    padding: 15px;
    height: calc(90vh - 150px);
  }

  .cm-m-markdown.cm-header.cm-header-1 {
    margin: 0;
    font-size: 3.6rem;
    line-height: 4.5rem;
  }
  .cm-m-markdown.cm-header.cm-header-2 {
    margin: 0;
    font-size: 3rem;
    line-height: 4.5rem;
  }
  .cm-m-markdown.cm-header.cm-header-3 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 4.5rem;
  }
  .cm-m-markdown.cm-header.cm-header-4 {
    margin: 0;
    font-size: 2rem;
    line-height: 3.5rem;
  }
`;
