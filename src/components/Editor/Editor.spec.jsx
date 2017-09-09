import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import Editor from './';
import Textbox from '../Textbox';
import HtmlPreview from '../HtmlPreview';

suite('Editor');

test('renders expected children', function () {
  const node = shallow(
    <Editor />
  );

  assert.equal(node.find(Textbox).length, 1, 'renders <Textbox>');
  assert.equal(node.find(HtmlPreview).length, 1, 'renders <HtmlPreview>');
});
