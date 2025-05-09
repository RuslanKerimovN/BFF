import { gql } from 'apollo-server-express';
import { type DocumentNode } from 'graphql';

export const typeDefs: DocumentNode = gql`
  type Post {
    id: ID!
    title: String!
    content: String!
    published: Boolean!
    createdAt: String!
    updatedAt: String!
    authorId: ID!
    author: User
  }

  type User {
    id: ID!
    name: String!
    lastName: String!
    age: Int!
    email: String!
    country: String!
    createAt: String!
    posts: [Post!]!
  }

  type Query {
    users: [User!]!
    posts(id: ID!): [Post!]!
  }
`;
