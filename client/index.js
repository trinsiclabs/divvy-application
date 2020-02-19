import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'typeface-roboto';
import 'url-search-params-polyfill';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppWrapper from './components/apps/Wrapper';
import configureStore from './redux/configureStore';

window.APP = window.APP || {};

window.onload = () => {
  const apolloClient = new ApolloClient({
    uri: window.APP.GRAPHQL_URI,
    request: operation => {
      operation.setContext({
        headers: {
          'X-CSRF-TOKEN': window.APP.SECURITY_ID,
        },
      });
    },
  });

  ReactDOM.render(
    <Provider store={configureStore()}>
      <ApolloProvider client={apolloClient}>
        <AppWrapper />
      </ApolloProvider>
    </Provider>,
    document.getElementById('App')
  );
};
