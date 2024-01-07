
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../mongodb/models';
import { appConfig } from '../utils/constants';

const authenticate: RequestHandler = async (req: any, res: any, next) => {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req?.cookies?.token?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: appConfig.ERROR_MESSAGES.AuthenticationError });
    }

    try {
        const decodedToken: any = jwt.verify(token, `${process.env.SECRET_KEY}`);
        const user = await User.findById(decodedToken?.userId);
        if (!user) {
            return res.status(404).json({ message: appConfig.ERROR_MESSAGES.AuthenticationError });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: appConfig.ERROR_MESSAGES.AuthenticationError });
    }
};

export default authenticate;