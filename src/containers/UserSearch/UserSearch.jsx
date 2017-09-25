import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject, PropTypes as MXPropTypes } from 'mobx-react';
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
      userNotFound,
      usersHistory
    } = this.props.Users;

    return (
      <div>
        <SearchInput
          isFetching={isFetching}
          userNotFound={userNotFound}
          onChange={this.onInputChange}
        />
        <UsersList users={usersHistory} />
      </div>
    );
  }

}

UserSearch.wrappedComponent.propTypes = {
  Users: PropTypes.shape({
    searchUser: PropTypes.func,
    isFetching: PropTypes.bool,
    userNotFound: PropTypes.string,
    usersHistory: MXPropTypes.observableArray
  }).isRequired
};

export default UserSearch;
