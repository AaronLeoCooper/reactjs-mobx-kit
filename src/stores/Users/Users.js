import { observable, action } from 'mobx';

import User from './User';

class Users {

  @observable isFetching = false;
  @observable usersHistory = [];

  @action.bound
  async searchUser (userName = '') {
    this.isFetching = true;

    const user = await fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json());

    console.log(user);

    const isValidUser = user.id;

    if (isValidUser) {
      this.addUser(new User(user));
    }

    this.isFetching = false;
  }

  @action.bound
  addUser = (user) => {
    this.userHistory.push(user);
  }

}

export default Users;
