import { gql } from '@apollo/client';

export const GET_POSTS_MOBILE = gql`
  query GetPosts($id: ID!) {
    posts(id: $id) {
      id
      title
      content
      published
      createdAt
      updateAt
      authorId
    }
  }
`;
