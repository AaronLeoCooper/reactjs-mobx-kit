import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

import s from './HtmlPreview.styles.scss';

@inject('Text')
@observer
class HtmlPreview extends Component {

  render () {
    const { htmlStr } = this.props.Text;

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

HtmlPreview.wrappedComponent.propTypes = {
  Text: PropTypes.shape({
    htmlStr: PropTypes.string
  }).isRequired
};

export default HtmlPreview;
