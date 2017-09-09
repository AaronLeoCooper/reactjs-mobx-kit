import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

function Router ({
  history,
  routes,
  children
}) {
  return (
    <BrowserRouter history={history}>
      <div>
        {children}
        {
          routes.map(route => (
            <Route
              key={route.path}
              {...route}
            />
          ))
        }
      </div>
    </BrowserRouter>
  );
}

Router.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  children: PropTypes.node
};

Router.defaultProps = {
  children: null
};

export default Router;
