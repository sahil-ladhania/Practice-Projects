import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to BookBazaar API 🚀');
});

export default app;