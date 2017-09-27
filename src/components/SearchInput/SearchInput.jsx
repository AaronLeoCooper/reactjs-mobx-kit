import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './SearchInput.styles.scss';

function SearchInput ({
  isFetching,
  userNotFound,
  onChange
}) {
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
        onChange={onChange}
      />
      {userNotFoundNode}
      {loadingNode}
    </div>
  );
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
