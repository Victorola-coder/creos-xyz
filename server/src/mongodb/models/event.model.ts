import mongoose from 'mongoose';
import { appConfig } from '../../utils/constants';

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 2000 },
    slug: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    locationType: { type: String, required: true, enum: appConfig.LOCATION_TYPES, },
    shortDescription: { type: String, required: true },
    currency: { type: String, required: true, default: 'NGN' },
    image: { type: String, required: false },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},
{
    timestamps: true,
    toJSON: {
        transform: (_, rec) => {
            const { __v, _id, ...object } = rec;
            object.id = _id;
            return object;
        }
    }
});



eventSchema.pre('save', async function (next) {
    const event = this;

    try {
        event.slug = event.name.split(' ').join('-')
        next();
    } catch (error: any) {
        return next(error);
    }
});

const Event = mongoose.models.Event || mongoose.model('Event', eventSchema);

export default Event;
