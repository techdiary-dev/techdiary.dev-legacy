import { gql } from "@apollo/client";

export const TOGGLE_LIKE = gql`
  mutation TOGGLE_LIKE($articleId: ID!, $isLiked: Boolean!) {
    toggleLike(data: { articleId: $articleId, isLiked: $isLiked })
  }
`;

export const TOGGLE_BOOKMARK = gql`
  mutation TOGGLE_BOOKMARK($articleId: ID!, $isBookmarked: Boolean!) {
    toggleBookmark(data: { articleId: $articleId, isBookmarked: $isBookmarked })
  }
`;

export const LIKERS = gql`
  query LIKERS($articleId: ID!) {
    articleLikers(articleId: $articleId) {
      resourceCount
      data {
        user {
          _id
          username
          profilePhoto
        }
      }
    }
  }
`;

export const ARTICLE_BOOKMARKS = gql`
  query ARTICLE_BOOKMARKS($articleId: ID!) {
    articleBookMarks(articleId: $articleId) {
      resourceCount
      data {
        user {
          _id
        }
      }
    }
  }
`;
