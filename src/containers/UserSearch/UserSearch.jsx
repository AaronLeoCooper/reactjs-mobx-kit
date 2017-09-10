import React, { Component } from 'react';
import { observer, inject, PropTypes } from 'mobx-react';

import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

@inject('Users')
@observer
class UserSearch extends Component {

  render () {
    const { Users } = this.props;

    const {
      isFetching,
      usersHistory,
      searchUser
    } = Users;

    return (
      <div>
        <SearchInput
          isFetching={isFetching}
          onChange={searchUser}
        />
        <UsersList users={usersHistory} />
      </div>
    );
  }

}

UserSearch.wrappedComponent.propTypes = {
  Users: PropTypes.observableObject.isRequired
};

export default UserSearch;
