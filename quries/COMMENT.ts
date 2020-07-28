import gql from "graphql-tag";

export const CREATE_COMMENT = gql`
  mutation CREATE_COMMENT($articleId: ID!, $body: String!, $parent: ID) {
    createComment(data: { article: $articleId, body: $body, parent: $parent }) {
      _id
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DELETE_COMMENT($_id: ID!) {
    deleteComment(_id: $_id) {
      _id
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation UPDATE_COMMENT($body: String, $_id: ID!) {
    updateComment(data: { body: $body }, _id: $_id) {
      _id
    }
  }
`;

export const GET_ARTICLE_COMMENTS = gql`
  query GET_ARTICLE_COMMENTS($articleId: ID!, $page: Int) {
    getCommentsByArticle(
      articleId: $articleId
      pagination: { limit: 5000, page: $page }
    ) {
      currentPage
      data {
        _id
        body
        createdAt
        author {
          _id
          username
        }
        comments {
          _id
          body
          createdAt
          parent
          author {
            _id
            username
          }
        }
      }
    }
  }
`;
