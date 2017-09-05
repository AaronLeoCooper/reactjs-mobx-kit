import React from 'react';
import { assert } from 'chai';
import { shallow } from 'enzyme';
// import proxyquire from 'proxyquire';
// import { getProxyConfig } from '../../../test/test.helpers';

import App from './';
import routes from './App.routes';
import Router from '../Router';

const browserHistory = { test: 123 };

suite('App');

test('renders <Router>', function () {
  const node = shallow(
    <App browserHistory={browserHistory} />
  );

  const router = node.find(Router);

  assert.equal(router.length, 1, 'renders <Router>');

  assert.deepEqual(
    router.prop('history'),
    browserHistory,
    'passes browserHistory to <Router> history'
  );

  assert.deepEqual(
    router.prop('routes'),
    routes,
    'passes routes to <Router> routes'
  );
});

// test('connects to store', () => {
//   const observer = stub();

//   const App = proxyquire(
//     './App',
//     getProxyConfig({ observer })
//   ).default;

//   shallow(<App />);

//   assert.isTrue(observer.calledOnce, 'observable wraps App');
// });
