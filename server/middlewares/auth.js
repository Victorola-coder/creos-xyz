
import jwt from 'jsonwebtoken';
import { User } from '../mongodb/models/index.js';
import { config } from '../utils/constants.js';

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    // const token = req?.cookies?.token?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: config.ERROR_MESSAGES.AuthenticationError });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(decodedToken.userId);
        if (!user) {
            return res.status(404).json({ message: config.ERROR_MESSAGES.AuthenticationError });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: config.ERROR_MESSAGES.AuthenticationError });
    }
};

export default authenticate;