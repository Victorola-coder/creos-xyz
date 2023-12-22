import mongoose from 'mongoose';

const Subscriber = new mongoose.Schema({
  firstName: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
}, {
  toJSON: {
    transform: (doc, rec) => {
      const { __v, _id, ...object } = rec;
      return object;
    }
  }
});

const SubscriberSchema = mongoose.model('Subscriber', Subscriber);

export default SubscriberSchema;