'use server'

import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import dbConnect from "../database/mongodb"
import { createUser, findUsers, updateUser } from "../database/user"
import { Message, User } from "../types"
// import { openai } from "../utils";
import JSON5 from 'json5'
import { createMessages } from "../database/message"
import OpenAI from "openai"

export const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    // dangerouslyAllowBrowser: true
});

export const createUserAction = async (data: User) => {
    const conn = await dbConnect()
    let isSuccess
    let isError
    let error
    let createdUser
    try {
        createdUser = await createUser(data)
        if (!createUser) {
            isError = true
            error = { message: "Something wrong happened" }
        } else {
            isSuccess = true
        }
        return JSON.parse(JSON.stringify({ isSuccess, isError, error, data: createdUser }))
    } catch (e) {
        isError = true
        if (e.code === 11000) {
            const field = Object.keys(e.keyPattern)[0]
            error = { message: `User with ${field} already exist` }
        } else {
            error = { mesage: (e as Error).message as string }
        }
        return JSON.parse(JSON.stringify({ isSuccess, isError, error, data: createdUser }))
    }
}

export async function chatCompletion(content: ChatCompletionMessageParam[], options: Object) {
    return await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: content,
        stream: false,
        ...options
    })
        .then((response) => response)
        .catch((error) => {
            console.log(error)
            return error.response;
        });
}

export const generatePromptForUser = async (user: User) => {
    const response = await chatCompletion([{ role: 'user', content: generateContent(user!) }], {
        functions: [{
            type: "function",
            name: "generateUserPrompt",
            description: "Generate a users prompt that will be used to prompt chatgpt to generate inspirational quotes.",
            parameters: {
                type: "object",
                properties: {
                    prompt: {
                        type: "string",
                        description: "The generated prompt",
                    },
                },
                required: ["prompt"],
            },
        }]
    })
    try {
        const jsonObject = JSON5.parse(response.choices[0].message.function_call.arguments);
        const prompt = jsonObject?.prompt || undefined
        // await updateUser(user._id!, { prompt })
    } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log('String that caused the error:', response.choices[0].message.content);
    }
}

const generateContent = (user: User): string => {
    return `Generate for me ChatGPT prompt message that I can send to ChatGPT that will write for me personalized inspirational quotes to get me going everyday. Here is a little bit about myself, my name is ${user.firstname}, ${user.bio}. I am inspired by, ${user.inspiration} and would like the inspiration to have a ${user.vibe.toString()} vibe.`
}