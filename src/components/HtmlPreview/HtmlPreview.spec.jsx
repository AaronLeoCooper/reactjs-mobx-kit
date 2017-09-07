import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
import proxyquire from 'proxyquire';
import { getProxyConfig, getClasses } from '../../../test/test.helpers';

import s from './HtmlPreview.styles.scss';

const c = getClasses(s);

const getHtmlPreview = () =>
  proxyquire('./', getProxyConfig());

suite('HtmlPreview');

test('renders html from string', function () {
  const node = shallow(
    <getHtmlPreview />
  );

  console.log(s);
  console.log(c);

  // const renderedNode = node.find()
});
