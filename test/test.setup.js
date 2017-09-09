import { JSDOM } from 'jsdom';
import proxyquire from 'proxyquire';
import hook from 'css-modules-require-hook';

import { ignoreImportExtensions, copyProps } from './test.helpers';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

proxyquire.noCallThru();

ignoreImportExtensions([ '.jpg', '.jpeg', '.png', '.gif', '.svg' ]);

hook({
  generateScopedName: '[name]__[local]___[hash:base64:5]',
  extensions: [ '.scss' ]
});

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);
