import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import s from './Textbox.styles.scss';

@inject('Text')
@observer
class Textbox extends Component {

  render () {
    const {
      rawText,
      setText
    } = this.props.Text;

    return (
      <textarea
        value={rawText}
        onChange={setText}
        className={s.textarea}
      />
    );
  }

}

Textbox.wrappedComponent.propTypes = {
  Text: PropTypes.shape({
    rawText: PropTypes.string,
    setText: PropTypes.func.isRequired
  }).isRequired
};

export default Textbox;
