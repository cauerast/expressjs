import express, { type Request, type Response } from 'express';
import productsRouter from './routes/products';
import cors from 'cors';

// middleware ----------------------------------------------------------------
const app = express(); // app object (represents web server)

app.use(express.json()); // allow express parse json data and put the result into req.body
app.use(cors({
  origin: ['https://localhost:5500']
})); // allow cross origins ports

// routes -------------------------------------------------------------------
app.use('/product', productsRouter)

app.get('/', (req, res) => {
  res.send('Hello from express')
});

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/message', (req, res) => {
  res.json({ message: "Hello from back-end" })
})

app.post('/message', (req,res) => {
  const { name, message } = req.body;
  
  console.log('new message: ', name, message);
  res.json({ message: 'thanks for the message' })
})




app.listen(3000, () => {
  console.log('server running')
}); // define a port and log