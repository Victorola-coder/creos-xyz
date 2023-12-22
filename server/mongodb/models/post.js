import mongoose from 'mongoose';

const Post = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  body: { type: String, required: true },
  image: { type: String, required: false },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }
}, {
  toJSON: {
    transform: (doc, rec) => {
      const { __v, _id, ...object } = rec;
      object.id = _id;
      return object;
    }
  }
});

Post.pre('save', async function (next) {
  const post = this;

  try {
    post.slug = post.title.split().join("-")
    next();
  } catch (error) {
    return next(error);
  }
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema;