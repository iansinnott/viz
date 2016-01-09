import React, { PropTypes } from 'react';

import s from './Css.styl';

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
            <i className='fa fa-paint-brush'></i>
          </p>
        </div>
        <section>
          Some stuff in here
        </section>
      </div>
    );
  },
});
