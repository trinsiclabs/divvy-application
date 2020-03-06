import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import withAccount from '../providers/AccountProvider';
import withMember from '../providers/MemberProvider';
import withSiteConfig from '../providers/SiteConfigProvider';
import FallbackProgress from '../shared/FallbackProgress';

const Authenticated = React.lazy(() => import('./Authenticated'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const Unauthenticated = React.lazy(() => import('./Unauthenticated'));

const Wrapper = props => {
  const { account, siteConfig, member } = props;

  const error = account.error || siteConfig.error || member.error;
  const loading = account.loading || siteConfig.loading || member.loading;

  let combinedProps = { ...props };

  if (!account.loading && account.data && account.data.readAccount) {
    combinedProps.Account = account.data.readAccount[0];
  }

  if (!siteConfig.loading && siteConfig.data && siteConfig.data.readSiteConfig) {
    combinedProps.AllowPublicSignup = siteConfig.data.readSiteConfig[0].AllowPublicSignup;
  }

  if (!member.loading && member.data && member.data.readMember) {
    combinedProps.Member = member.data.readMember[0];
  }

  if (loading) {
    return <FallbackProgress />;
  }

  return (
    <React.Suspense fallback={<FallbackProgress />}>
      <CssBaseline />

      {error &&
        <ErrorPage
          { ...props }
          headerTitle='Error'
        />
      }

      {!error && !loading && !combinedProps.Member &&
        <Unauthenticated { ...combinedProps } />
      }

      {!error && !loading && combinedProps.Member &&
        <Authenticated { ...combinedProps } />
      }
    </React.Suspense>
  );
}

let App = Wrapper;

App = withAccount(App);
App = withSiteConfig(App);
App = withMember(App);

export default App;
