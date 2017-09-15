import { observable, action, runInAction } from 'mobx';

// import User from './User';

class Users {

  @observable isFetching = false;
  @observable usersHistory = [];

  @action.bound
  async searchUser (userName = '') {
    this.isFetching = true;

    try {
      const user = await fetch(`https://api.github.com/users/${userName}`)
        .then(res => res.json());

      const isValidUser = !!user.id;

      if (isValidUser) {
        runInAction('add new user', () => {
          this.userHistory = [
            ...this.userHistory,
            user
            // new User(user)
          ];
        });
      }
    } catch (e) { /* Empty */ }

    runInAction('end searchUser', () => {
      this.isFetching = false;
    });
  }

}

export default Users;
