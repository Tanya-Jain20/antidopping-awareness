import { Router } from 'express';
import { userModel } from '../db.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const userRouter = Router();
const JWT_SECRET = 'manchurian';

// Signup
userRouter.post('/signup', async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
      email,
      password: hashedPassword,
      firstName: firstname,
      lastName: lastname,
    });
    res.json({ message: "Signed up successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Signup failed" });
  }
});

// Signin
userRouter.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id }, JWT_SECRET);
      res.json({ token }); // Used internally but not shown to frontend now
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Signin error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
