import cookieParser from 'cookie-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express, { json } from 'express';
import connectDB from './mongodb/connect';
import {
    authRouter,
    eventsRouter,
    guestsRouter,
    submissionsRouter,
    transactionsRouter,
    userRouter
} from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",");


// Connect to MongoDB
connectDB(`${process.env.MONGODB_URI}`);

// Parse JSON request body
app.use(json());
app.use(cookieParser())
app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));
// Define authentication routes
app.use('/api/v1/auth', authRouter);

// Define user routes
app.use('/api/v1/users', userRouter);

// Define submission routes
app.use('/api/v1/submissions', submissionsRouter);

// Define transactions routes
app.use('/api/v1/transactions', transactionsRouter);

// Define events routes
app.use('/api/v1/events', eventsRouter)

// Define guests routes
app.use('/api/v1/guests', guestsRouter)

// 
app.get('/', (req, res) => res.status(200).json({ message: 'Welcome to Creos Lab' }));


// Start the server
app.listen(PORT, () => {
    console.log(`[server]: Server started on port ${PORT}, https://localhost:${PORT}`);
});