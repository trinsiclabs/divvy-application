import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const READ_SITE_CONFIG = gql`
  {
    readSiteConfig {
      AllowPublicSignup
    }
  }
`;

export const readSiteConfigQuery = options => {
  return useQuery(READ_SITE_CONFIG, { ...options });
};
