import { v4 as uuidv4 } from 'uuid';

// In-memory storage (for demo purposes; replace with a database in production)
let comments = [];

export default function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(comments);
      break;
    case 'POST':
      const { productId, userName, rating, comment } = req.body;
      const newComment = {
        id: uuidv4(),
        productId,
        userName,
        rating,
        comment,
        createdAt: new Date().toISOString(),
      };
      comments.push(newComment);
      res.status(201).json(newComment);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
