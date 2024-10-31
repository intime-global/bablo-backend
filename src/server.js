import express from 'express';

export function startServer() {
  const app = express();
  app.use(express.json());
  app.get('*', (req, res) => {
    res.json({
      status: 200,
      message: 'Hello, world!',
    });
  });

  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
