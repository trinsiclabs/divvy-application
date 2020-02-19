import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PAGES } from '../../constants';
import withRouting from '../providers/RoutingProvider';

const HomePage = React.lazy(() => import('../pages/HomePage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const SignupPage = React.lazy(() => import('../pages/SignupPage'));
const SignupConfirmPage = React.lazy(() => import('../pages/SignupConfirmPage'));

const Unauthenticated = props => {
  return (
    <Switch>
      <Route
        exact
        path={PAGES.HOME.PATH}
        render={() => (
          <HomePage
            { ...props }
            headerTitle='App Starter Kit'
          />
        )}
      />

      {props.AllowPublicSignup &&
        <Route
          exact
          path={PAGES.SIGNUP.PATH}
          render={() => (
            <SignupPage
              { ...props }
              headerTitle={PAGES.SIGNUP.TITLE}
              showBreadcrumbs={false}
            />
          )}
        />
      }

      {props.AllowPublicSignup &&
        <Route
          path={PAGES.SIGNUP_CONFIRM.PATH}
          render={routeProps => (
            <SignupConfirmPage
              { ...props }
              headerTitle={PAGES.SIGNUP_CONFIRM.TITLE}
              showBreadcrumbs={false}
              token={routeProps.match.params.token}
            />
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

Unauthenticated.propTypes = {
  AllowPublicSignup: PropTypes.bool.isRequired,
};

let App = Unauthenticated;

App = withRouting(App);

export default App;
