import mongoose from 'mongoose';
import { appConfig } from '../../utils/constants';

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
    enum: appConfig.PRODUCT_OPTIONS,
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