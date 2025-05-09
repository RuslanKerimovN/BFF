import 'dotenv/config';
import { type User } from '../types';
import axios from 'axios';

const URL = process.env.URL || `http://localhost:3000/api`;

export const userResolvers = {
  Query: {
    users: async (): Promise<User[]> => {
      const response = await axios.get<{ users: User[] }>(`${URL}/users`);
      return response.data.users;
    },
  },
};
