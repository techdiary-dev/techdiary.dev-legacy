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

export const MY_LIKES = gql`
  query MY_LIKES {
    myLikes {
      _id
      type
      createdAt
      article {
        _id
        title
        url
        thumbnail
        author {
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

export const MY_BOOKMARKS = gql`
  query MY_BOOKMARKS {
    myBookmarks {
      _id
      type
      createdAt
      article {
        _id
        title
        url
        thumbnail
        author {
          username
          profilePhoto
        }
      }
    }
  }
`;

export const TOGGLE_BOOKMARK = gql`
  mutation TOGGLE_BOOKMARK($articleId: ID!, $isBookmarked: Boolean!) {
    toggleBookmark(data: { articleId: $articleId, isBookmarked: $isBookmarked })
  }
`;
