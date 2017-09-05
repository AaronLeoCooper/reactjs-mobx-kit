/**
 * Test suite helper exports
 */

/**
 * Nope!
 */
export function noop () {}

/**
 * Dummy simple decorator
 * @param {*} _
 */
const decoratorSimple = (_) => _;

/**
 * Dummy curried decorator
 */
const decoratorCurried = () => decoratorSimple;

/**
 * Get a config object for proxyquire with MobX stubs applied
 * @param {object} opts
 */
export function getProxyConfig (opts = {}) {
  const {
    inject = decoratorCurried,
    observer = decoratorSimple
  } = opts;

  return {
    'mobx-react': {
      inject,
      observer
    },
    '@noCallThru': true
  };
}

/**
 * Ignore imports for the passed file types
 * @param {array} extensions
 */
export function ignoreImportExtensions (extensions = []) {
  extensions
    .forEach((ext) => {
      require.extensions[ext] = noop;
    });
}

/**
 * Fills missing properties in target from src
 * @param {object} src
 * @param {object} target
 */
export function copyProps (src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter((prop) => typeof target[prop] === 'undefined')
    .map((prop) => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}
