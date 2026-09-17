import { type Request, type Response } from 'express';
import { prisma } from '../server/prisma';
import bcrypt from 'bcrypt';
import type { UserDto } from '../types/user.dto';

export async function register(req: Request, res: Response){
  const { name, email, password } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    return res.status(400).json({ error: 'User already exists w/ this email' });
  }

  const hash: string = await bcrypt.hash(password, 10);

  const user: UserDto = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
    },
  });

  res.status(201).json({
    status: 'success',
    data: {
      user: {
        id: user.id,
        name,
        email,
      },
    },
  });
};
