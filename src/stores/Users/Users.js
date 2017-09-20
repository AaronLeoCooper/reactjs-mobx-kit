import { observable, action, runInAction } from 'mobx';

import { fetchUser } from './Users.utils';
import User from './User';

const getActionType = type => `Users :: ${type}`;

export default class Users {

  @observable isFetching = false;
  @observable userNotFound = '';
  @observable usersHistory = [];

  @action(getActionType('searchUser'))
  searchUser = async (userName) => {
    this.isFetching = true;

    try {
      const user = await fetchUser(userName);

      const wasUserFound = !!user.id;

      if (wasUserFound) {
        runInAction(getActionType('add new user'), () => {
          this.usersHistory.push(new User(user));
        });
      } else {
        runInAction(getActionType('no user found'), () => {
          this.userNotFound = userName;
        });
      }
    } catch (e) { /* empty */ }

    runInAction(getActionType('end searchUser'), () => {
      this.isFetching = false;
    });
  }

}
