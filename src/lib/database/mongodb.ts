// lib/dbConnect.js
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

declare global {
    namespace globalThis {
        var mongoose: any
    }
}


async function dbConnect() {
    let cached = global.mongoose;
    if (!cached) {
        cached = global.mongoose = { conn: null, promise: null };
    }
    // mongoose.disconnect()
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        console.log('err conn to mongo', e)
        throw e
    }
    return cached.conn;
}


export default dbConnect;