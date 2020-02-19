import {amber, green} from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {makeStyles} from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {hide, show} from '../../redux/message/actions';

const icons = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const withMessage = WrappedComponent => {
  const MessageProvider = props => {
    const classes = styles();
    const Icon = icons[props.message.type];

    const message = (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={props.message.show}
        autoHideDuration={6000}
        onClose={props.hideMessage}
      >
        <SnackbarContent
          className={clsx(classes[props.message.type])}
          aria-describedby='client-snackbar'
          message={
            <span
              id='client-snackbar'
              className={classes.message}
            >
              <Icon className={clsx(classes.icon, classes.iconVariant)} />
              {props.message.content}
            </span>
          }
          action={[
            <IconButton
              key='close'
              aria-label='Close'
              color='inherit'
              onClick={props.hideMessage}
            >
              <CloseIcon className={classes.icon} />
            </IconButton>,
          ]}
        />
      </Snackbar>
    );

    return (
      <WrappedComponent
        {...props}
        message={message}
      />
    );
  }

  MessageProvider.propTypes = {
    message: PropTypes.object.isRequired,
    showMessage: PropTypes.func.isRequired,
  }

  const mapStateToProps = state => ({
    message: state.message,
  });

  const mapDispatchToProps = dispatch => ({
    hideMessage: () => {
      dispatch(hide());
    },
    showMessage: (content, type) => {
      dispatch(show(content, type));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(MessageProvider);
}

export default withMessage;
