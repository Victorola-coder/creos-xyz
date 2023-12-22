import { Router } from 'express';
import authenticate from '../middlewares/auth.js';
import { Post } from '../mongodb/models/index.js';

const router = Router();

router.post('/', authenticate, async (req, res, next) => {
    const { title, body, image } = req.body;
    const author = req.user.id
    try {
        const slug = title.split(" ").join("-")
        const post = new Post({ title, slug, body, image, author });
        const data = await post.save();
        // const data = { ...req.body, slug, id: post._id }
        res.json({ message: 'Post successfully created', data });
    } catch (error) {
        next(error);
    }
});

router.put('/:id', authenticate, async (req, res) => {
    const { title, body, image } = req.body;
    const { id } = req.params
    try {
        const slug = title.split(" ").join("-")
        // const post = await Post.findByIdAndUpdate(id, { title, slug, body, image, author }, )
        const post = await Post.findById(id)
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the author' })
        }

        post.title = req.body.title || post.title;
        post.slug = req.body.slug || post.slug;
        post.body = req.body.body || post.body;
        post.image = req.body.image || post.image;

        const data = await post.save();
        res.json({ message: 'Post successfully updated', data });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
});


router.delete('/:id', authenticate, async (req, res) => {
    const { id } = req.params

    try {
        const post = await Post.findById(id)
        if (post.author.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not the author' })
        }
        const deleted = post.deleteOne()
        if (deleted) {
            res.json({ message: "Post was deleted successfully!" });
        }
    } catch (error) {
        next(error);
    }
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({}).populate('author')
        res.json({ data: posts });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
});


router.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const post = await Post.findById(id).populate('author')
        res.json({ data: post });
    } catch (error) {
        res.json({ error: JSON.stringify(error) })
    }
});

export default router;