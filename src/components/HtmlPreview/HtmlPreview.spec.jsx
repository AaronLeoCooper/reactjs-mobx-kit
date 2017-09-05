import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';

import HtmlPreview from './';

suite('HtmlPreview');

test.skip('renders html from string', function () {
  const node = shallow(
    <HtmlPreview />
  );
});
