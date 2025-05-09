import 'dotenv/config';
import { type Post } from '../types';
import axios from 'axios';

const URL = process.env.URL || `http://localhost:3000/api`;

export const postResolvers = {
  Query: {
    posts: async (_: unknown, { id }: { id: string }): Promise<Post[]> => {
      const response = await axios.get<{ posts: Post[] }>(`${URL}/posts/${id}`);
      return response.data.posts;
    },
  },
};
