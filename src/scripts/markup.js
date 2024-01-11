const parseMarkup = (htmlContent, data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Your blog description goes here">
        <meta name="keywords" content="AI, technology, lifestyle, tips">
        <meta name="author" content="Grishon Ng'ang'a">
    
        <!-- Open Graph meta tags for social media sharing -->
        <meta property="og:title" content="${data?.title}">
        <meta property="og:description" content=${data?.description}>
        <meta property="og:image" content=${data.thumbnail}>
        <meta property="og:url" content="">
        <title>${data.title}</title>
    
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
                color: #333;
            }
    
            header {
                width: 100%;
                height: 300px;
                overflow: hidden;
            }
    
            header img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                aspect-ratio: 1920 / 300;
            }
    
            main {
                flex: 1;
                padding: 8px;
                box-sizing: border-box;
            }
    
            article {
                max-width: none;
                margin: auto;
                width: 100%;
                max-width: 65%;
                box-sizing: border-box;
            }
    
            h1 {
                font-size: 2.5rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
    
            p {
                margin-bottom: 1rem;
            }
    
            .text-gray-500 {
                color: #888;
            }
    
            .dark {
                background-color: #333;
                color: #fff;
            }
    
            .dark .text-gray-500 {
                color: #aaa;
            }
    
            .tags {
                margin-top: 5rem;
            }
    
            .tag {
                display: inline-block;
                background-color: #aaa;
                color: #fff;
                padding: 0.1rem 0.5rem;
                margin-right: 0.5rem;
                border-radius: 5px;
                text-decoration: none;
            }
        </style>
    </head>
    
    <body>
        <div class="">
            <header>
                <img src=${data?.thumbnail} alt="Banner image"
                    width="1920" height="300">
            </header>
            <main>
                <article class="">
                    <h1 class="">${data?.title}</h1>
                    <p class="text-gray-500 dark:text-gray-400 mb-8">By ${data?.author}, ${data.datePublished && new Date(data.datePublished).toLocaleTimeString()}</p>
                    ${htmlContent}
                    <div class="tags">
                    ${data?.tags?.map(tag => {
        return '<a href="#" class="tag">' + tag + '</a>'
    }).join("")}
                    </div>
                </article>
            </main>
        </div>
    </body>
    
    </html>
    `
}

module.exports = {
    parseMarkup
}