import express, { json } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/post.js';
import submissionRoutes from './routes/submission.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const dbURI = process.env.MONGODB_URI
// Connect to MongoDB
connectDB(dbURI);

// Parse JSON request body
app.use(json());
app.use(cors());
// Define authentication routes
app.use('/api/v1/auth', authRoutes);

// Define user routes
app.use('/api/v1/users', userRoutes);

// Define post routes
app.use('/api/v1/posts', postRoutes);

// Define submission routes
app.use('/api/v1/submissions', submissionRoutes);

// 
app.get('/', (req, res) => res.status(200).json({ message: "Welcome to Creos Lab" }));


// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}, https://localhost:${PORT}`);
});