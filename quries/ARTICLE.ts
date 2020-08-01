import { gql } from "@apollo/client";

export const CREATE_ARTICLE = gql`
  mutation CREATE_ARTICLE(
    $title: String!
    $body: String!
    $tags: [String!]
    $isPublished: Boolean!
    $thumbnail: String
    $seriesName: String
  ) {
    createArticle(
      data: {
        title: $title
        body: $body
        tags: $tags
        isPublished: $isPublished
        thumbnail: $thumbnail
        seriesName: $seriesName
      }
    ) {
      url
    }
  }
`;

export const DELETE_ARTICLE = gql`
  mutation DELETE_ARTICLE($_id: ID!) {
    deleteArticle(_id: $_id) {
      title
    }
  }
`;

export const UPDATE_ARTICLE = gql`
  mutation UPDATE_ARTICLE(
    $_id: ID!
    $title: String!
    $body: String!
    $tags: [String!]
    $isPublished: Boolean!
    $thumbnail: String
    $seriesName: String
  ) {
    updateArticle(
      _id: $_id
      data: {
        title: $title
        body: $body
        tags: $tags
        isPublished: $isPublished
        thumbnail: $thumbnail
        seriesName: $seriesName
      }
    ) {
      slug
      url
    }
  }
`;

export const ARTICLE_LIST = gql`
  query ARTICLE_LIST($page: Int) {
    articles(
      pagination: { limit: 5, page: $page, sort: "-isPinned,-createdAt" }
    ) {
      resourceCount
      pageCount
      currentPage
      data {
        _id
        title
        excerpt
        timeToRead
        slug
        url
        thumbnail
        tags
        createdAt
        updatedAt
        isPublished
        isPinned
        commentCount
        isLiked
        isBookmarked
        likeCount
        bookmarkCount
        author {
          name
          username
          profilePhoto
        }
      }
    }
  }
`;

export const FEATURED_ARTICLES = gql`
  query FEATURED_ARTICLES {
    featuredArticles {
      resourceCount
      data {
        _id
        title
        thumbnail
        url
        author {
          name
          username
          profilePhoto
        }
      }
    }
  }
`;

export const ARTICLE_LIST_BY_TAG = gql`
  query ARTICLE_LIST_BY_TAG($page: Int, $tags: [String!]!) {
    articlesByTag(
      pagination: { limit: 5, page: $page, sort: "-isPinned,-createdAt" }
      tags: $tags
    ) {
      resourceCount
      pageCount
      currentPage
      data {
        _id
        title
        excerpt
        timeToRead
        slug
        url
        thumbnail
        tags
        createdAt
        updatedAt
        isPublished
        commentCount
        isPinned
        author {
          name
          username
          profilePhoto
        }
      }
    }
  }
`;

export const SIDEBAR_FEATURED_TAG = gql`
  query SIDEBAR_FEATURED_TAG($tags: [String!]!, $and: Boolean) {
    articlesByTag(pagination: { limit: 4, page: 1 }, tags: $tags, and: $and) {
      data {
        title
        url
        createdAt
        author {
          username
        }
      }
    }
  }
`;

export const ARTICLE_DETAILS = gql`
  query ARTICLE_DETAILS($slug: String, $_id: ID) {
    article(idOrSlug: { slug: $slug, _id: $_id }) {
      _id
      title
      timeToRead
      thumbnail
      body
      createdAt
      isPublished
      tags
      url
      seriesName
      excerpt
      commentCount
      isLiked
      isBookmarked
      likeCount
      bookmarkCount
      series {
        _id
        title
        url
      }
      author {
        _id
        profilePhoto
        name
        username
        articles(pagination: { limit: 5 }) {
          data {
            _id
            title
            slug
            url
            createdAt
          }
        }
      }
    }
  }
`;
