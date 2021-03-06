import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import PropTypes from 'prop-types';
import React from 'react';
import {PAGES} from '../../constants';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

const handleListItemClick = (routeTo, path) => {
  return () => {
    routeTo(path);
  };
};

const DrawerComponent = props => {
  const classes = useStyles();

  return (
    <Drawer
      open={props.isOpen}
      onClose={props.onClose}
    >
      <div
        className={classes.list}
        onClick={props.onClose}
        onKeyDown={props.onClose}
        role='presentation'
      >
        <List>
          <ListItem
            button
            onClick={handleListItemClick(props.routeTo, PAGES.HOME.PATH)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={props.orgName} />
          </ListItem>

          <ListItem
            button
            onClick={handleListItemClick(props.routeTo, PAGES.WALLET.PATH)}
          >
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary={PAGES.WALLET.TITLE} />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

DrawerComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  routeTo: PropTypes.func.isRequired,
};

export default DrawerComponent;
