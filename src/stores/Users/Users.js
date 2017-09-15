import { observable, action, runInAction } from 'mobx';

import User from './User';

export default class Users {

  @observable isFetching = false;
  @observable userNotFound = '';
  @observable usersHistory = [];

  @action.bound
  async searchUser (userName) {
    this.isFetching = true;

    try {
      const user = await this.fetchUser(userName);

      const wasUserFound = !!user.id;

      if (wasUserFound) {
        runInAction('add new user', () => {
          this.usersHistory.push(new User(user));
        });
      } else {
        runInAction('no user found', () => {
          this.userNotFound = userName;
        });
      }
    } catch (e) { /* empty */ }

    runInAction('end searchUser', () => {
      this.isFetching = false;
    });
  }

  fetchUser = userName =>
    fetch(`https://api.github.com/users/${userName}`)
      .then(res => res.json())

}
