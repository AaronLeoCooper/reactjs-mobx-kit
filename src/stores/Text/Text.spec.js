import { assert } from 'chai';
// import proxyquire from 'proxyquire';
// import { getProxyConfig } from '../../../test/test.helpers';

import Text from './';
import { markdownToHtml } from './Text.utils';

suite('Text');

test('@observable rawText', function () {
  const text = new Text();

  assert.equal(text.rawText, '', 'default empty string');
});

test('@action setText()', function () {
  const text = new Text();

  text.setText({ target: { value: 'test' } });

  assert.equal(text.rawText, 'test', 'updates rawText');
});

test.skip('@computed htmlStr', function () {
  const text = new Text();

  text.setText({ target: { value: 'test' } });

  assert.equal(text.rawText, 'test', 'updates rawText');
});
