import React from 'react';
import { readMemberQuery } from '../../graphql/member';

const withMember = WrappedComponent => {
  const MemberProvider = props => {
    const member = readMemberQuery();

    return (
      <WrappedComponent { ...{ ...props, member } } />
    );
  };

  return MemberProvider;
}

export default withMember;
