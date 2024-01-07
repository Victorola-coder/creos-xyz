import mongoose from 'mongoose';
import { appConfig } from '../../utils/constants';

const Transaction = new mongoose.Schema({
  status: { type: String, required: true },
  paidAt: { type: Date, required: false },
  amount: { type: Number, required: true },
  reference: { type: String, required: true },
  apiId: { type: String, required: false },
  description: { type: String, required: true, enum: appConfig.TRANSACTION_DESC_TYPES },
  txnType: { type: String, required: true, enum: appConfig.TRANSACTION_TYPES },
  source: { type: String, required: false },
  destination: { type: String, required: false },
}, {
  toJSON: {
    transform: (_, rec) => {
      const { __v, _id, ...object } = rec;
      return object;
    }
  }
});

const TransactionSchema = mongoose.model('Transaction', Transaction);

export default TransactionSchema;