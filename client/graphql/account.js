import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ADD_ACCOUNT = gql`
  mutation AddAccount($organisationName: String, $members: [ID]) {
    addAccount(OrganisationName: $organisationName, Members: $members) {
      ID
    }
  }
`;

export const addAccountMutation = options => {
  return useMutation(ADD_ACCOUNT, { ...options });
};
