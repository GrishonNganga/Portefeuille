import { ObjectId } from "mongoose"

export type User = {
    _id?: ObjectId;
    firstname: string;
    lastname: string,
    email: string,
    phone: string,
    bio: string,
    vibe: string[];
    inspiration: string;
    prompt: string;
    timezone: string
}

export type Message = {
    _id?: ObjectId;
    quote: string;
    author: string;
    rating: number;
    user?: ObjectId;
}

export type Card = {
    src: string,
    gradients: string[],
    title: string,
    url: string
}

export type Author = {
    name: string;
    picture: string;
};

export type Post = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: Author;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};