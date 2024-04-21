import { ChatCompletionMessageParam } from "openai/resources/index.mjs"
import { createMessages, findMessages } from "../database/message"
import dbConnect from "../database/mongodb"
import { findUsers, updateUser } from "../database/user"
import { Message } from "../types"
import OpenAI from "openai"
import { Resend } from 'resend';
import Email from "@/app/components/emails/email"

export const generateWeeklyAffirmations = async () => {
    await dbConnect()
    const users = await findUsers({ prompt: { $exists: true } })
    console.log("USers count", users.length)
    const user = users[0]
    if (user.prompt) {
        const response = await chatCompletion([{ role: 'user', content: user.prompt }], {
            functions: [{
                type: "function",
                name: "generateUserMessages",
                description: "Generate a users inspirational quotes, based on the prompt provided",
                parameters: {
                    type: "object",
                    properties: {
                        messages: {
                            type: "array",
                            description: "The array of inspirational quotes",
                            items: {
                                type: "object",
                                properties: {
                                    quote: {
                                        type: "string",
                                        description: "A specific quote generated for a user."
                                    },
                                    author: {
                                        type: "string",
                                        description: "Author of the specific quote generated"
                                    }
                                }
                            }
                        },
                    },
                    required: ["messages"],
                },
            }]
        })
        try {
            const jsonObject = JSON.parse(response.choices[0].message.function_call.arguments);
            const messages = jsonObject?.messages || undefined
            const messagesForUser = messages.map((message: Message) => ({ ...message, user: user._id }))
            await createMessages(messagesForUser)
            await updateUser(user._id, { affirmationsLastUpdated: new Date() })
        } catch (error) {
            console.log('Some problem', error);
        }
    }

    console.log("CRON Triggered")
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    // dangerouslyAllowBrowser: true
});

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


export const sendAffirmations = async () => {
    await dbConnect()
    const messagesPerUser = await findMessages(
        [
            {
                $match:
                {
                    sent: { $exists: false }
                }
            },
            {
                $group:
                    { _id: '$author', messages: { $push: "$$ROOT" } }
            }
        ],
        { aggregate: true }
    )
    const data = await resend.emails.send({
        from: "support@grish.xyz",
        to: "grishon.nganga01@gmail.com",
        subject: "Welcome to Affirmations",
        react: Email({ url: "https://grish.xyz", content: "Welcome home" }),
    });


}


