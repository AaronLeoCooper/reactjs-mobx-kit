import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import debounce from 'lodash.debounce';

import s from './SearchInput.styles.scss';

class SearchInput extends Component {

  onChange = (e) => {
    const { value } = e.target;

    this.debouncedOnChange(value);
  }

  debouncedOnChange = debounce(
    (value) => {
      const { onChange } = this.props;

      onChange(value);
    },
    300
  )

  render () {
    const {
      isFetching,
      userNotFound
    } = this.props;

    const loadingNode = isFetching
      ? (
        <div className={s.loading}>
          Loading...
        </div>
      )
      : null;

    const userNotFoundNode = userNotFound
      ? (
        <p className={s.notFound}>{userNotFound} not found!</p>
      )
      : null;

    return (
      <div className={s.container}>
        <input
          className={s.input}
          type="text"
          placeholder="Enter a Github username"
          onChange={this.onChange}
        />
        {userNotFoundNode}
        {loadingNode}
      </div>
    );
  }

}

SearchInput.propTypes = {
  isFetching: PropTypes.bool,
  userNotFound: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
  isFetching: false,
  userNotFound: ''
};

export default observer(SearchInput);
