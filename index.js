import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { userRouter } from './routes/user.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(userRouter);

mongoose.connect('mongodb+srv://jainadinath20:PX0ep6BRWoPgvZpa@cluster0.fry1vb2.mongodb.net/antidopping', {
 
}).then(() => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}).catch(err => console.error("MongoDB connection error:", err));
