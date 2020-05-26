import styled from "styled-components";

export const ArticleEditorStyle = styled.div`
  .rc-md-editor {
    .custom-html-style {
      code {
        background-color: inherit !important;
        padding: 0;
      }
      pre {
        border-radius: 5px;
      }
    }
  }
  .react-syntax-highlighter-line-number {
    color: #868282;
  }
`;
