import { prisma } from '../server/prisma';
import type { User } from '../generated/prisma/client';
import type { CreateUserDto } from '../dto/user/create.user.dto';
import type { UpdateUserDto } from '../dto/user/update.user.dto';

export async function findAll(): Promise<User[]> {
  return await prisma.user.findMany({
    orderBy: {
      name: 'asc',
    },
  });
}

export async function findById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function findByEmail(email: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function create(user: CreateUserDto): Promise<User> {
  return await prisma.user.create({
    data: {
      ...user,
    },
  });
}

export async function update(id: string, user: UpdateUserDto): Promise<User> {
  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      ...user,
    },
  });
}

export async function remove(id: string): Promise<User> {
  return await prisma.user.delete({
    where: {
      id,
    },
  });
}
