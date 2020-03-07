import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PAGES } from '../../constants';
import withRouting from '../providers/RoutingProvider';

const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const WalletPage = React.lazy(() => import('../pages/WalletPage'));
const WalletItemPage = React.lazy(() => import('../pages/WalletItemPage'));
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
            headerTitle={props.Account.OrganisationName}
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

      <Route
        exact
        path={PAGES.WALLET_ITEM.PATH}
        render={routeProps => {
          return <WalletItemPage
            { ...props }
            headerTitle={PAGES.WALLET.TITLE}
            slug={routeProps.match.params.slug}
          />
        }}
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
