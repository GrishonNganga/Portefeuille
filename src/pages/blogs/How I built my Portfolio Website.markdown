---
title: How I built my Portfolio Website
description: How I built my Portfolio Website without any libraries(kinda...)
author: Grishon Ng'ang'a
datePublished: "2024-01-22 03:30:00"
slug: how-i-built-my-portfolio-website
thumbnail: https://res.cloudinary.com/dpgvyyzhe/image/upload/v1705883712/tekepm2kds9v7d6ntsle.png
tags: ["portfolio"]
---
# 1. How I made my Portfolio Website

## TLDR:

> Built with HTML CSS JS TailwindCSS HighwayJS
> 

## **Introduction**

As software Engineers, we need a way to showcase our work. That’s the easiest way to communicate our value. I have been slacking on this, with my [portfolio site](https://grishonnganga.github.io/Portfolio/) last updated sometime around 2020. I have grown so much since then, and a needed a revamp. I wanted to make it akin to myself. To represent who I am in real life. To give you the viewer a picture of who I am before we get a chance to interact. 

My only reservations were:

- No using a template. Would lack originality and look very similar to every other random engineer’s out there.
- I didn’t want the site to follow your usual portfolio structure of a header section, CTA section, About Me Section, Skills Section, Projects and Contact me.

### **Inspiration**

In doing my research, I heavily borrowed from a company I truly love, [Paystack](https://paystack.com/ke/?q=/). They built [Paystack Music](https://paystack.com/music/), a way to share and discover music within the company.

### **Planning**

Having an idea of the direction I wanted to follow, I made a rough sketch of what I wanted the landing page to look like, a bit of imagination in my head of how the interactions would like, and everything else I would wing myself through.

![hibt.jpg](https://res.cloudinary.com/dpgvyyzhe/image/upload/v1705883183/g8avgbezph1dcdki5kaz.jpg)

## **Bugs to Breakthroughs**

I could have built the site with any technologies, so how would I go about picking the right tools for this job? As engineers we are prone to over-engineering everything. A simple portfolio project like this certainly doesn’t require NextJs or some fancy new JS framework that was released last week. Here were my subtle requirements I had mentally.

1. Has to be very simple, no frameworks!
2. Little to no libraries. (Bloating my site making it slow)
3. No 3rd party for blog.

Here are the tools I ended up settling on:

- HTML5
- CSS3
- Javascript
- TailwindCSS
- [Highway](https://highway.js.org/)
- Markdown for blog

Of course html, css and js because I was building a website. TailwindCSS because I find it easier using tailwind’s utilities than writing actual css. Highway for handling navigation across different pages. Makes your site act like a Single Page Application, (SPA), also with the ability to write animations to go in hand with the navigation. 

I have always wanted to get better at creating visually appealing animations on the web, so I definitely took this as an opportunity to learn. I used CSS animations as I didn’t want to use a library that would do the heavy lifting for me and in turn a bloated library that I only use one or two animations from.

I enjoy writing markdown files. I knew if I going to have a blog on my site, I would want to write my blog entries as Markdown. Put them in a specific folder and have them automatically published. How? I wasn’t sure when I made this decision. Lol. *(Ended up being a pain making it work)*

**Setbacks:**

- 1. Highway:
    
    It’s a pretty simple and straightforward library to use.
    
    You would have to specify `data-router-view` and `data-router-wrapper` in your html markups. Like so.
    
    ```html
    <!-- File: index.html -->
    <!-- [...] -->
    <body>
      <!-- [...] -->
      <main data-router-wrapper>
        <article data-router-view="name">
          <!-- [...] -->
        </article>
      </main>
      <!-- [...] -->
    </body>
    ```
    
    Highway looks inside data-router-wrapper for a data-router-view element. It requires the data-router-view to be the only child of the data-router-wrapper element. 
    
    Navigating to other pages that have the same structure, highway would then swap out the data-router-view with the view defined in the said page.
    
    Typically, you’d have your styles and js files linked at the bottom of your page right after your `body` tag. 
    
    The issue with this is, when you navigate to another page, it swaps out your data-router-vew, but the styles and js linked are not part of the view swapped out, or the view swapped in. You either have to:
    
    - Load in all the CSS and JS in the initial html file loaded first. So that, when the view is swapped, the new view can still utilize the linked files.
    - Use Renderers for css or js associated to specific views. (We’ll come back to this)
    
    Let’s go through the first option and why it is not viable.
    
    If you have `index.html` and `about.html` pages as follows:
    
    1. Manually load in all the CSS and JS.
    
    ```html
    <!-- File: index.html -->
    <!-- [...] -->
    <body>
      <!-- [...] -->
      <main data-router-wrapper>
        <article data-router-view="index-page">
          <a href="/about.html">About</a>
        </article>
      </main>
      
    </body>
    <script type="module" src="link/to/index.js"></script>
    ```
    
    ```html
    <!-- File: about.html -->
    <!-- [...] -->
    <body>
      <!-- [...] -->
      <main data-router-wrapper>
        <article data-router-view="about-page">
          <a href="/index.html">Home</a>
        </article>
      </main>
    </body>
    <script type="module" src="link/to/about.js"></script>
    ```
    
    Note that each individual html page has a link to its js file.
    
     If you are on index.html page on your browser, then click the link to the about page, the view with the name `index-page` would get swapped out with the view `about-page`
    
    The issue with this is that `about.js` file that is required in `about.html` would not be loaded. Which we are saying can be solved by including the `about.js` file in `index.html` file so that when the view is swapped out, `about.js` will still be available in `index.html`
    
    That works. But what if you open `about.html` file first, then click the link to `index.html`? The same issue will reoccur. The view will get swapped out, but `index.js` that is required in `index.html` isn’t present.
    
    Duplicating the same js files in about.html sounds so wrong and will quickly become unmanageable. Certainly there must be a better way.
    
    Yes there is: Using Renders.
    
    1. Renderers
    
    They basically encapsulate js or css related to a single page. When initializing Highway, you can specify different renderers for the different pages you have. So for the example above, you would specify a renderer for the index.html page that would contain the js in index.js and a renderer for about.html containing the js in about.js
    
    Like so:
    
    ```jsx
    import Highway from '@dogstudio/highway';
    
    export class IndexRenderer extends Highway.Renderer {
      // Hooks/methods
      onEnter() { 
            //All the js in index.js would go here.
     }
    
      onLeave() { [...] }
      onEnterCompleted() { [...] }
      onLeaveCompleted() { [...] }
    }
    
    export class AboutRenderer extends Highway.Renderer {
      // Hooks/methods
      onEnter() { 
            //All the js in about.js would go here.
     }
    
      onLeave() { [...] }
      onEnterCompleted() { [...] }
      onLeaveCompleted() { [...] }
    }
    ```
    
    Then you can link a `main.js` file in all the html pages that would have highway’s initialisation.
    
     
    
    ```jsx
    // File: main.js
    // Import Highway
    import Highway from '@dogstudio/highway';
    
    // Import Renderers
    import {IndexRenderer, AboutRenderer } from 'path/to/custom-renderer.js';
    
    const H = new Highway.Core({
      renderers: {
        "index-page": IndexRenderer,
        "about-page": AboutRenderer,
      }
    });
    ```
    
    I have one more issue with this way of doing things. 
    
    1. Dynamically adding content to a page.
        
        ```jsx
        export async function loadBlogs() {
        
            let blogsHtml = ``
            blogs.map(blog => {
                blogsHtml +=
                    `
                <div class="flex items-center border rounded-xl bg-white shadow-md">
                                <div class="w-1/3 h-full relative flex overflow-hidden">
                                    <div class="absolute w-full">
                                        <div class="">
                                            <img src=${blog.data.thumbnail}
                                                class="rounded-full aspect-square object-cover -ml-10 -mt-8" />
                                        </div>
                                    </div>
                                </div>
                                <div class="w-2/3 flex h-full flex-col justify-center flex-wrap gap-y-5 py-5 pr-5">
                                    <a href="${blog.data.slug}.html">
                                        <div class="text-[#697480] font-dmono font-extrabold text-2xl">
                                            ${blog?.data?.title}
                                        </div>
                                    </a>
                                    <div class="text-gray-800">
                                        ${blog?.data?.description}
                                    </div>
                                    <div class="flex gap-x-2">
                                        ${blog?.data?.tags?.map(tag => {
                        return '<div class="text-[#A25D76] bg-[#ecdfe4] p-1 px-2 rounded-md border border-[#A25D76]">' + tag + '</div>'
                    }).join("")}
                                    </div>
                                </div>
                            </div>
                `
            })
        
            document.getElementById("blogs").innerHTML += blogsHtml
        }
        ```
        
        In this case, I am dynamically adding my blog entries from an array into the id element `blogs`
        
        This function is then called when the blogs.html page is opened. The custom renderer for this looks like so:
        
        ```jsx
        import Highway from '@dogstudio/highway';
        
        import { loadBlogs } from './blog';
        
        export class BlogsRenderer extends Highway.Renderer {
            onEnter() {
                loadBlogs()
            }
        }
        ```
        
        But to be honest, that’s something I can bare with.
        
- Animations:
    
    It’s mostly a skills gap. Making animations look effortless is a really time consuming task. And I didn’t want to waste too much time working on such, as I had a strict timeline for completing the project. I fully intend to improve the site’s animations as time progresses.
    
- Blogs:
    
    How on earth was I going to have a Blogs page without integrating a 3rd party provider? I only wanted to write my blogs on Notion and convert them into markdown files. How would they show up on my site effortlessly? 
    
    To be honest, I could have settled on writing my blogs on Hashnode, and used it’s headless version to consume my blogs through an API and only have to build a for displaying all the blogs and a page for a single blog entry.
    
    Buuuuuuuut! That’s not what I did. Lol.
    
    This is how I achieved to create blogs on my site:
    
    1. I write a new blog on Notion, export it as markdown file.
    2. I have a directory in my project called `/blogs` that I put in all my blog entries as markdown files. 
    3. During my site’s the build process, I run a script called `blogsParser.js` . Here are the contents the script:
        
        ```jsx
        const fs = require('node:fs');
        const showdown = require('showdown');
        const matter = require('gray-matter');
        const { parseMarkup } = require('./markup');
        const blogsDirectory = __dirname.replace("scripts", "") + "pages/blogs/"
        
        const getAllBlogs = () => {
            try {
                if (fs.existsSync(blogsDirectory)) {
                    const blogs = fs.readdirSync(blogsDirectory);
                    return blogs
                }
            } catch (err) {
                console.error(err);
            }
        }
        
        const readBlog = (fileName) => {
            const content = fs.readFileSync(blogsDirectory + fileName, 'utf8');
            return content
        }
        
        const parseBlogs = () => {
            const blogs = getAllBlogs()
            const parsedBlogs = []
            blogs.forEach(blog => {
                if (blog.split(".")[1] !== "markdown") {
                    return
                }
                const content = readBlog(blog)
                const parsedMarkdown = matter(content)
                parsedBlogs.push({ ...parsedMarkdown, id: blog })
                generateBlogHtmlPage(parsedMarkdown.content, parsedMarkdown.data)
            })
            return parsedBlogs
        }
        const loadBlogs = () => {
            const parsedBlogs = parseBlogs()
            fs.writeFileSync(blogsDirectory + "blogs.js", "export const blogs = " + JSON.stringify(parsedBlogs, 'utf-8'))
        }
        
        const generateBlogHtmlPage = async (htmlContent, data) => {
            const converter = new showdown.Converter({ghCodeBlocks: true})
            const html = converter.makeHtml(htmlContent)
        
            const htmlWithMarkup = parseMarkup(html, data)
            const path = await import("path").then(m => m.default)
            const distDirectory = path.resolve("dist")
            if (!fs.existsSync(distDirectory)) {
                fs.mkdirSync(distDirectory, { recursive: true });
            }
            fs.writeFile(distDirectory + "/" + data.slug + ".html", htmlWithMarkup, err => {
                if (err) {
                    console.error(err);
                }
            });
        }
        
        loadBlogs()
        ```
        
        I’ll spare you the hassle of going through all that. Lol!
        
        - Looks through the blogs directory and gets all my blog markdown files.
        - Uses [gray-matter](https://github.com/jonschlinkert/gray-matter) to parse the markdown blogs, getting details about the blog entries, eg the name of the article, description thumbnail etc.
        - Parses all the articles formatted by gray-matter into an array of all the blogs. (This array of articles is what is used in the listed blogs.html page)
        - Uses [showdown](https://showdownjs.com/) to convert each individual parsed blog entry into a html page with the same name.
        
        ![overengineering.webp](https://res.cloudinary.com/dpgvyyzhe/image/upload/v1705883181/psfftn2cky5aumbgsbxt.webp)
        
        I know what you are probably wondering, why on earth would you go through all this. There’s already solutions for this, why are you reinventing the wheel. Lol. 
        
        I didn’t think it would get this complicated. Seems we always get a way to complicate things, don’t we? 
        
- Time Constraints
    
    I had only allocated 2 weeks to get this project completed. If I was set on making everything perfect, I would have never completed the project. At least v1. 
    
    Eventually I spent about 3 weeks on the project. It’s very far from perfect, I am well aware. 
    

## Conclusion

> ***My theme for 2024 is simple. Launch those shitty v1s.***
> 

As engineers we are hellbent on perfection which leads us to never launching the things we are working on. That needs to change. Launch that shitty v1. Make incremental improvements. It’ll never be perfect in your eyes. So launch it anyways. 

This… this is my first shitty v1 of the year. There are many more on the way.

See you soon.

Grish
