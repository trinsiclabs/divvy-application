import React from 'react';
import { readSharesQuery } from '../../graphql/share';
import restClientCreate from '../../graphql/clients/restClient';

const withShares = WrappedComponent => {
  const SharesProvider = props => {
    const client = restClientCreate();
    const readShares = channel => {
        return client.query({
            query: readSharesQuery(channel),
        });
    };

    return (
      <WrappedComponent { ...{ ...props, readShares } } />
    );
  };

  return SharesProvider;
}

export default withShares;
