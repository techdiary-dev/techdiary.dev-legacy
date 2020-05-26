import styled from "styled-components";

export const StyledArticleDetails = styled.div`
  .thumbnail {
    width: 100%;
    img {
      max-width: 100%;
      height: auto;
    }
  }
  .markdown {
    line-height: 4rem;
    font-size: 2.2rem;
    @media all and (max-width: 750px) {
      line-height: 3rem;
      font-size: 1.8rem;
    }
  }

  .meta {
    padding: 1.8rem 0;
    &__title {
      font-size: 2.5rem;
    }
    &__time {
      font-size: 1.6rem;
      color: ${({ theme }) => theme.darkGrey};
      margin: 0;
    }
  }

  .article-content {
    font-size: 1.8rem;

    /* Links */
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

    img {
      max-width: 100%;
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

    /* Blockquote */
    blockquote {
      margin-left: 0;
      p {
        border-left: 3px solid ${({ theme }) => theme.primary};
        padding-left: 15px;
      }
    }
  }
`;
