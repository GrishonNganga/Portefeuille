import { blogs } from "../pages/blogs/blogs"
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
