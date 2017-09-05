import { RouterStore } from 'mobx-react-router';

import Text from './Text';

const appStores = {
  RouterStore,
  Text
};

function createStore () {
  return Object.keys(appStores)
    .reduce((acc, storeName) => ({
      ...acc,
      [storeName]: new appStores[storeName]()
    }), {});
}

export default createStore;
