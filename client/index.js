import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'typeface-roboto';
import 'url-search-params-polyfill';

import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppWrapper from './components/apps/Wrapper';
import configureStore from './redux/configureStore';
import createGraphqlClient from './graphql/clients/graphqlClient';

window.APP = window.APP || {};

window.onload = () => {
  ReactDOM.render(
    <Provider store={configureStore()}>
      <ApolloProvider client={createGraphqlClient()}>
        <AppWrapper />
      </ApolloProvider>
    </Provider>,
    document.getElementById('App')
  );
};
