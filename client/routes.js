import React from 'react';
import { Route, IndexRoute } from 'react-router';

import {
  App,
  Home,
  Css,
  Svg,
  Canvas,
  NotFound,
} from './components';

export const routes = (
  <Route path='/' title='App' component={App}>
    <IndexRoute component={Home} />
    <Route path='css' title='CSS Visualizations' component={Css} />
    <Route path='svg' title='SVG Visualizations' component={Svg} />
    <Route path='canvas' title='Canvas Visualizations' component={Canvas} />
    <Route path='*' title='404: Not Found' component={NotFound} />
  </Route>
);

export default routes;
