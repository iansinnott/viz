import React, { PropTypes } from 'react';

import s from './Svg.styl';
import { moji } from '../lib/utils.js';

/**
 * @module Svg
 * Having fun with Svg visualizations
 */
export const Svg = React.createClass({
  render() {
    return (
      <div className={s.Svg}>
        <div className={s.heading}>
          <h1>SVG Vizualizations</h1>
          <p>
            Having fun with SVG as a visualization medium.
            {moji(':bar_chart:')}
          </p>
        </div>
        <section>
          Todo...
        </section>
      </div>
    );
  },
});
