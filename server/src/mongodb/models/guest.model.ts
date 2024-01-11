import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    linkedInUrl: { type: String, required: true },
    email: { type: String, required: false },
    txn: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Transaction',
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Event',
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
}, {
    timestamps: true,
    toJSON: {
        transform: (_, rec) => {
            const { __v, _id, ...object } = rec;
            object.id = _id;
            return object;
        }
    }
});

const Guest = mongoose.models.Guest || mongoose.model('Guest', guestSchema);

export default Guest;
