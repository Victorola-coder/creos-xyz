
import jwt from 'jsonwebtoken';

// Middleware to generate access tokens
export const generateAccessToken = (user) => {
    return jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1 hour' });
};

// Middleware to generate refresh tokens
export const generateRefreshToken = (user) => {
    return jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1 day' });
};
