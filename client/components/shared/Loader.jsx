import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(2),
  },
  wrapperCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const LoaderComponent = props => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.wrapper, { [classes.wrapperCenter]: props.align === 'center' })}>
      <CircularProgress { ...props.materialProps } />
    </div>
  );
};

LoaderComponent.propTypes = {
  align: PropTypes.string,
  materialProps: PropTypes.object,
}

LoaderComponent.defaultProps = {
  align: '',
  materialProps: {},
};

export default LoaderComponent;
