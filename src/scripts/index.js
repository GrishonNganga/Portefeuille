// HighwayJS
import Highway from '@dogstudio/highway';

//My Custom Transitions
import CustomTransition from './transitions';
import { BlogRenderer, BlogsRenderer, MainPageRenderer } from './renderer';

export const highway = new Highway.Core({
  transitions: {
    default: CustomTransition
  },
  renderers: {
    "main-page": MainPageRenderer,
    "blogs-page": BlogsRenderer,
    "blog-page": BlogRenderer
  }
});
