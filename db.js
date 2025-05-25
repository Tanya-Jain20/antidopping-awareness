import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String
});

export const userModel = mongoose.model('User', userSchema);
