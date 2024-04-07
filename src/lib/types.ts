export type ICard = {
    src: string,
    gradients: string[],
    title: string,
    url: string
}

export type IAuthor = {
    name: string;
    picture: string;
};

export type IPost = {
    slug: string;
    title: string;
    date: string;
    coverImage: string;
    author: IAuthor;
    excerpt: string;
    ogImage: {
        url: string;
    };
    content: string;
    preview?: boolean;
};