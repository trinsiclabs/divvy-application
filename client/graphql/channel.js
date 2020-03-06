import { gql } from 'apollo-boost';

export const READ_CHANNELS = gql`
  query ReadChannels {
    channels @rest(type: "Channel", path: "/channels") {
      items
    }
  }
`;
