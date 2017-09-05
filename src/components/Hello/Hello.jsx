import React from 'react';
import PropTypes from 'prop-types';

import s from './Hello.styles.scss';

import bridgeImg from '../../assets/images/bridge.jpg';

const Hello = ({ text }) => (
  <div className={s.text}>
    Hello, {text}!
    <img src={bridgeImg} alt="" />
    <div className={s.img} />
  </div>
);

Hello.propTypes = {
  text: PropTypes.string
};

Hello.defaultProps = {
  text: 'nobody'
};

export default Hello;
