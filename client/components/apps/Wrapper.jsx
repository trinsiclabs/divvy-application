import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import withMember from '../providers/MemberProvider';
import withSiteConfig from '../providers/SiteConfigProvider';
import FallbackProgress from '../shared/FallbackProgress';

const Authenticated = React.lazy(() => import('./Authenticated'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const Unauthenticated = React.lazy(() => import('./Unauthenticated'));

const Wrapper = props => {
  const { siteConfig, member } = props;

  const error = siteConfig.error || member.error;
  const loading = siteConfig.loading || member.loading;

  let combinedProps = { ...props };

  if (!siteConfig.loading && siteConfig.data.readSiteConfig !== null) {
    combinedProps.AllowPublicSignup = siteConfig.data.readSiteConfig[0].AllowPublicSignup;
  }

  if (!member.loading && member.data.readMember !== null) {
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

App = withSiteConfig(App);
App = withMember(App);

export default App;
