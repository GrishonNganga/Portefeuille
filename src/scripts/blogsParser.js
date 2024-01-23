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


