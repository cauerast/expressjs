import bcrypt from 'bcrypt';

import * as repository from '../repositories/user.repository';

import type { CreateUserDto } from '../dto/user/create.user.dto';
import type { UserResponseDto } from '../dto/user/response.user.dto';

export async function register( user: CreateUserDto ): Promise<UserResponseDto> {
  const exists = await repository.findByEmail(user.email);

  if (exists) {
    throw new Error('Email already registered');
  }

  const hash = await bcrypt.hash(user.password, 10);

  const newUser = await repository.create({
    ...user,
    password: hash,
  });

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
    createdAt: newUser.createdAt,
  };
}