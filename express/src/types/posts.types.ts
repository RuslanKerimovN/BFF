export interface CreatePost {
  title: string;
  content: string;
  published: boolean;
  authorId: string;
}

export type UpdatePost = Partial<Omit<CreatePost, 'authorId'>>;
