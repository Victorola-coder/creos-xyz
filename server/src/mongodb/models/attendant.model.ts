import mongoose from 'mongoose';

const attendantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profession: { type: String, required: true },
    linkedInProfile: { type: String, required: true },
    email: { type: String, required: false },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Attendant = mongoose.models.Attendant || mongoose.model('Attendant', attendantSchema);

export default Attendant;
