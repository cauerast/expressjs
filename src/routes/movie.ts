import express, { type Request, type Response } from 'express';

const router = express.Router();

router.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'hello world' });
});

export default router;
