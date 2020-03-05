import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PAGES } from '../../constants';
import withRouting from '../providers/RoutingProvider';

const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const WalletPage = React.lazy(() => import('../pages/WalletPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));

const Authenticated = props => {
  return (
    <Switch>
      <Route
        exact
        path={PAGES.HOME.PATH}
        render={() => (
          <DashboardPage
            { ...props }
            headerTitle='Dashboard'
          />
        )}
      />

      <Route
        exact
        path={PAGES.WALLET.PATH}
        render={() => (
          <WalletPage
            { ...props }
            headerTitle={PAGES.WALLET.TITLE}
          />
        )}
      />

      {props.AllowPublicSignup &&
        <Route
          path={PAGES.SIGNUP.PATH}
          render={() => (
            <Redirect to={PAGES.HOME.PATH} />
          )}
        />
      }

      <Route
        path={PAGES.NOT_FOUND.PATH}
        render={() => (
          <NotFoundPage
            { ...props }
            headerTitle={PAGES.NOT_FOUND.TITLE}
          />
        )}
      />

      <Redirect to={PAGES.NOT_FOUND.PATH} />
    </Switch>
  );
};

Authenticated.propTypes = {
  AllowPublicSignup: PropTypes.bool.isRequired,
};

let App = Authenticated;

App = withRouting(App);

export default App;
