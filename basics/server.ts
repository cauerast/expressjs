import express, { type Request, type Response } from 'express';
import productsRouter from './routes/products';
import cors from 'cors';

// middleware ----------------------------------------------------------------
const app = express(); // app object (represents web server)

app.use(express.json()); // allow express parse json data and put the result into req.body

app.use(cors({
  origin: ['https://localhost:5500']
})); // allow cross origins ports

app.use((req: Request, res: Response, next) => {
  console.log(req.method, req.path); // (METHOD/ path)
  next();
}) // used to vizualize reqs on terminal (METHOD/ path)


// routes -------------------------------------------------------------------
app.use('/product', productsRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from express')
});

app.get('/about', (req: Request, res: Response) => {
  res.send('About page')
})

app.get('/message', (req: Request, res: Response) => {
  res.json({ message: "Hello from back-end" })
})

app.post('/message', (req: Request, res: Response) => {
  const { name, message } = req.body;
  
  console.log('new message: ', name, message);
  res.json({ message: 'thanks for the message' })
})



app.listen(3000, () => {
  console.log('server running')
}); // define a port and log