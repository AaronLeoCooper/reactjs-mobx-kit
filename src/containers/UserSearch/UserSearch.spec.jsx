import { shallow } from 'enzyme';
import { assert } from 'chai';
import { stub } from 'sinon';
import { mountWithStores } from '../../../test/test.helpers';
import { observable } from 'mobx';

import UserSearch from './';
import SearchInput from '../../components/SearchInput';
import UsersList from '../../components/UsersList';

const store = {
  searchUser: stub(),
  isFetching: false,
  userNotFound: 'test not found',
  usersHistory: observable([])
};

const mountWrapped = mountWithStores({ Users: store });

suite('UserSearch');

beforeEach(function () {
  store.searchUser.reset();
});

test('renders expected children', function () {
  const node = mountWrapped(UserSearch);

  const searchInput = node.find(SearchInput);
  const usersList = node.find(UsersList);

  assert.equal(searchInput.length, 1, 'renders <SearchInput>');

  assert.equal(
    searchInput.prop('isFetching'),
    store.isFetching,
    'passes isFetching to <SearchInput>'
  );

  assert.equal(
    searchInput.prop('userNotFound'),
    store.userNotFound,
    'passes userNotFound to <SearchInput>'
  );

  assert.equal(usersList.length, 1, 'renders <UsersList>');

  assert.deepEqual(
    usersList.prop('users'),
    store.usersHistory,
    'passes usersHistory to <UsersList>'
  );
});

// test('onInputChange', function (done) {
//   const node = mountWrapped(UserSearch);

//   const searchInput = node.find(SearchInput);

//   const instance = shallow(node.find('.UserSearch')).instance();

//   const e = { target: { value: 'test' } };

//   // searchInput.simulate('change', e);

//   instance.onInputChange(e);

//   setTimeout(() => {
//     console.info(store.searchUser.args[0]);

//     assert.deepEqual(
//       store.searchUser.args[0][0],
//       e,
//       'calls searchUser with input event'
//     );

//     done();
//   }, 400);
// });
