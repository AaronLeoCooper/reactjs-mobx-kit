import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './HtmlPreview.styles.scss';

@observer
class HtmlPreview extends Component {

  render () {
    const { htmlStr } = this.props;

    const innerHtml = { __html: htmlStr };

    return (
      <div
        className={s.container}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={innerHtml}
      />
    );
  }

}

HtmlPreview.propTypes = {
  htmlStr: PropTypes.string
};

HtmlPreview.defaultProps = {
  htmlStr: ''
};

export default HtmlPreview;
