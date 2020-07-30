import gql from "graphql-tag";

export const LOGIN = gql`
  mutation LOGIN($code: String!) {
    login(oAuthCode: $code) {
      token
    }
  }
`;

export const LOGOUT = gql`
  mutation LOGOUT {
    logout
  }
`;

export const ME = gql`
  query ME_QUERY($articlePage: Int = 1) {
    me {
      _id
      name
      username
      email
      profilePhoto
      education
      designation
      location
      bio

      skills
      workInfo {
        name
        designation
        startTime
        endTime
      }
      links {
        text
        link
      }

      articles(pagination: { limit: 5, page: $articlePage }) {
        resourceCount
        pageCount
        currentPage
        data {
          _id
          title
          url
          excerpt
          slug
          thumbnail
          tags
          isPublished
          createdAt
          updatedAt
          author {
            name
            username
            profilePhoto
          }
        }
      }
    }
  }
`;

export const USER_PROFILE = gql`
  query USER_PROFILE($username: String!, $articlePage: Int = 1) {
    profile(username: $username) {
      _id
      name
      username
      email
      profilePhoto
      education
      designation
      location
      bio

      skills
      workInfo {
        name
        designation
        startTime
        endTime
      }
      links {
        text
        link
      }

      articles(pagination: { limit: 5, page: $articlePage }) {
        resourceCount
        pageCount
        currentPage
        data {
          url
          _id
          title
          excerpt
          slug
          url
          thumbnail
          tags
          createdAt
          updatedAt
          isPublished
          timeToRead
          author {
            name
            username
            profilePhoto
          }
        }
      }
    }
  }
`;

export const UPDATE_PROFILE = gql`
  mutation UPDATE_PROFILE(
    $name: String
    $education: String
    $designation: String
    $location: String
    $bio: String
    $links: [LinkInput!]
    $skills: [String!]
    $workInfo: [WorkInfoInput!]
  ) {
    updateProfile(
      data: {
        name: $name
        education: $education
        designation: $designation
        location: $location
        bio: $bio
        links: $links
        skills: $skills
        workInfo: $workInfo
      }
    ) {
      name
    }
  }
`;
