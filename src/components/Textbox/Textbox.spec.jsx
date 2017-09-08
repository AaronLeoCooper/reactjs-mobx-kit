import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import { getClasses, noop } from '../../../test/test.helpers';

import Textbox from './';
import s from './Textbox.styles.scss';

const c = getClasses(s);

suite('Textbox');

test.skip('renders html from string', function () {
  const rawText = 'a value';

  const node = shallow(
    <Textbox Text={{ rawText, setText: noop }} />
  );

  const textarea = node.find(c.textarea);

  assert.equal(
    textarea.prop('value'), rawText, 'passes rawText to textarea value'
  );
});
