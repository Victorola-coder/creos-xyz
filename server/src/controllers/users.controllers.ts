import { RequestHandler } from 'express';
import { User } from '../mongodb/models';


export const profileController: RequestHandler = async (req: any, res: any) => {
    // res.json({ message: `Welcome ${req.user.username}` });
    try {
        const user = await User.findById(req.user.id)
        // const posts = await Post.find({ userId: req.user.id })
        res.json({ data: { user }, });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
};

export const profileUpdateController: RequestHandler = async (req: any, res: any) => {
    // res.json({ message: `Welcome ${req.user.username}` });
    try {
        const {
            name: fullname,
            username,
            avatar,
            bio,
            category
        } = req.body

        const user = await User.findById(req.user.id)
        user.username = username || user.username
        user.name = fullname || user.name
        user.avatar = avatar || user.avatar
        user.bio = bio || user.bio
        user.category = category || user.category
        user.save()
        res.json({ data: user });

    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
};

export const allUsersContoller: RequestHandler = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 })
        res.json({ message: users });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
};

