export interface Post {
  id: number;
  title?: string;
  content?: string;
  published?: boolean;
  createdAt?: string;
  updateAt?: string;
  authorId?: number;
}

export interface User {
  id: number;
  name: string;
  lastName: string;
  age?: number;
  email?: string;
  country?: string;
  createAt?: string;
  posts?: Post[];
}
