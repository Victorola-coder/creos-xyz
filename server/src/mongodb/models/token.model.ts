import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'user',
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 3600,
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

const Token = mongoose.model('Token', tokenSchema);

export default Token