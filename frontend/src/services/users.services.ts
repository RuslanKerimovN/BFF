import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      lastName
      age
      email
      country
      createAt
      posts {
        id
        title
        content
        published
        createdAt
        updateAt
        authorId
      }
    }
  }
`;

export const GET_USERS_MOBILE = gql`
  query GetUsers {
    users {
      id
      name
      lastName
      email
      posts {
        id
        title
        content
        published
      }
    }
  }
`;
