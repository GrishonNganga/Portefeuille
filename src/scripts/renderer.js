import Highway from '@dogstudio/highway';

import { loadBlogs } from './blog';

export class BlogsRenderer extends Highway.Renderer {
    onEnter() {
        loadBlogs()
    }
}

export class BlogRenderer extends Highway.Renderer {
    onEnter() {
        console.log("Trigg")
        const styleElement = document.createElement('style');

        // Define your CSS rules
        const cssRules = `
                page {
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
          `;

        // Set the CSS rules in the style element
        styleElement.innerHTML = cssRules;

        // Append the style element to the document's head
        document.head.appendChild(styleElement);
    }
}

export class MainPageRenderer extends Highway.Renderer {
    onEnter() {


    }
}

