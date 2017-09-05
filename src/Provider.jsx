import React from 'react';
import { useStrict } from 'mobx';
import { Provider as MobxProvider } from 'mobx-react';
import { syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import createStore from './store/createStore';
import App from './containers/App';

useStrict(true); // MobX strict mode

const browserHistory = createBrowserHistory();

const stores = createStore();

const history = syncHistoryWithStore(
  browserHistory,
  stores.RouterStore
);

function Provider () {
  return (
    <MobxProvider {...stores}>
      <App browserHistory={history} />
    </MobxProvider>
  );
}

export default Provider;
