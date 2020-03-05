import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ADD_ACCOUNT = gql`
  mutation AddAccount($organisationName: String!, $members: [ID]) {
    addAccount(OrganisationName: $organisationName, Members: $members) {
      ID
    }
  }
`;

const READ_ACCOUNT = gql`
  {
    readAccount {
      OrganisationName
      OrganisationSlug
    }
  }
`;

export const addAccountMutation = options => {
  return useMutation(ADD_ACCOUNT, { ...options });
};

export const readAccountQuery = options => {
  return useQuery(READ_ACCOUNT, { ...options });
};
