import React from 'react';
import { readSiteConfigQuery } from '../../graphql/siteconfig';

const withSiteConfig = WrappedComponent => {
  const SiteConfigProvider = props => {
    const siteConfig = readSiteConfigQuery();

    return (
      <WrappedComponent { ...{ ...props, siteConfig } } />
    );
  };

  return SiteConfigProvider;
}

export default withSiteConfig;
