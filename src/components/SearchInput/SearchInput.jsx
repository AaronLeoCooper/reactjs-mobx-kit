import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './SearchInput.styles.scss';

function SearchInput ({ isFetching, onChange }) {
  const loadingNode = isFetching
    ? (
      <div className={s.loading}>
        Loading...
      </div>
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
      {loadingNode}
    </div>
  );
}

SearchInput.propTypes = {
  isFetching: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

SearchInput.defaultProps = {
  isFetching: false
};

export default observer(SearchInput);
