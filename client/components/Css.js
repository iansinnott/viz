import React, { PropTypes } from 'react';
import cx from 'classnames';

import s from './Css.styl';
import { moji } from '../lib/utils.js';

/**
 * @module Css
 * Having fun with CSS visualizations
 */
export const Css = React.createClass({
  getInitialState() {
    return {
      rotate: false,
      scale: false,
      keyspin: false,
    };
  },

  handleClick(which) {
    this.setState({ [which]: !this.state[which] });
  },

  render() {
    const { rotate, scale, keyspin } = this.state;
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
          <h3>Timer</h3>
          <div className={cx(s.timer)} onClick={() => this.handleClick('rotate')}>
            <div className={s.spinner} />
            <div className={s.filler} />
            <div className={s.mask} />
          </div>
        </section>
        <section>
          <h3>Dem transitions doe...</h3>
          <div
            className={cx(s.showHide, { [s.rotateHidden]: rotate })}
            onClick={() => this.handleClick('rotate')}>
            <img
              width={320}
              height={240}
              src='https://placeimg.com/320/240/any' />
          </div>
          <div
            className={cx(s.showHide, { [s.scaleHidden]: scale })}
            onClick={() => this.handleClick('scale')}>
            <img
              width={320}
              height={240}
              src='https://placeimg.com/320/240/any' />
          </div>
        </section>
        <section>
          <h3>Dem keyframes doe...</h3>
          <div
            className={cx(s.keyframe, { [s.keyspin]: keyspin })}
            onClick={() => this.handleClick('keyspin')}>
            <img
              width={320}
              height={240}
              src='https://placeimg.com/320/240/any' />
          </div>
          <div>
            <div
              className={cx(s.keyframe, s.keyframe2, { [s.keyspin]: keyspin })}
              onClick={() => this.handleClick('keyspin')}>
              <img
                width={320}
                height={240}
                src='https://placeimg.com/320/240/any' />
            </div>
          </div>
        </section>
      </div>
    );
  },
});
