import { gql } from "@apollo/client";

export const TOGGLE_LIKE = gql`
  mutation TOGGLE_LIKE($articleId: ID!, $isLiked: Boolean!) {
    toggleLike(data: { articleId: $articleId, isLiked: $isLiked })
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
