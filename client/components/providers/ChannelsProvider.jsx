import React from 'react';
import { READ_CHANNELS } from '../../graphql/channel';
import restClientCreate from '../../graphql/clients/restClient';

const withChannels = WrappedComponent => {
  const ChannelsProvider = props => {
    const client = restClientCreate();
    const channels = client.query({ query: READ_CHANNELS });

    return (
      <WrappedComponent { ...{ ...props, channels } } />
    );
  };

  return ChannelsProvider;
}

export default withChannels;
