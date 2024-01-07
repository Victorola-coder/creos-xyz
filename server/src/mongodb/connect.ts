import mongoose from 'mongoose';

const connectDB = (url: string) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('[db]: Connected to MongoDB'))
    .catch((err) => {
      console.error('[db]: Failed to connect to MongoDB');
      console.error(err);
    });
};

export default connectDB;

// const mongoose = require('mongoose');
// require('dotenv').config();

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//       useFindAndModify: false
//     });
//     console.log('Connected to MongoDB');
//   } catch (error) {
//     console.log('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = connectDB;