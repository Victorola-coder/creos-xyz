import { Schema, model } from 'mongoose';
import bcrypt, { genSalt, hash, compare } from 'bcrypt';

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
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            enum: ['M', 'F']
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

// Hash the password before saving it to the database
// Member.pre('save', async function (next) {
//     const Member = this;
//     if (!Member.isModified('password')) return next();

//     try {
//         Member.password = await hash(Member.password, 10);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

// Compare the given password with the hashed password in the database
Member.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const MemberSchema = model('Member', Member);

export default MemberSchema;