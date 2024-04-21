import { ObjectId } from "mongoose";
import MessageModel from "./models/Message";
import { Message } from "../types";

export const createMessage = async (data: Message) => {
    const message = new MessageModel(data);
    return await message.save();
}

export const createMessages = async (data: Message[]) => {
    const messages = await MessageModel.insertMany(data);
    return await messages;
}

export const findMessage = async (data: any) => {
    const user = MessageModel.findOne(data)
    return await user;
}

export async function findMessages(data: any, options: any) {
    if (options.aggregate) {
        try {
            const messages = await MessageModel.aggregate([data]);
            return messages;
        } catch (error) {
            console.log("Error finding messages:", error);
            throw error;
        }
    } else {
        try {
            const users = await MessageModel.find(data);
            return users;
        } catch (error) {
            console.log("Error finding messages:", error);
            throw error;
        }
    }
}
