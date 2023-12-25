import mongoose from 'mongoose';

const Address = new mongoose.Schema({
  address: {
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

const AddressSchema = mongoose.model('Address', Address);

export default AddressSchema;