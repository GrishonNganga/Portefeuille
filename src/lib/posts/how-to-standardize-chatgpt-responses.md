---
title: "How to standardize ChatGPT responses with functions"
description: "Are you using chatgpt completions api and struggling to get in a structured format? In this article, I take you through how you can reliably get structured data back from your chatgpt models."
author: {
  name: "Grishon Ng'ang'a",
  picture: "https://avatars.githubusercontent.com/u/52824774?v=4"
} 

date: "2024-04-20 08:00:00"
excerpt: "Are you using chatgpt completions api and struggling to get in a structured format? In this article, I take you through how you can reliably get structured data back from your chatgpt models."
ogImage: {
    url: "/public/blog/standardize-gpt.svg"
}
coverImage: "https://scrapfly.io/blog/content/images/finding-hidden-web-data-with-chatgpt_banner.svg"
preview: true

---

> TLDR: Include functions argument to chatgpt completions api and assistants api calls to reliably get structured data back from your model [Read more](https://platform.openai.com/docs/guides/function-calling)

## Intro

In the ever-evolving landscape of AI powered interactions, it has become very common to integrate ChatGPT into everyday applications. Recently, I was building a fun little project [Affirmations](https://grish.xyz/affirmations "Affirmations"), and was using ChatGPT Completions APIs to generate a prompt based on a users preferences that I would then send to ChatGPT to generate inspirational quotes for that user. 

## Problem

The issue with doing all that programmatically is that, ChatGPT responses are indeterministic. Meaning, running the same prompt twice would give you wildly different responses. That’s not good when your output from one prompt would be used as input in another prompt. I found it very difficult to make it act predictably, no matter how many times I tweaked or transformed my prompts. For example.

```
Generate for me a chatgpt prompt that I can send to chatgpt that will generate inspirational quotes for Grishon, a software engineer based in Nairobi who loves being outdoors running and hiking and doing dumb shit, but also is inspired by wildly different guys like Steve Jobs and Pieter Levels, in JSON format with the structure: {"quotes": [{"quote": "The quote", "author": "The author"}]}. The response for the prompt should be in JSON in the format {"prompt": "The prompt"}. 
```

This prompt gives me the following response.

```json
{
"prompt": "Generate inspirational quotes for Grishon, a software engineer based in Nairobi who loves being outdoors running and hiking and doing dumb shit, but also is inspired by wildly different guys like Steve Jobs and Pieter Levels."
}
```

That’s great, we now have the prompt that we can use to make another call to generate the quotes. First of all, chatgpt totally ignored the JSON format I want the prompt to be returned in.

Running the prompt exactly as is generates this:

```markdown
1. "Just as every line of code shapes a program, every step you take on the trail shapes your journey. Embrace the challenge and conquer the unknown, for that's where greatness awaits." - Grishon
2. "In the wilderness of technology, dare to be the trailblazer. Let your code carve new paths, just as your feet carve trails on the mountain. Innovate fearlessly." - Grishon
3. "Like the rugged terrain of a mountain path, the journey of software engineering is filled with twists, turns, and unexpected obstacles. Embrace each challenge as an opportunity to grow stronger and reach new heights." - Grishon
4. "Steve Jobs didn't just create products; he crafted experiences. As a software engineer, strive not just to write code, but to create experiences that leave a lasting impact on users' lives." - Grishon
5. "Pieter Levels showed us that the digital nomad life isn't just a dream – it's a reality waiting to be lived. Similarly, in the realm of software engineering, dare to defy conventions and explore uncharted territories. Adventure awaits those who dare to dream." - Grishon
6. "Just as the beauty of nature lies in its diversity, so too does the beauty of software lie in its versatility. Embrace different perspectives, methodologies, and technologies to create something truly remarkable." - Grishon
7. "Remember, even the longest journey begins with a single step. Whether it's a marathon or a coding project, consistency and determination will carry you through to the finish line." - Grishon
8. "As a software engineer, your code is your canvas, and the possibilities are endless. Just as an artist pours their soul into their masterpiece, pour your passion into your code, and watch as your creations come to life." - Grishon
9. "Don't be afraid to take the road less traveled. Sometimes, the most unconventional paths lead to the most breathtaking views – both in nature and in code." - Grishon
10. "In the wilderness of technology, be the fearless explorer. Embrace the unknown, challenge the status quo, and forge your own path to greatness." - Grishon
```

This is definitely not what I want.

You’ll spend the whole day ( I know I did 😢 ) tweaking the prompts trying to get a consistent response. But when you consider that most of the prompts will be user generated, it’s almost impossible to quality control things when you want to do things like:

1. Keep a record of the prompt that was generated for the user.
2. Store the quotes generated for a user so that you can send them at a later time.

## Solution

So how do you solve this, and make the response more predictable?

Turns out, there is a parameter you can include in your api call to the chat completions api that will try coerce chatgpt to generate its response in a specified format.

Here is how it would look like:

```jsx
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], 

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
    
  });
}
```

This is your standard api call to chatgpt’s completions api.

Your would include functions argument that describes how you expect your data to be returned.

```jsx
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], 

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
    
    //Include functions.
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
  });
}
```

Let us describe the important parts of what we are looking at:

1. You provide functions as an array of function objects.
2. name: The name of the function. Note that it is required.
3. parameters: Here is where you define the structure of data you expect as output. In my case: I expect an object with the properties: prompt that should be a string.

That is pretty much it, the response returned will adhere to that structure.

In my issue raised earlier, here is how my api call looks:

```jsx
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], 

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
    
    //Include functions.
    functions: [{
                type: "function",
                name: "generateUserMessages",
                description: "Generate a users inspirational quotes, based on the prompt provided",
                parameters: {
                    type: "object",
                    properties: {
                        quotes: {
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
  });
}
```

States that I expect my response as an object with the properties quotes that is an array with the items in the structure: objects with quote and author properties. 

Essentially:

```json
{
   "quotes":[
      {
         "quote":"Some quote",
         "author":"Author of quote"
      },
      {
         "quote":"Another quote",
         "author":"Author of other quote"
      }
   ]
}
```

In terms of Tokens usage of functions, they count against the model's context limit and are billed as input tokenes. Rule of thumb is to limiting the number of functions or length of documentation you provide for function parameters.

As of gpt-3.5-turbo-0125 and newer models, they have been trained to detect when a function should be called and the JSON structure to adhere to based on the function signature.

There is alot more you can do with functions on the chat completions api as well as the assistants api. but that’s a discussion for another time.

## Conclusion

You can reliably get structured data back from your model by including the functions argument to the chat completions api or assistants api that defines the function’s signature the data should be returned as.

Here are some resources you can read more on the topic:

[Open AI Function calling docs](https://platform.openai.com/docs/guides/function-calling)

[Open AI Function calling deep dive](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models )

Thanks for reading, until next time, 

Kwaheri.