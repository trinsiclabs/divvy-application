import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const READ_CHANNELS = gql`
  query readChannels {
    channel @rest(type: 'Channel', path: '/channels') {
      name
    }
  }
`;

export const readChannelsQuery = options => {
  return useQuery(READ_CHANNELS, { ...options });
};
