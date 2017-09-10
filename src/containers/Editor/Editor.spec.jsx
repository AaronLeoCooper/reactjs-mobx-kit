import React from 'react';
import { assert } from 'chai';
import { stub } from 'sinon';
import { mount } from 'enzyme';

import Editor from './';
import Textbox from '../../components/Textbox';
import HtmlPreview from '../../components/HtmlPreview';

suite('Editor');

test('renders expected children', function () {
  const store = {
    rawText: 'test',
    htmlStr: '<p>test</p>',
    setText: stub()
  };

  const node = mount(
    <Editor Text={store} />
  );

  const textbox = node.find(Textbox);
  const htmlPreview = node.find(HtmlPreview);

  assert.equal(textbox.length, 1, 'renders <Textbox>');

  assert.equal(
    textbox.prop('value'),
    store.rawText,
    'passes rawText to <Textbox> value'
  );

  assert.deepEqual(
    textbox.prop('onChange'),
    store.setText,
    'passes setText to <Textbox> onChange'
  );

  assert.equal(htmlPreview.length, 1, 'renders <HtmlPreview>');

  assert.equal(
    textbox.prop('htmlStr'),
    store.htmlStr,
    'passes htmlStr to <HtmlPreview>'
  );
});
