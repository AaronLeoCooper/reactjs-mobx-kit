import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import s from './UserItem.styles.scss';

function UserItem ({
  id,
  login,
  name,
  company,
  avatarUrl,
  htmlUrl
}) {
  return (
    <div className={s.container}>
      <img
        src={avatarUrl}
        alt="User avatar"
        className={s.avatar}
      />
      <div>
        <strong>Id </strong>{id}
      </div>
      <div>
        <strong>Login </strong>{login}
      </div>
      <div>
        <strong>Name </strong>{name}
      </div>
      <div>
        <strong>Company </strong>{company}
      </div>
      <div>
        <strong>HtmlUrl </strong>
        <a href={htmlUrl} target="_blank">{htmlUrl}</a>
      </div>
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
