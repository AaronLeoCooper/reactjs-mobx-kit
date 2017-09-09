import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import s from './HtmlPreview.styles.scss';

function HtmlPreview ({ Text }) {
  const { htmlStr } = Text;

  const innerHtml = { __html: htmlStr };

  return (
    <div
      className={s.container}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={innerHtml}
    />
  );
}

HtmlPreview.propTypes = {
  Text: PropTypes.shape({
    htmlStr: PropTypes.string
  }).isRequired
};

export default inject('Text')(
  observer(HtmlPreview)
);
