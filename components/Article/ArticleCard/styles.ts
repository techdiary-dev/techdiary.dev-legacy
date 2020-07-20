import styled from "styled-components";
import tw from "twin.macro";

export const ArticleCardStyle = styled.div`
  position: relative;
  padding: 2px;
  .floatingActions {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;

    .pinned {
      height: 20px;
      width: 20px;
      path {
        stroke: ${({ theme }) => theme.primaryDark} !important;
      }
    }
  }

  .title {
    ${tw`text-xl`}
  }
  .time {
    color: ${({ theme }) => theme.darkGrey};
    margin-top: 0;
  }

  .excerpt {
    color: ${({ theme }) => theme.lightDark};
    ${tw`text-base`}
  }

  .thumbnail {
    margin: 10px -15px 10px -15px;

    img {
      ${tw`w-full`}
      max-width: 100%;
    }
    cursor: pointer;
  }

  .tags {
    a {
      font-size: 1.6rem;
      margin-right: 8px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    .state {
      ${tw`text-sm`}
      display: flex;
      align-items: center;
      margin-right: 12px;

      &:last-child {
        margin-right: 0;
      }

      svg {
        margin-right: 6px;
      }
    }

    .commentsAndLikes {
      display: flex;
    }
  }
`;
