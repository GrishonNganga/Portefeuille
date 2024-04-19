import { ObjectId } from "mongoose";
import UserModel from "./models/User";
import { User } from "../types";

export const createUser = async (data: User) => {
    const user = new UserModel(data);
    return await user.save();
}

export const findUser = async (data: any) => {
    const user = UserModel.findOne(data)
    return await user;
}

export const findUsersByEmail = async (data: String[]) => {
    const users = UserModel.find({
        'email': {
            $in: data
        }
    })
    return await users;
}

export async function findUsers(data: Object) {
    try {
        const users = await UserModel.find(data);
        return users;
    } catch (error) {
        console.error("Error finding users:", error);
        throw error;
    }
}

export const getUser = async (_id: ObjectId) => {
    const user = UserModel.findOne({ _id })
    return await user;
}

export const updateUser = async (userId: ObjectId, data: any, options: { session?: any } = {}) => {
    const { session } = options
    try {
        const user = await UserModel.findOneAndUpdate(
            {
                _id: userId
            },
            data,
            { upsert: false, returnOriginal: false }
        )
        return user;
    } catch (e) {
        console.error("Error finding users:", e);
        throw e;
    }

}