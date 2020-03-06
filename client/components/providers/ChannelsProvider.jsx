import React from 'react';
import { READ_CHANNELS } from '../../graphql/channel';
import restClientCreate from '../../graphql/clients/restClient';

const withChannels = WrappedComponent => {
  const ChannelsProvider = props => {
    const client = restClientCreate();
    const readChannels = () => client.query({ query: READ_CHANNELS });
    return (
      <WrappedComponent { ...{ ...props, readChannels } } />
    );
  };

  return ChannelsProvider;
}

export default withChannels;
