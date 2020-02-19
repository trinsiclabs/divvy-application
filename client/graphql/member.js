import { useMutation, useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ADD_MEMBER = gql`
  mutation AddMember($firstName: String!, $surname: String!, $email: String!, $password: String!) {
    addMember(FirstName: $firstName, Surname: $surname, Email: $email, Password: $password) {
      ID
    }
  }
`;

const READ_MEMBER = gql`
  {
    readMember {
      FirstName
      Surname
    }
  }
`;

const VERIFY_MEMBER = gql`
  mutation VerifyMember($token: String!) {
    verifyMember(VerificationToken: $token) {
      FirstName
      Surname
    }
  }
`;

export const addMemberMutation = options => {
  return useMutation(ADD_MEMBER, { ...options });
};

export const readMemberQuery = options => {
  return useQuery(READ_MEMBER, { ...options });
};

export const verifyMemberMutation = options => {
  return useMutation(VERIFY_MEMBER, { ...options });
};
