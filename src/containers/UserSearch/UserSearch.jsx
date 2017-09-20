import React, { Component } from 'react';
import { observer, inject, PropTypes } from 'mobx-react';
import debounce from 'lodash.debounce';

import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

@inject('Users')
@observer
class UserSearch extends Component {

  onInputChange = (e) => {
    const value = e.target.value;

    this.debouncedSearchUser(value);
  }

  debouncedSearchUser = debounce(
    (value) => {
      const { searchUser } = this.props.Users;

      searchUser(value);
    },
    300
  )

  render () {
    const {
      isFetching,
      usersHistory
    } = this.props.Users;

    return (
      <div>
        <SearchInput
          isFetching={isFetching}
          onChange={this.onInputChange}
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
