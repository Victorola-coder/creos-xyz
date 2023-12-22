import { Router } from 'express';
import authenticate from '../middlewares/auth.js';
import { Post, User } from '../mongodb/models/index.js';

const router = Router();

router.get('/profile', authenticate, async (req, res) => {
    // res.json({ message: `Welcome ${req.user.username}` });
    try {
        const user = await User.findById(req.user.id)
        const posts = await Post.find({ userId: req.user.id })
        res.json({ data: { user, posts }, });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
});


router.put('/profile', authenticate, async (req, res) => {
    // res.json({ message: `Welcome ${req.user.username}` });
    try {
        const {
            name:fullname,
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
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 })
        res.json({ message: users });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
});

export default router;