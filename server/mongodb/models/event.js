import mongoose from 'mongoose';

const Event = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  shortDescription: { type: String, required: true },
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

Event.pre('save', async function (next) {
  const event = this;

  try {
    event.slug = event.title.split().join("-")
    next();
  } catch (error) {
    return next(error);
  }
});

const EventSchema = mongoose.model('Event', Event);

export default EventSchema;