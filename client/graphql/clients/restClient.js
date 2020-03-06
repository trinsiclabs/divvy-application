import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { RestLink } from 'apollo-link-rest';

const createRestClient = () => {
  return new ApolloClient({
    link: new RestLink({
      uri: window.APP.REST_V1_URI,
    }),
    cache: new InMemoryCache(),
  });
};

export default createRestClient;
