import gql from "graphql-tag";

export const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($articleId: ID!, $body: String!, $parent: ID) {
    createComment(data: { article: $articleId, body: $body, parent: $parent }) {
      _id
    }
  }
`;

export const GET_ARTICLE_COMMENTS = gql`
  query GET_ARTICLE_COMMENTS($articleId: ID!, $page: Int) {
    getCommentsByArticle(
      articleId: $articleId
      pagination: { limit: 5, page: $page }
    ) {
      currentPage
      data {
        _id
        body
        createdAt
        author {
          username
        }
        comments {
          _id
          body
          createdAt
          parent
          author {
            username
          }
        }
      }
    }
  }
`;
