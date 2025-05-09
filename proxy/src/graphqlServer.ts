import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from '../src/schemes';
import 'dotenv/config';
import { mergeResolvers } from '@graphql-tools/merge';
import { userResolvers, postResolvers } from './resolvers';

const PORT = process.env.PORT || 4000;

export const resolvers = mergeResolvers([userResolvers, postResolvers]);

const startServer = async (): Promise<void> => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const app = express();

  await server.start();

  server.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
  });
};

startServer().catch((error) => {
  console.error('Failed to start server:', error);
  process.exit(1);
});
