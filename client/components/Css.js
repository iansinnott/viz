import React, { PropTypes } from 'react';

import s from './Css.styl';
import { moji } from '../lib/utils.js';

/**
 * @module Css
 * Having fun with CSS visualizations
 */
export const Css = React.createClass({
  render() {
    return (
      <div className={s.Css}>
        <div className={s.heading}>
          <h1>CSS Vizualizations</h1>
          <p>
            Having fun with CSS as a visualization medium.
            {moji(':art:')}
          </p>
        </div>
        <section>
          Todo...
        </section>
      </div>
    );
  },
});
