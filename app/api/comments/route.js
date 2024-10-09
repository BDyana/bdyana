// pages/api/comments.js
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, rating, comment } = req.body;

    if (!name || !rating || !comment) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const commentsCollection = db.collection("comments");
    await commentsCollection.insertOne({
      name,
      rating,
      comment,
      createdAt: new Date(),
    });

    client.close();

    res.status(201).json({ message: "Comment added!" });
  }

  if (req.method === "GET") {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const db = client.db();

    const commentsCollection = db.collection("comments");
    const comments = await commentsCollection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    client.close();

    res.status(200).json(comments);
  }
}
