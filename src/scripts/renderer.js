import Highway from '@dogstudio/highway';

import { loadBlogs } from './blog';

export class BlogsRenderer extends Highway.Renderer {
    onEnter() {
        console.log('In here')
        loadBlogs()
    }
}
