import { User } from '@/lib/types';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true },
    bio: { type: String },
    inspiration: { type: String },
    prompt: { type: String },
    vibe: [{ type: String }],
    timezone: { type: String },
    affirmationsLastUpdated: {
        type: Date,
    }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<User>('User', userSchema);