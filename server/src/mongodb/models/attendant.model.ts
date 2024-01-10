import mongoose from 'mongoose';

const attendantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    linkedInProfile: { type: String, required: true },
    email: { type: String, required: false },
    txn: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Transaction',
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Event',
    },
});

const Attendant = mongoose.models.Attendant || mongoose.model('Attendant', attendantSchema);

export default Attendant;
