import { type User, PrismaClient } from '../generated/prisma/client';
import { type UpdateUser, type CreateUser } from '../types';

export class UsersService {
  private prisma;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUsers(): Promise<User[]> {
    return await this.prisma.user.findMany({
      include: { posts: true },
    });
  }

  async getUser(id: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id: Number(id) },
      include: { posts: true },
    });
  }

  async createUser(user: CreateUser): Promise<string> {
    const createdUser = await this.prisma.user
      .create({
        data: user,
      })
      .catch(() => null);

    return createdUser ? 'success' : 'error';
  }

  async updateUser(id: string, user: UpdateUser): Promise<User | null> {
    const { name, lastName, country } = user ?? {};

    return await this.prisma.user
      .update({
        where: { id: Number(id) },
        data: { name, lastName, country },
      })
      .catch(() => null);
  }

  async deleteUser(id: string): Promise<string> {
    const deletedUser = await this.prisma.user
      .delete({
        where: { id: Number(id) },
      })
      .catch(() => null);

    return deletedUser ? 'success' : 'error';
  }
}
