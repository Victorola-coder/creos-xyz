import mongoose from 'mongoose';

const LinkedInConnection = new mongoose.Schema({
  url: {
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

const LinkedInConnectionSchema = mongoose.model('LinkedInConnection', LinkedInConnection);

export default LinkedInConnectionSchema;