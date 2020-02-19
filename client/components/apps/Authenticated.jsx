import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { PAGES } from '../../constants';
import withRouting from '../providers/RoutingProvider';

const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const NotFoundPage = React.lazy(() => import('../pages/NotFoundPage'));
const TodoAddPage = React.lazy(() => import('../pages/TodoAddPage'));
const TodoEditPage = React.lazy(() => import('../pages/TodoEditPage'));
const TodosPage = React.lazy(() => import('../pages/TodosPage'));

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

      {props.AllowPublicSignup &&
        <Route
          path={PAGES.SIGNUP.PATH}
          render={() => (
            <Redirect to={PAGES.HOME.PATH} />
          )}
        />
      }

      <Route
        path={PAGES.TODO_ADD.PATH}
        render={() => (
          <TodoAddPage
            { ...props }
            headerTitle={PAGES.TODO_ADD.TITLE}
          />
        )}
      />

      <Route
        path={PAGES.TODO_EDIT.PATH}
        render={routeProps => (
          <TodoEditPage
            { ...props }
            headerTitle={PAGES.TODO_EDIT.TITLE}
            todoId={routeProps.match.params.todoId}
          />
        )}
      />

      <Route
        path={PAGES.TODOS.PATH}
        render={() => (
          <TodosPage
            { ...props }
            headerTitle={PAGES.TODOS.TITLE}
          />
        )}
      />

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
