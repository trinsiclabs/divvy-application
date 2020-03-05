import React from 'react';
import { readAccountQuery } from '../../graphql/account';

const withAccount = WrappedComponent => {
  const AccountProvider = props => {
    const account = readAccountQuery();

    return (
      <WrappedComponent { ...{ ...props, account } } />
    );
  };

  return AccountProvider;
}

export default withAccount;
