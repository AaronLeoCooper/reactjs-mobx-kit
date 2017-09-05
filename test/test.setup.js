import { JSDOM } from 'jsdom';
import proxyquire from 'proxyquire';
import mockCssModules from 'mock-css-modules';

import { ignoreImportExtensions, copyProps } from './test.helpers';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

proxyquire.noCallThru();

mockCssModules.register([ '.scss' ]);

ignoreImportExtensions([ '.jpg', '.jpeg', '.png', '.gif', '.svg' ]);

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

copyProps(window, global);
