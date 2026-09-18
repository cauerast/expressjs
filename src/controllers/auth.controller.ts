import { type Request, type Response, type NextFunction } from 'express';
import * as service from '../services/auth.service';

export async function register(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  try {
    const user = await service.register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
}
