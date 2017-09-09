import React from 'react';

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

export default Editor;
