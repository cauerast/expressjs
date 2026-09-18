import * as repository from '../repositories/user.repository';
import type { User } from '../generated/prisma/client';

export async function findAll(): Promise<User[]> {
  return await repository.findAll();
}

export async function findById(id: string): Promise<User> {
  const user = await repository.findById(id);

  if (!user) throw new Error('User not found');

  return user;
}


