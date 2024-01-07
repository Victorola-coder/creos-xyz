import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    meetingLink: { type: String, required: false },
    location: { type: String, required: true, enum: ['Online Event', 'In Person'], },
    shortDescription: { type: String, required: true },
    image: { type: String, required: false },
    eventDate: { type: Date, required: true },
    eventTime: { type: Date, required: false },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
