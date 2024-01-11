const fs = require('node:fs');
const showdown = require('showdown');
const matter = require('gray-matter');
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
        generateBlogHtmlPage(parsedMarkdown.content, parsedMarkdown.data.slug)
    })
    return parsedBlogs
}
const loadBlogs = () => {
    const parsedBlogs = parseBlogs()
    fs.writeFileSync(blogsDirectory + "blogs.js", "export const blogs = " + JSON.stringify(parsedBlogs, 'utf-8'))
}

const generateBlogHtmlPage = async (htmlContent, fileName) => {
    const converter = new showdown.Converter()

    const html = converter.makeHtml(htmlContent)
    console.log("HTML", html)
    const path = await import("path").then(m => m.default) // won't be bundled
    const distDirectory = path.resolve("dist")
    console.log("Dist Dir", distDirectory)
    fs.writeFile(distDirectory + fileName + ".html", html, err => {
        if (err) {
            console.error(err);
        }
    });
}

loadBlogs()