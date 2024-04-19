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
