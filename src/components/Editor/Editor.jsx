import React from 'react';
// import PropTypes from 'prop-types';

import s from './Editor.styles.scss';

import Textbox from '../Textbox';
import HtmlPreview from '../HtmlPreview';

function Editor () {
  return (
    <div className={s.container}>
      <Textbox />
      <HtmlPreview />
    </div>
  );
}

Editor.propTypes = {};

Editor.defaultProps = {};

export default Editor;
