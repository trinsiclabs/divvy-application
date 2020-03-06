import ApolloClient from 'apollo-boost';

const createGraphqlClient = () => {
  return new ApolloClient({
    uri: window.APP.GRAPHQL_URI,
    request: operation => {
      operation.setContext({
        headers: {
          'X-CSRF-TOKEN': window.APP.SECURITY_ID,
        },
      });
    },
  });
};

export default createGraphqlClient;
