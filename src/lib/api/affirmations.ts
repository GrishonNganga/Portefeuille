
export const generateWeeklyAffirmations = async () => {
    // await dbConnect()
    // const users = await findUsers({ prompt: { $exists: true } })
    // users.map(async user => {
    //     if (user.prompt) {
    //         const response = await chatCompletion([{ role: 'user', content: user.prompt }], {
    //             functions: [{
    //                 type: "function",
    //                 name: "generateUserMessages",
    //                 description: "Generate a users inspirational quotes, based on the prompt provided",
    //                 parameters: {
    //                     type: "object",
    //                     properties: {
    //                         messages: {
    //                             type: "array",
    //                             description: "The array of inspirational quotes",
    //                             items: {
    //                                 type: "object",
    //                                 properties: {
    //                                     quote: {
    //                                         type: "string",
    //                                         description: "A specific quote generated for a user."
    //                                     },
    //                                     author: {
    //                                         type: "string",
    //                                         description: "Author of the specific quote generated"
    //                                     }
    //                                 }
    //                             }
    //                         },
    //                     },
    //                     required: ["messages"],
    //                 },
    //             }]
    //         })
    //         try {
    //             const jsonObject = JSON.parse(response.choices[0].message.function_call.arguments);
    //             const messages = jsonObject?.messages || undefined
    //             const messagesForUser = messages.map((message: Message) => ({ ...message, user: user._id }))
    //             await createMessages(messagesForUser)
    //             await updateUser(user._id, { affirmationsLastUpdated: new Date() })
    //         } catch (error) {
    //             console.log('Some problem', error);
    //         }
    //     }
    // })
    console.log("CRON Triggered")
}