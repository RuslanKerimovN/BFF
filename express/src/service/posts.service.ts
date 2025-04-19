import { type Post, PrismaClient } from '../generated/prisma/client';
import { type CreatePost, type UpdatePost } from '../types/posts.types';

export class PostsService {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getPosts(authorId: string): Promise<Post[]> {
    return await this.prisma.post.findMany({
      where: { authorId: Number(authorId) },
    });
  }

  async getPost(id: string): Promise<Post | null> {
    return await this.prisma.post.findUnique({
      where: { id: Number(id) },
    });
  }

  async createPost(authorId: string, data: CreatePost): Promise<string> {
    const post = await this.prisma.post
      .create({
        data: {
          title: data.title,
          content: data.content,
          published: data.published || false,
          authorId: Number(authorId),
        },
      })
      .catch(() => null);

    return post ? 'success' : 'error';
  }

  async updatePost(id: string, post: UpdatePost): Promise<Post | null> {
    const { content, title, published } = post ?? {};

    return await this.prisma.post
      .update({
        where: { id: Number(id) },
        data: { title, content, published },
      })
      .catch(() => null);
  }

  async deletePost(id: string): Promise<string> {
    const deletedPost = await this.prisma.post
      .delete({
        where: { id: Number(id) },
      })
      .catch(() => null);

    return deletedPost ? 'success' : 'error';
  }
}
