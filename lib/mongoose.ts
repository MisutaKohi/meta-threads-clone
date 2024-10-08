import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); // prevents unknown field queries

  if (!process.env.MONGODB_URL) return console.log('');
  if (isConnected) return console.log('');

  try {
    await mongoose.connect(process.env.MONGODB_URL);

    isConnected = true;

    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}