import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import { noop, getClasses } from '../../../test/test.helpers';

import SearchInput from './';
import s from './SearchInput.styles.scss';

const c = getClasses(s);

suite('SearchInput');

test('default', function () {
  const node = shallow(
    <SearchInput onChange={noop} />
  );

  const input = node.find(c.input);
  const notFound = node.find(c.notFound);
  const loading = node.find(c.loading);

  assert.equal(input.length, 1, 'renders <input>');
  assert.equal(notFound.length, 0, 'does not render user not found');
  assert.equal(loading.length, 0, 'does not render loading');
});

test('onChange', function () {
  const onChange = stub();

  const node = shallow(
    <SearchInput onChange={onChange} />
  );

  const input = node.find(c.input);
  const e = { target: { value: '123' } };

  input.simulate('change', e);

  assert.deepEqual(onChange.args[0][0], e, 'calls onChange with event');
});

test('isFetching', function () {
  const node = shallow(
    <SearchInput
      onChange={noop}
      isFetching
    />
  );

  const loading = node.find(c.loading);

  assert.equal(loading.length, 1, 'renders loading');
});

test('userNotFound', function () {
  const userName = 'dummy user';

  const node = shallow(
    <SearchInput
      onChange={noop}
      userNotFound={userName}
    />
  );

  const notFound = node.find(c.notFound);

  assert.equal(notFound.length, 1, 'renders notFound');
  assert.isTrue(
    notFound.text().includes(userName),
    'renders message containing username'
  );
});
