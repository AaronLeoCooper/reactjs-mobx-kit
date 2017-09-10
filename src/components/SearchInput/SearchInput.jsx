import React from 'react';
import PropTypes from 'prop-types';

function SearchInput ({ onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Github username"
        onChange={onChange}
      />
    </div>
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchInput;
