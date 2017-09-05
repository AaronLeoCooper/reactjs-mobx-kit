import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import './App.styles.scss';

import routes from './App.routes';
import Router from '../Router';
import Header from '../../components/Header';

@observer
class App extends Component {

  render () {
    const { browserHistory } = this.props;

    const navItems = routes.filter(route => route.navOptions);

    return (
      <Router
        history={browserHistory}
        routes={routes}
      >
        <DevTools />
        <Header navItems={navItems} />
      </Router>
    );
  }

}

App.propTypes = {
  browserHistory: PropTypes.object.isRequired
};

App.defaultProps = {};

export default App;
