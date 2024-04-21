import { Message } from '@/lib/types';
import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    quote: { type: String, required: true },
    author: { type: String },
    rating: { type: Number },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sent: {
        type: Date,
    }
}, { timestamps: true });

export default mongoose.models.Message || mongoose.model<Message>('Message', messageSchema);