import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB, disconnectDB } from './server/prisma';
import movie from './routes/movie';

const app = express();
const PORT = '3000';

config();
app.use(cors({
  origin: ['http://localhost:3000'], // Fixed typo 'localhoost' and protocol 'https' -> 'http'
}));
app.use(express.json());

// Application routes
app.use('/movies', movie);

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

process.on("unhandledRejection", async (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
