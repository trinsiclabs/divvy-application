import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';
import {PAGES} from '../../constants';
import {urlMatchesPath} from '../../util/path';

const useStyles = makeStyles(theme => ({
  breadcrumbs: {
    marginBottom: theme.spacing(5),
  },
}));

const findLocationTitle = (url) => {
  const key = Object.keys(PAGES).find(key => {
    return urlMatchesPath(url, PAGES[key].PATH);
  });

  return key !== undefined ? PAGES[key].TITLE : '';
};

const BreadcrumbsComponent = props => {
  if (props.location.pathname === PAGES.HOME.PATH) {
    return null;
  }

  const classes = useStyles();
  const pathnames = location.pathname.split('/');

  return (
    <Container fixed>
      <Breadcrumbs
        className={classes.breadcrumbs}
        aria-label='Breadcrumb'
      >
        <Link
          color='inherit'
          to={PAGES.HOME.PATH}
        >
          Home
        </Link>
        {pathnames.reduce((results, value, index) => {
          if (value === '') {
            return results;
          }

          const to = `${pathnames.slice(0, index + 1).join('/')}`;
          const title = findLocationTitle(to);

          if (title === '') {
            return results;
          }

          const crumb = index === pathnames.length - 1
            ?
              <Typography
                key={to}
                color='textPrimary'
              >
                {title}
              </Typography>
            :
              <Link
                key={to}
                color='inherit'
                to={to}
              >
                {title}
              </Link>

            results.push(crumb);

            return results;
        }, [])}
      </Breadcrumbs>
    </Container>
  );
};

BreadcrumbsComponent.propTypes = {
  location: PropTypes.object.isRequired,
};

export default BreadcrumbsComponent;
