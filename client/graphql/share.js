import { gql } from 'apollo-boost';

export const readSharesQuery = channel => gql`
  query ReadShares($channel: String!) {
    shares(channel: "${channel}") @rest(type: "Share", path: "/shares/{args.channel}") {
      items
    }
  }
`;
