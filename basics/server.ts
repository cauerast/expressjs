import express, { type Request, type Response } from 'express';
const app = express(); // app object (represents web server)

app.listen(3000, () => {
  console.log('server running')
}); // define a port and log

app.get('/', (req, res) => {
  res.send('Hello from express')
});

app.get('/about', (req, res) => {
  res.send('About page')
})

app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop',  price: 1299 },
    { id: 2, name: 'Mouse',  price: 60 }
  ])
})

app.get('/products/:id', (req,res) => {
  const id: number = Number(req.params.id);
  const products = [
    { id: 1, name: 'Laptop',  price: 1299 },
    { id: 2, name: 'Mouse',  price: 60 }
  ]

  const reqProd = products.find((p) => p.id === id)
  res.json(reqProd);
})