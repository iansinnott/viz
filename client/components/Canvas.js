import React, { PropTypes } from 'react';

import s from './Canvas.styl';
import { moji } from '../lib/utils.js';

/**
 * @module Canvas
 * Having fun with Canvas visualizations
 */
export const Canvas = React.createClass({
  render() {
    return (
      <div className={s.Canvas}>
        <div className={s.heading}>
          <h1>Canvas Vizualizations</h1>
          <p>
            Having fun with Canvas as a visualization medium.
            {moji(':beers:')}
          </p>
        </div>
        <section>
          Todo...
        </section>
      </div>
    );
  },
});
