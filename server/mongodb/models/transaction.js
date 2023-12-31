import mongoose from 'mongoose';

const Transaction = new mongoose.Schema({
  status: { type: String, required: true },
  paid_at: { type: Date, required: false },
  amount: { type: Number, required: true },
  reference: { type: String, required: true },
  external_id: { type: String, required: false },
  description: { type: String, required: true, enum: ['MEMBERSHIP_FEE'] },
  entity: { type: String, required: true, enum: ['MEMBER'] },
  entity_id: { type: String, required: true }
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