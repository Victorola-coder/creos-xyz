
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithUser } from '../interfaces';
import { User } from '../mongodb/models';
import { appConfig } from '../utils/constants';

const authenticate = async (req: RequestWithUser, res:Response, next:NextFunction) => {
    // const token = req.headers.authorization?.split(' ')[1];
    const token = req?.cookies?.creosToken;

    if (!token) {
        return res.status(401).json({ message: appConfig.ERROR_MESSAGES.AuthenticationError });
    }

    try {
        const decodedToken: any = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`);
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