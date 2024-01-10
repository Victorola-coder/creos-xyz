import { Schema, model } from 'mongoose';
import { appConfig } from '../../utils/constants';

const Member = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        profession: {
            type: String,
            required: true,
        },
        headshot: {
            type: String,
            required: false,
        },
        distinction: {
            type: String,
            required: true,
        },
        linkedInUrl: {
            type: String,
            required: true,
        },
        txn: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Transaction',
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            enum: appConfig.GENDERS
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: (doc, rec) => {
                const { __v, _id, password, ...object } = rec;
                object.id = _id;
                return object;
            }
        }
    }
);

const MemberSchema = model('Member', Member);

export default MemberSchema;