import mongoose from 'mongoose';
import { config } from '../../utils/constants.js';

const Waiter = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  product: {
    type: String,
    enum: config.PRODUCT_OPTIONS,
  }
}, {
  toJSON: {
    transform: (doc, rec) => {
      const { __v, _id, ...object } = rec;
      return object;
    }
  }
});

const WaiterSchema = mongoose.model('Waiter', Waiter);

export default WaiterSchema;