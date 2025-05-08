import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import axios from 'axios';
import { type User } from './types';
import { typeDefs } from '../src/schemes';
import 'dotenv/config';

const PORT = process.env.PORT || 4000;
const URL = process.env.URL || `http://localhost:3000/api`;

const resolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      const response = await axios.get<{ users: User[] }>(`${URL}/users`);
      return response.data.users;
    },
  },
};

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
