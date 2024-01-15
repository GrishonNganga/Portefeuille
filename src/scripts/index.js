// HighwayJS
import Highway from '@dogstudio/highway';

//My Custom Transitions
import CustomTransition from './transitions';
import { BlogRenderer, BlogsRenderer } from './renderer';

export const highway = new Highway.Core({
  transitions: {
    default: CustomTransition
  },
  renderers: {
    "blogs-page": BlogsRenderer,
    "blog-page": BlogRenderer
  }
});