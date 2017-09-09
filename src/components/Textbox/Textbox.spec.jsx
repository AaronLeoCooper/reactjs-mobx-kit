import React from 'react';
import { assert } from 'chai';
import { stub } from 'sinon';
import { mount } from 'enzyme';
import { getClasses, noop } from '../../../test/test.helpers';

import Textbox from './';
import s from './Textbox.styles.scss';

const c = getClasses(s);

suite('Textbox');

test('passes value to <textarea>', function () {
  const rawText = 'a value';

  const node = mount(
    <Textbox Text={{ rawText, setText: noop }} />
  );

  const textarea = node.find(c.textarea);

  assert.equal(
    textarea.prop('value'), rawText, 'passes rawText to textarea value'
  );
});

test('<textarea>', function () {
  const setText = stub();

  const node = mount(
    <Textbox Text={{ setText }} />
  );

  const textarea = node.find(c.textarea);

  const e = { target: { value: 'a value' } };

  textarea.simulate('change', e);

  assert.isTrue(setText.calledOnce, 'setText called once');
  assert.deepEqual(
    setText.args[0][0].target,
    e.target,
    'setText receives <textarea> event'
  );
});
