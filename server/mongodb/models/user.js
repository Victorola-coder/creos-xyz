import { Schema, model } from 'mongoose';
import bcrypt, { genSalt, hash, compare } from 'bcrypt';

const User = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        profession: {
            type: String,
            required: true,
        },
        avatar: {
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
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
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
// User.pre('save', async function (next) {
//     const user = this;
//     if (!user.isModified('password')) return next();

//     try {
//         user.password = await hash(user.password, 10);
//         next();
//     } catch (error) {
//         return next(error);
//     }
// });

// Compare the given password with the hashed password in the database
User.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password)
};

const UserSchema = model('User', User);

export default UserSchema;