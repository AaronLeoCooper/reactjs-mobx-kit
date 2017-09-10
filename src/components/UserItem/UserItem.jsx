import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

function UserItem ({
  id,
  login,
  name,
  company,
  avatarUrl,
  htmlUrl
}) {
  return (
    <div>
      <div>{id}</div>
      <div>{login}</div>
      <div>{name}</div>
      <div>{company}</div>
      <div>{avatarUrl}</div>
      <div>{htmlUrl}</div>
    </div>
  );
}

UserItem.propTypes = {
  id: PropTypes.number.isRequired,
  login: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  htmlUrl: PropTypes.string.isRequired
};

export default observer(UserItem);
