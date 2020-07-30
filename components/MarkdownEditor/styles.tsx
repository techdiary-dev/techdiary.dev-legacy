import styled from "styled-components";
import tw from "twin.macro";

export const StyledMarkdownEditor = styled.div`
  .actions {
    margin: 12px 0;
  }
  .CodeMirror {
    ${tw`p-4`};
    height: calc(100vh - 2.5rem);
  }
  .cm-s-solarized.cm-s-light {
    ${tw`bg-transparent`};
  }

  .cm-s-solarized.CodeMirror {
    ${tw`shadow-none bg-white text-lg`}
  }

  .cm-m-markdown.cm-header {
    &.cm-header-1,
    &.cm-header-2,
    &.cm-header-3,
    &.cm-header-4,
    &.cm-header-4,
    &.cm-header-6 {
      ${tw`text-semiDark`}
      ${tw`mt-8 mb-0 first:mt-0`}
    }

    &.cm-header-1,
    &.cm-header-2,
    &.cm-header-3 {
      ${tw`border-b-2`}
    }

    &.cm-header-1 {
      ${tw`text-4xl`}
    }

    &.cm-header-2 {
      ${tw`text-3xl`}
    }

    &.cm-header-3 {
      ${tw`text-2xl`}
    }

    &.cm-header-4 {
      ${tw`text-xl`}
    }

    &.cm-header-5 {
      ${tw`text-lg`}
    }

    &.cm-header-6 {
      ${tw`text-base`}
    }
  }
`;
