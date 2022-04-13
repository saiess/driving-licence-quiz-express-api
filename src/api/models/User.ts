import mongoose from 'mongoose';
import '../../database';

export interface UserInput {
    firstname: string;
    lastname: string;
    score: string;
}

export interface UserDocument extends UserInput, mongoose.Document {
    createdAt: Date;
    updatedAt: Date;
}

export const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
        },
        lastname:{
                type: String,
                required: true,
            },
        score: {
            type: String,
            required: true,
            default: 0,
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;