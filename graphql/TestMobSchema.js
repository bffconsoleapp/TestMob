import { gql } from 'apollo-server';

const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }

  input UserInput {
    id: ID
    name: String!
    email: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
  }

  input PostInput {
    id: ID
    title: String!
    content: String!
    authorId: ID!
  }

  type Query {
    getUsers: [User!]!
    getPosts: [Post!]!
  }

  type Mutation {
    addUser(user: UserInput!): User!
    addPost(post: PostInput!): Post!
  }
`;

export default typeDefs;