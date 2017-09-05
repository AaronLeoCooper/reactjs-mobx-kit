import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './Textbox.styles.scss';

@observer
class Textbox extends Component {

  render () {
    const {
      rawText,
      setText
    } = this.props;

    return (
      <textarea
        value={rawText}
        onChange={setText}
        className={s.textarea}
      />
    );
  }

}

Textbox.propTypes = {
  rawText: PropTypes.string,
  setText: PropTypes.func.isRequired
};

Textbox.defaultProps = {
  rawText: ''
};

export default Textbox;
