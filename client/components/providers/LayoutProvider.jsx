import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Drawer from '../shared/Drawer';
import Header from '../shared/Header';
import withMessage from './MessageProvider';
import Breadcrumbs from '../../components/shared/Breadcrumbs';
import Footer from '../../components/shared/Footer';
import { PAGES } from '../../constants';

const withLayout = WrappedComponent => {
  let LayoutProvider = props => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
      <React.Fragment>
        {props.Member
          ?
            <Header
              title={props.headerTitle}
              onClickLogo={() => props.routeTo(PAGES.HOME.PATH)}
              onClickLogout={() => { window.location = PAGES.LOGOUT.PATH; }}
              onClickMenuButton={() => setDrawerOpen(!drawerOpen)}
            />
          :
            <Header
              title={props.headerTitle}
              onClickLogo={() => props.routeTo(PAGES.HOME.PATH)}
              onClickLogin={() => { window.location = PAGES.LOGIN.PATH; }}
              onClickSignup={() => props.routeTo(PAGES.SIGNUP.PATH)}
              showProgress={false}
            />
        }

        {props.showBreadcrumbs &&
          <Breadcrumbs location={props.location} />
        }

        {props.Member &&
          <Drawer
            isOpen={drawerOpen}
            onClose={() => setDrawerOpen(!drawerOpen)}
            routeTo={props.routeTo}
          />
        }

        <Container
          fixed
          component='main'
        >
          <WrappedComponent { ...props } />
        </Container>

        {props.message}

        <Footer />
      </React.Fragment>
    );
  };

  LayoutProvider.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    showBreadcrumbs: PropTypes.bool,
  }

  LayoutProvider.defaultProps = {
    showBreadcrumbs: true,
  };

  LayoutProvider = withMessage(LayoutProvider);

  const mapStateToProps = state => ({
    location: state.router.location,
  });

  return connect(mapStateToProps, () => ({}))(LayoutProvider);
}

export default withLayout;
