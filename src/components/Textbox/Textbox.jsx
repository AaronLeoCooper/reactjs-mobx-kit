import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import s from './Textbox.styles.scss';

function Textbox ({ Text }) {
  const {
    rawText,
    setText
  } = Text;

  return (
    <div>
      <textarea
        value={rawText}
        onChange={setText}
        className={s.textarea}
        placeholder="Write markdown!"
      />
    </div>
  );
}

Textbox.propTypes = {
  Text: PropTypes.shape({
    rawText: PropTypes.string,
    setText: PropTypes.func.isRequired
  }).isRequired
};

export default inject('Text')(
  observer(Textbox)
);
