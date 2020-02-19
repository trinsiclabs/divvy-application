import { ConnectedRouter, push } from 'connected-react-router'
import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../redux/configureStore';

const withRouting = WrappedComponent => {
  const RoutingProvider = props => (
    <ConnectedRouter history={history}>
      <WrappedComponent { ...props } />
    </ConnectedRouter>
  );

  const mapStateToProps = state => ({
    router: state.router,
  });

  const mapDispatchToProps = dispatch => ({
    routeTo: path => {
      dispatch(push(path));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(RoutingProvider);
}

export default withRouting;
