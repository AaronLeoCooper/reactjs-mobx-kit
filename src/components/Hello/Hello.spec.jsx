import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Hello from './';

const text = 'test';

suite('Hello');

test('default', function () {
  const node = shallow(
    <Hello />
  );

  assert.equal(node.text(), 'Hello, nobody!', 'renders default text');
});

test('renders text', function () {
  const node = shallow(
    <Hello text={text} />
  );

  assert.equal(node.text(), `Hello, ${text}!`, 'renders passed text');
});
