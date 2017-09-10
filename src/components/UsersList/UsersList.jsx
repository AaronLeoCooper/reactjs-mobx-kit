import React from 'react';
import { observer, PropTypes } from 'mobx-react';

import UserItem from '../UserItem';

function UsersList ({ users }) {
  return (
    <div>
      {
        users.map(user => (
          <UserItem
            key={user.id}
            {...user}
          />
        ))
      }
    </div>
  );
}

UsersList.propTypes = {
  users: PropTypes.observableArrayOf(
    PropTypes.observableObject
  ).isRequired
};

export default observer(UsersList);
