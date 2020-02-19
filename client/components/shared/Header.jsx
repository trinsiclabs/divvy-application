import LinearProgress from '@material-ui/core/LinearProgress';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  logo: {
    marginRight: theme.spacing(1),
  },
  logoCenter: {
    position: 'absolute',
    left: '50%',
    marginLeft: '-24px',
  },
  title: {
    flexGrow: 1,
  },
  login: {
    transform: 'rotate(180deg)'
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const HeaderComponent = props => {
  const classes = useStyles();

  const logo = (
    <IconButton
      className={classNames(classes.logo, { [classes.logoCenter]: props.onClickLogin === null })}
      color='inherit'
      edge='start'
      onClick={props.onClickLogo}
    >
      <SvgIcon>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    </IconButton>
  );

  return (
    <div className={classes.root}>
      <Box mb={4} style={{position: 'relative'}}>
        <AppBar position='static'>
          <Toolbar>
            {props.onClickMenuButton !== null &&
              <IconButton
                aria-label='Menu'
                className={classes.menuButton}
                color='inherit'
                edge='start'
                onClick={props.onClickMenuButton}
              >
                <MenuIcon />
              </IconButton>
            }

            {logo}

            <Typography
              id='page-title'
              className={classes.title}
              variant='h6'
            >
              {props.title}
            </Typography>

            {props.onClickSignup !== null &&
              <Button
                className={classes.button}
                variant='outlined'
                color='inherit'
                onClick={props.onClickSignup}
              >
                Signup
              </Button>
            }

            {props.onClickLogin !== null &&
              <Button
                className={classes.button}
                variant='outlined'
                color='inherit'
                onClick={props.onClickLogin}
              >
                Login
              </Button>
            }

            {props.onClickLogout !== null &&
              <Button
                className={classes.button}
                variant='outlined'
                color='inherit'
                onClick={props.onClickLogout}
              >
                Logout
              </Button>
            }
          </Toolbar>
        </AppBar>

        {props.showProgress &&
          <LinearProgress
            color='secondary'
            style={{
              position: 'absolute',
              width: '100%',
              bottom: '-4px',
            }}
          />
        }
      </Box>
    </div>
  );
};

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClickLogin: PropTypes.func,
  onClickLogo: PropTypes.func,
  onClickLogout: PropTypes.func,
  onClickSignup: PropTypes.func,
  onClickMenuButton: PropTypes.func,
  showProgress: PropTypes.bool,
}

HeaderComponent.defaultProps = {
  onClickLogin: null,
  onClickLogo: null,
  onClickLogout: null,
  onClickSignup: null,
  onClickMenuButton: null,
  showProgress: false,
};

export default HeaderComponent;
